import React, { useState } from 'react';
import Chat from '../../components/Chat';
import FlowFeeds from '../../components/Flow';
import Space from '../../components/Space';

const Flow: React.FC = () => {
    const [chatCollapsed, setChatCollapsed] = useState<boolean>(false);
    const [spaceCollapsed, setSpaceCollapsed] = useState<boolean>(false);

    const onFlowFeedCollapse = () => {
        if(!chatCollapsed && !spaceCollapsed){
            setChatCollapsed(true);
            setSpaceCollapsed(true);
        }
        else{
            setChatCollapsed(false);
            setSpaceCollapsed(false);
        }
    }
    return (
        <div className='w-full h-screen bg-black p-6 flow'>
           <div className='flex justify-between'>
               {!chatCollapsed && 
                 <div className={`w-[39%] h-[94vh]`}>
                    <Chat onCollapse={() => setChatCollapsed(true)}/>
                 </div>
               }

                <div className={`h-[94vh] overflow-y-scroll`} 
                 style={{
                    width:( !chatCollapsed && !spaceCollapsed) ? "39%" :
                    (chatCollapsed && !spaceCollapsed) ? "78%" :
                    (!chatCollapsed && spaceCollapsed) ? "57%" : "100%",
                    
                    padding: (chatCollapsed && spaceCollapsed) ? "0% 10%" :""
                  }}
                >
                    <FlowFeeds 
                     onCollapse={onFlowFeedCollapse}
                     chatCollapsed={chatCollapsed}
                    />
                </div>

                {!spaceCollapsed && 
                    <div className='w-[18%] h-[94vh]'>
                    <Space onCollapse={() => setSpaceCollapsed(true)}/>
                </div>
                }
               
            </div>
        </div>
    )
}

export default Flow;