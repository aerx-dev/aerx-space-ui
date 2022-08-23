import React, { useState } from 'react'
import AddPost from './AddPost';
import FlowHeader from './Header';
import ListFeeds from './ListFeed';

interface IProps {
    onCollapse: () => void,
    chatCollapsed: boolean
}
const FlowFeeds: React.FC<IProps> = ({ onCollapse, chatCollapsed=false}) => {
    const [addPost, setAddPost] = useState<boolean>(false);
    return (
        <div className='w-full min-h-[100%] h-[max-content] bg-black-dark rounded-[10px]'>
        {!addPost && 
        <>
        <div className='flex  gap-2 py-2 px-4'>
           <FlowHeader  
            onAddPost={() => setAddPost(true)}
            onCollapse={onCollapse}
            />
        </div>
        <div className='px-4 py-2'>
          <ListFeeds chatCollapsed={chatCollapsed} />
        </div>
        </>
        }
        {
            addPost &&
            <AddPost onClose={() => setAddPost(false)} />
        }
        </div>
    )
}

export default FlowFeeds;