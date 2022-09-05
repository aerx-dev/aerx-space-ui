import React,{useEffect, useState} from 'react';
import Chat from '../../components/Chat';
import CollapsingSidebar from '../../components/CollapsingSidebar';
import FlowFeeds from '../../components/Flow';
import Space from '../../components/Space';
import { expandChat, expandFlow, expandSpace, selectModules } from '../../store/slices/modulesSlices';
import { useDispatch, useSelector } from '../../store/store';
import Index from "../../components/Profiles/index"
const Flow: React.FC = () => {
    const dispatch = useDispatch();
    const { flow, chat, space, collections  } = useSelector(selectModules);
    const [flowWidth, setFlowWidth] = useState<string>();
    const handleChatClicked = () => {
        dispatch(expandChat())
    }
    const handleFlowClicked = () => {
        dispatch(expandFlow())
    }
    const handleSpaceClicked = () => {
        dispatch(expandSpace())
    }

    useEffect(() => {
       
    },[chat])

    return (
        <div className='w-full h-screen bg-black p-6 flow'>
           <div className='flex justify-between'>
           <Index />

                {/* <CollapsingSidebar 
                onChatClicked={handleChatClicked}
                onFlowClicked={handleFlowClicked}
                onSpaceClicked={handleSpaceClicked}
                /> */}

            {!chat.collapsed && 
                <div className='w-[39%] h-[94vh] ml-[20px]'
                 style={{
                    width: (chat.minimized) ? "19.5%" : 
                    (flow.collapsed) ? "75%" : "",
                    marginLeft: (chat.minimized) ? "5%" : ""
                 }}
                >
                    <Chat />
                </div>
            }

            {!flow.collapsed && 
                <div className=' w-[39%] h-[94vh] overflow-y-scroll'
                  style={{
                    width: 
                    (chat.minimized && !space.collapsed) ? "55%" : 
                    (chat.collapsed && !space.collapsed) ? "75%" : 
                    (space.collapsed && chat.minimized) ? "73%" : 
                    (space.collapsed && chat.default) ? "58%" : 
                    (space.collapsed && chat.collapsed) ? "95%" : "",
                    padding: (space.collapsed && chat.collapsed) ? "0% 10%" :"",
                    marginLeft: (chat.collapsed) ? "5%" : ""
                  }}
                >
                    <FlowFeeds />
                </div>
            }

            {!space.collapsed && 
                <div className='w-[18%] h-[94vh]'>
                    <Space />
                </div>
            }
            </div>
        </div>
    )
}

export default Flow;