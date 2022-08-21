// require('dotenv').config();
import * as nearApiJs from "near-api-js";
import { PNFTContract } from "../types/contracts";
import { getConfig } from "./config";
import {
    connect,
    Contract,
    WalletConnection,
    keyStores,
    ConnectConfig,
    ConnectedWalletAccount,
} from "near-api-js";
import { NearStoreType } from "../types/stores";
import {
    DexContract,
    ProfileContract,
    TokenContract,
} from "../types/contracts";

import { TOKEN_CONTRACT_NAME, PROFILE_CONTRACT_NAME, DEX_CONTRACT_NAME } from "../utils/constants/contract";


const {
    KeyPair,
    InMemorySigner,
    transactions: { addKey },
    utils: {
        PublicKey,
        format: { parseNearAmount, formatNearAmount },
    },
    Account,
} = nearApiJs;

export default async function contractFullAccessKey(
    _c_type: string,
): Promise<PNFTContract | null> {
    // Step 1:  get the keypair from the contract's full access private key
    let PRIV_KEY;
    let CONTRACT_NAME;

    if (_c_type === "AerxProfileContract") {
        PRIV_KEY = process.env.NEXT_PUBLIC_PNFT_PRIV_KEY;
        CONTRACT_NAME = process.env.NEXT_PUBLIC_PNFT_ID;
    } else {
        //Todo: throw an error
        console.log("Invalid _c_type passed")
    }

    if (!PRIV_KEY) {
        console.error("PRIV KEY IS NULL");
        return null;
    }
    const { networkId, nodeUrl, walletUrl } = getConfig("testnet");
    const keyPair = KeyPair.fromString(PRIV_KEY);

    // Step 2:  load up an inMemorySigner using the keyPair for the account
    if (!CONTRACT_NAME) {
        console.error("CONTRACT NAME IS NULL");
        return null;
    }
    const keyStore = new nearApiJs.keyStores.InMemoryKeyStore();
    keyStore.setKey(networkId, CONTRACT_NAME, keyPair);

    let signer = new InMemorySigner(keyStore);

    // Step 3:  create a connection to the network using the signer's keystore and default config for testnet
    const config: ConnectConfig = {
        networkId,
        nodeUrl,
        walletUrl,
        keyStore: signer.keyStore,
        headers: {},
    };
    const near = await nearApiJs.connect(config);

    // Step 4:  get the account object of the currentAccount.  At this point, we should have full control over the account.
    let account;
    try {
        account = new nearApiJs.Account(near.connection, CONTRACT_NAME);
    } catch (e: any) {
        alert("ERROR GETTING ACCOUNT");
    }
    if (!account) {
        console.error("ACCOUNT IS NULL");
        return null;
    }
    if (!CONTRACT_NAME) {
        console.error("CONTRACT NAME IS NULL");
        return null;
    }

    // initiate the contract so its associated with this current account and exposing all the methods
    const contract = new nearApiJs.Contract(account, CONTRACT_NAME, {
        viewMethods: [
            "is_username_available",
            "has_registered",
            "profile_by_id",
            "post_details",
            "get_all_posts",
            "get_user_ids",
            "repost_details",
            "get_all_repost",
        ],
        changeMethods: [
            "mint_profile",
            "edit_profile",
            "mint_post",
            "comment",
            "charge",
            "charge_repost",
        ],
    }) as PNFTContract;

    return contract;
}


export async function initNearConnection(nearState: NearStoreType) {
    // Initialize connection to the NEAR testnet
    const nearTokenConfig = getConfig(process.env.NODE_ENV);
    //set keystore and connect
    const keyStore = new keyStores.BrowserLocalStorageKeyStore();
    const config: ConnectConfig = {
        ...nearTokenConfig,
        headers: {},
        keyStore,
    };
    const nearConnection = await connect(config);
    console.log("nearConnection : ", nearConnection);
    nearState.setConnection(nearConnection);

    // TODO: CHECK IF THE KEY IS NOT CAUSING LOCALSTORAGE ACCESS ISSUE
    const walletConnection = new WalletConnection(nearConnection, "Aerx");
    console.log("walletConnection : ", walletConnection);
    nearState.setWalletConnection(walletConnection);

    //Get accountId 
    const accountId = walletConnection.getAccountId();
    console.log("accountId : ", accountId);
    //verify accountId exists
    if (!accountId) {
        console.error("ACCOUNTID IS EMPTY");
        return;
    }
    nearState.setAccountId(accountId);
    //.2 load tokenContract whenever it is ready
    await loadTokenContract(nearState, walletConnection.account());
    //3. load dex contract whenever it is ready
    await loadDexContrat(nearState, walletConnection.account());
    //.4 load profile with user as signer(incase aerx decide to let user pay)
    await loadProfileWithUserAsSigner(nearState, walletConnection.account());
    //.5 halt until pnftContract is set to state
    await loadProfileContract(nearState);
    // complete the initnearConnection
}


export async function checkProfile(nearState: any) {
    // checks profile is initialised and user is connected
    if (nearState.pnftContract && nearState.accountId) {
        console.log("profile checking ...", nearState.profile);
        const has_registered = await nearState.pnftContract?.has_registered({
            user_id: nearState.accountId,
        });
        console.log("Has user registered? : ", has_registered);
        // composed the (image) and (extra) query fields
        if (has_registered) {
            const user_info = await nearState.pnftContract?.profile_by_id({
                user_id: nearState.accountId,
                user_to_find_id: nearState.accountId,
            });
            // check if the nft has extra fields
            const extra = user_info.metadata?.extra
                ? JSON.parse(user_info.metadata.extra)
                : null;
            // check if the nft has media
            const image = user_info.metadata?.media
                ? user_info.metadata.media
                : null;
            // set profile to state
            nearState.setProfile({
                ...user_info,
                ...extra,
                profileImg: image,
            });
        }
    }
}

// Initializing our token contract APIs by contract name and configuration
const loadTokenContract = (
    nearState: NearStoreType,
    account: ConnectedWalletAccount,
) => {
    const tokenContract: TokenContract = new Contract(
        account,
        TOKEN_CONTRACT_NAME,
        {
            viewMethods: [
                "ft_balance_of",
                "get_owner",
                "ft_total_supply",
                "ft_metadata",
            ],
            changeMethods: [
                "claim_gift",
                "reward_users_for_anniversaries",
                "change_owner_to",
                "ft_transfer",
                "ft_transfer_call",
                "send_aex",
            ],
        },
    ) as TokenContract;

    nearState.setTokenContract(tokenContract);
    console.log("token contract:", tokenContract);
};

const loadDexContrat = (
    nearState: NearStoreType,
    account: ConnectedWalletAccount,
) => {
    const dexContract = new Contract(account, DEX_CONTRACT_NAME, {
        viewMethods: ["all_pools", "get_user_share"],
        changeMethods: [
            "connect_or_get_balance",
            "create_pool",
            "lend",
            "swap_aex",
        ],
    }) as DexContract;
    nearState.setDexContract(dexContract);
    console.log("dexContract: ", dexContract);
};
const loadProfileWithUserAsSigner = (
    nearState: NearStoreType,
    account: ConnectedWalletAccount,
) => {
    const profileContractWithUserAsSigner = new Contract(
        account,
        PROFILE_CONTRACT_NAME,
        {
            // change methods(methods that change state)
            changeMethods: [
                "mint_post",
                "repost",
                "swap",
                "list_post_for_sale",
                "transfer_ownership",
                "buy_post",
            ],
            viewMethods: [
                "is_username_available",
                "has_registered",
                "profile_by_id",
                "post_details",
                "nft_tokens",
                "get_all_posts",
                "get_user_ids",
                "repost_details",
                "get_all_repost",
            ],
        },
    ) as ProfileContract;
    nearState.setProfileWithUserAsSigner(profileContractWithUserAsSigner);
};

const loadProfileContract = async (nearState: NearStoreType) => {
    const pnftContract = await contractFullAccessKey("AerxProfileContract");
    if (!pnftContract) {
        throw new Error("Failed to create PNftContract");
    }
    nearState.setPNFTContract(pnftContract);
    console.log("pnft contract:", pnftContract);
}

export function logout(nearState: NearStoreType) {
    // TODO: NEED TO CONFIRM IF IT'S OK TO THROW
    if (!nearState.walletConnection) {
        throw new Error("wallet is not connected");
    }
    // reset store
    nearState.walletConnection.signOut();
    //remove connection
    nearState.removeConnection();
    nearState.removeWalletConnection();
    // reload page
    window.location.replace(window.location.origin + window.location.pathname);
}

export async function loginToken(nearState: NearStoreType) {
    if (!nearState.walletConnection) {
        throw new Error("wallet is not connected");
    }
    //Todo: change contract to profile
    await nearState.walletConnection.requestSignIn(
        process.env.TOKEN_CONTRACT_NAME,
        "",
        window.location.origin + "/settings/profile",
        "",
    );

    //Todo: create custom url/page for error 401 or 404
}
