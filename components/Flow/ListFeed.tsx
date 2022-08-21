import Image from 'next/image';
import React from 'react'
import { posts } from '../../helpers/data/feeds';
import { Post } from '../../types/Post';
import VideoControl from '../VideoControl';

const TextPost: React.FC<Post> = ({coverImage, postOwner, nftId, title, description}) => {
    const bgImage = coverImage;
    return (
        <div className='w-[60%] h-[40vh] flex flex-col justify-between rounded-[20px] px-4 pt-4 pb-2' style={{
            backgroundImage: `url(${bgImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            }}>
            <div className='flex justify-between items-center'>
             <div className='flex gap-2 items-center'>
             <Image src={postOwner.avatar} alt={`${postOwner.name}'s avatar`} width={40} height={40} />
             <label className='text-sm text-white font-bolder'>{postOwner.name}</label>
            </div>

            <div className='flex gap-1 bg-[#ffffff31] p-2 rounded-[20px]'>
              <Image src="/assets/icons/nft-icon.svg" alt='NFT' width={15}  height={15} />
              <label className='text-[11px] text-white'>{nftId}</label>
            </div>
           </div>

           <div>
                <h1 className='text-white font-bold text-xl' style={{fontWeight:'bold'}}>{title}</h1>
                <p className='text-sm text-white mt-2'>{description.substring(0, 75)} ... </p>

                <div className='flex justify-between mt-2 items-center'>
                    <div className='flex gap-3 items-center'>
                        <div>
                            <Image src="/assets/icons/comment-icon.svg" alt="comment" width={20} height={20} />
                        </div>
                        <div>
                            <Image src="/assets/icons/share-icon.svg" alt="comment" width={20} height={20} />
                        </div>
                        <div>
                            <Image src="/assets/icons/save-post-icon.svg" alt="comment" width={20} height={20} />
                        </div>
                    </div>

                    <div>
                        <Image src="/assets/icons/send-message-icon.svg" alt="comment" width={25} height={25} />
                    </div>
                </div>
           </div>
        </div>
    )
}

const VideoPost: React.FC<Post> = ({coverImage, postOwner}) => {
    return (
        <div className='relative w-[38%]  h-[40vh] rounded-[20px]'>

        <div className='w-full  h-full absolute rounded-[20px]' 
        style={{
            backgroundImage: `url(${coverImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            filter: 'blur(2px)',
        }}>
        </div>
            <div className='p-2 h-full relative flex flex-col justify-between'>
                <div className='flex gap-2'>
                    <Image src={postOwner?.avatar} alt={postOwner?.name} width={40} height={40} />
                    <div className='flex flex-col'>
                        <label className='text-white text-sm' style={{fontWeight: 'bold'}}>{postOwner.name} hell</label>
                        <label className='text-[13px] text-white'>{postOwner?.bio}</label>
                    </div>
                </div>

                <div className='relative w-full'>
                <div className='relative w-full flex justify-around'>
                <div className='w-[80%] h-[150px] border-[6px] border-white flex justify-around items-center' style={{
                    backgroundImage: `url(${coverImage})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                }}>
                    <Image src="/assets/icons/play-icon.svg" alt="Play video" width={30} height={30} />
                </div>
                </div>

                <div className='mt-4'>
                <VideoControl />
                </div>
               </div>

               <div className='flex justify-between mt-2 items-center'>
                    <div className='flex gap-4 items-center'>
                        <div>
                            <Image src="/assets/icons/share-icon.svg" alt="Share" width={20} height={20} />
                        </div>
                        <div>
                            <Image src="/assets/icons/add-to-list-icon.svg" alt="Add to List" width={20} height={20} />
                        </div>
                       
                    </div>

                    <div>
                        <Image src="/assets/icons/send-message-icon.svg" alt="Send" width={25} height={25} />
                    </div>
                </div>
            </div>
        </div>
    )
}

const TempoPost: React.FC<Post> = ({coverImage, postOwner}) => {
    
    return (
        <div className='flex flex-col justify-between w-[38%] bg-black h-[40vh] rounded-[20px] p-2' style={{
            backgroundImage: `url(${coverImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            }}>
           <div className='flex justify-between items-center'>
             <div className='bg-[#ffffff48] rounded-full w-[25px]  h-[25px] flex justify-around'>
                <Image src="/assets/icons/tempo-icon.svg" alt="tempo post" width={15} height={15} />
             </div>
             <div>
                <Image src="/assets/icons/play-icon.svg" alt="play" width={15} height={15} />
             </div>
           </div>

           <div className='w-full flex justify-around '>
            <div className='flex flex-col'>
                <Image src={postOwner.avatar} alt={`${postOwner.name}'s avatar`} width={40} height={40} />
                <label className='mt-2 text-center text-white ' style={{fontWeight: 'bold'}}>{postOwner.name}</label>
                <label className='text-white text-center text-[12px]' style={{fontWeight:'lighter'}}>{postOwner.bio}</label>
            </div>
           </div>

           <div>
              <div className='flex justify-between items-center'>
                        <div>
                            <Image src="/assets/icons/comment-icon.svg" alt="comment" width={20} height={20} />
                        </div>
                        <div>
                            <Image src="/assets/icons/share-icon.svg" alt="comment" width={20} height={20} />
                        </div>
                        <div>
                            <Image src="/assets/icons/save-post-icon.svg" alt="comment" width={20} height={20} />
                        </div>
                        <div>
                            <Image src="/assets/icons/send-message-icon.svg" alt="comment" width={25} height={25} />
                        </div>
                    </div>
           </div>

        </div>
    )
}


const ListFeeds: React.FC = () => {
    return (
        <div className='w-full flex  flex-wrap gap-2 gap-y-3'>
            {posts.map((post: Post, index: number) => (
                <>
                    {post.type === 'text' && 
                        <TextPost {...post} key={index}/>
                    }
                    {post.type === 'video' && 
                        <VideoPost {...post} key={index} />
                    }
                    {post.type === 'tempo' && 
                        <TempoPost {...post} key={index} />
                    }
                </>
            ))}
        </div>
    )
}
export default ListFeeds;