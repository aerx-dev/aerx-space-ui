import Image from 'next/image';
import React from 'react'

const Space: React.FC = () => {
    return (
        <div className='w-full h-[100%] bg-black-dark rounded-[10px] p-2 pb-8 px-4 flex flex-col justify-between'>
            <div className='flex justify-between items-center'>
            <div className='flex items-center gap-3'>
                <Image src='/assets/icons/space-icon.svg' alt="Space" width={30} height={30} />
                <label className='text-white'>Space</label>
            </div>
            <div className='flex items-center'>
                <Image src='/assets/icons/chat-room-menu-icon.svg' alt="Menu" width={30} height={30} />
            </div>
            </div>

            <div className='w-full flex justify-around flex-col'>
                <Image src='/assets/images/anna-smith-avatar.svg' className='rounded-full' alt="Anna Smith" width={50} height={50} />
                <div className='w-full flex justify-around mt-6'>
                <div className='flex gap-2'>
                    <Image src="/assets/icons/voice-note-icon.svg" alt="Voice Note" width={40} height={40} />
                    <Image src="/assets/icons/space-call-icon.svg" alt="Space Call" width={40} height={40} />
                    <Image src="/assets/icons/add-space-user.svg" alt="Add to Space" width={40} height={40} />
                </div>
                </div>
            </div>

            <div className='flex justify-around'>
                <label className='text-[#ffffff6d]'>32:46</label>
            </div>
        </div>
    )
}
export default Space;