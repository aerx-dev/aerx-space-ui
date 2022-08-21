import Image from 'next/image';
import React, { useState } from 'react'
import SearchInput from '../SearchInput';
import ChatRoom from './ChatRoom';

export interface IMessageItem {
    avatar: string,
    name: string,
    status: 'online' | 'offline' | 'isTyping',
    time: string,
    message: string,
    isActive?: boolean,
    onClick?: () => void;
}



const ChatHeader: React.FC = () => {
    const [isPersonalActive, setIsPersonalActive] = useState<boolean>(true);
    return (
        <div className=''>
        <div className='flex justify-between items-center'>
            <label className='font-bold text-white'>Chats</label>
            <div className='flex items-center  gap-4 text-[12px]'>
                <div 
                onClick={() => setIsPersonalActive(true)}
                className={`${isPersonalActive ? 'bg-primary text-white px-4 ': ' text-red-200 ' }   p-2 rounded-md cursor-pointer`}>
                    <label className={`cursor-pointer ${isPersonalActive ? ' text-white ': 'text-gray-400'}`}>Personal</label>
                </div>
                <div  
                onClick={() => setIsPersonalActive(false)}
                className={`${!isPersonalActive ? 'bg-primary text-white px-4 ': 'text-gray-200'} p-2 rounded-md cursor-pointer`}>
                   <label className={`cursor-pointer ${!isPersonalActive ? ' text-white ': 'text-gray-400'}`}>Work</label>
                </div>
            </div>
        </div>
        <div className='mt-4'>
            <SearchInput />
        </div>
      </div>
    )
}

const MessageItem: React.FC<IMessageItem> = ({avatar, name, time, status, message, isActive, onClick}) => {
    return (
        <div onClick={onClick} className={`mt-2 ${isActive ? 'bg-[#2b2b2b] rounded-[10px]' : ''} px-3 py-2`}>
            <div className='flex items-center gap-4 cursor-pointer '>
                <div>
                    <Image src={avatar} width={40} height={40} alt="Avatar" />
                </div>
                <div>
                    <div className='flex justify-between'>
                        <label className='text-white text-bold text-[14px]'>
                            {name}
                        </label>
                        {status !== 'isTyping' && 
                        <label className='text-white opacity-[30%] text-sm'>{time}</label>
                        }
                    </div>
                    <div className='text-sm text-lighter'>
                        {status === 'isTyping' &&
                         <label className='text-primary'>Typing...</label>
                        }
                        {status !== 'isTyping' && 
                        <label className='text-white opacity-[30%] mt-1'>{message.substring(0, 15)} ...</label>
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

const Chat: React.FC = () => {
    const pinnedMessages: Array<IMessageItem> = [
        {
            avatar: '/assets/images/avatar-1.svg',
            name: 'John Doe',
            status: 'isTyping',
            time: '12:00',
            message:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.'
        },
        {
            avatar: '/assets/images/avatar.svg',
            name: 'John Doe',
            status: 'offline',
            time: '12:00',
            message:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.'

        },
        {
            avatar: '/assets/images/avatar.svg',
            name: 'John Doe',
            status: 'offline',
            time: '12:00',
            message:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.'

        }
    ];

    const allChats: Array<IMessageItem> = [
        {
            avatar: '/assets/images/avatar.svg',
            name: 'John Doe',
            status: 'online',
            time: '12:00',
            message:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.'
        },
       
        {
            avatar: '/assets/images/avatar.svg',
            name: 'John Doe',
            status: 'offline',
            time: '12:00',
            message:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.'

        },
        {
            avatar: '/assets/images/avatar.svg',
            name: 'John Doe',
            status: 'offline',
            time: '12:00',
            message:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.'

        },
        
    ];


    const [activeMessage, setActiveMessage] = useState<number>(0);

    return (
        <div className='w-full h-[100%] bg-black-dark rounded-[10px] flex gap-2'>
           <div className='w-[45%] rounded-[10px] bg-black-light h-full p-4'>
                <ChatHeader />

                <div>
                <div className='flex gap-2 mt-4'>
                    <Image src="/assets/icons/pin-icon.svg" alt="Pin" width={13} height={13} />
                    <label className='text-[14px] text-white opacity-[15%]'>Pinned</label>
                </div>
                <div>
                    {pinnedMessages.map((message, index) => (
                        <MessageItem onClick={() => setActiveMessage(index)} key={index} {...message}  isActive={activeMessage === index ? true : false}/>
                    ))
                    }                   
                </div>
                </div>

                <div>
                <div className='flex gap-2 mt-4'>
                    <Image src="/assets/icons/fill-icon.svg" alt="Pin" width={13} height={13} />
                    <label className='text-[14px] text-white opacity-[15%]'>All Charts</label>
                </div>
                <div>
                    {allChats.map((message, index) => (
                        <MessageItem key={index} {...message}  isActive={false}/>
                    ))
                    }                   
                </div>
                </div>
           </div>
           <div className='w-[55%]'>
            <ChatRoom />
           </div>
        </div>
    )
}

export default Chat;