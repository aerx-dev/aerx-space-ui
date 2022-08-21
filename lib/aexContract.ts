import { Big } from "big.js";


//Returns the total number of tokens that exist in circulation
export async function getTotalSupply(state: { tokenContract: { ft_total_supply: () => Promise<string>; }; }) {
    return await state.tokenContract.ft_total_supply();
}

//Returns users balance
export async function getBalance(state: { tokenContract: { ft_balance_of: (arg0: { account_id: string; }) => Promise<string>; }; accountId: any; aexBalance: any; setAexBalance: (arg0: any) => void; }) {
    const balance = await state.tokenContract
        ?.ft_balance_of({
            account_id: state.accountId,
        })
        .catch((err) => {
            console.log(err.message);
            if (err.message.includes("User does not exist")) {
                return 0;
            }
        });
    console.log("Your Balance :", balance);
    const blnc = new Big(balance || 0);
    const formatted = blnc.div("10e23").toFixed(1);
    if (formatted !== state.aexBalance) {
        state.setAexBalance(formatted);
    }
    return { balance, formatted };
}

//Todo: add all aex contract functions
