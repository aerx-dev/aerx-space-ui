import React from 'react';
import Chat from '../../components/Chat';
import FlowFeeds from '../../components/Flow';
import Space from '../../components/Space';

const Flow: React.FC = () => {
    return (
        <div className='w-full h-screen bg-black p-6 flow'>
           <div className='flex justify-between'>
                <div className='w-[39%] h-[94vh]'>
                    <Chat />
                </div>

                <div className=' w-[39%] h-[94vh] overflow-y-scroll '>
                    <FlowFeeds />
                </div>

                <div className='w-[18%] h-[94vh]'>
                    <Space />
                </div>
            </div>
        </div>
    )
}

export default Flow;