import React from 'react'
import FlowHeader from './Header';
import ListFeeds from './ListFeed';

const FlowFeeds: React.FC = () => {
    return (
        <div className='w-full h-[100%] bg-black-dark rounded-[10px]'>
        <div className=' flex gap-2 py-2 px-4'>
           <FlowHeader />
        </div>
        <div className='px-4 py-2'>
           <ListFeeds />
        </div>
        </div>
    )
}

export default FlowFeeds;