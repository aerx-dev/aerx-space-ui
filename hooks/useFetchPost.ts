import { nearStore } from "../store/near";

// re-wrote this to return a single callable function instead
// todo - modify this to append to feed state instead
// todo - to be called as the user scrolls down in the content page : opt

export default function useFetchPosts(state: { pnftContract: { get_all_posts: (arg0: { user_id: string; }) => Promise<any>; }; accountId: string; setFeed: (arg0: any) => void; }) {
    async function refreshPosts() {
        if (state.pnftContract) {
            const responseFeed = await state.pnftContract
                ?.get_all_posts(
                    {
                        user_id: state.accountId,
                    }
                )
                .catch((e) => {
                    console.log("ERROR in usefetchpost");
                });
            console.log("All posts :", responseFeed);
            if (responseFeed) {
                state.setFeed(responseFeed.reverse());
            }
        }
    }

    return refreshPosts;
}

export async function fetchpostsData(state: { pnftContract: { has_registered: (arg0: { user_id: string; }) => Promise<boolean>; get_all_posts: (arg0: { user_id: string; }) => Promise<[any]>; }; accountId: string; setFeed: (arg0: any) => void; }) {
    if (state.pnftContract) {
        const isUserRegistered = await state.pnftContract?.has_registered({
            user_id: state.accountId,
        });
        console.log("Is user registered? : ", isUserRegistered);
        if (isUserRegistered) {
            const responseFeeddata = await state.pnftContract?.get_all_posts({
                user_id: state.accountId,
            });
            console.log("All posts data :", responseFeeddata);
            if (responseFeeddata) {
                state.setFeed(responseFeeddata.reverse());
            }
        }
    }
}

