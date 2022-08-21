export type Post = {
    id: number;
    postOwner: {
        name: string,
        avatar: string,
        bio?: string
    }
    title: string;
    description: string,
    type: 'text' | 'image' | 'video' | 'audio' | 'file' | 'tempo',
    postType: 'post' | 'tempo',
    coverImage: string,
    attachment: string,
    nftId: string,
}