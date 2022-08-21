import React from 'react'

const VideoControl : React.FC = () => {
    return (
        <div>
           <div className='bg-[#ffffff3e] w-full h-[4px] rounded-md flex items-center '>
                <div className='flex items-center '>
                    <div className='h-[4px] w-[60px] rounded-l-md bg-white'>
                    </div>
                    <div className='h-[10px] w-[10px] rounded-full bg-white -ml-2'>
                    </div>
                </div>
           </div>
            <div className='flex justify-between mt-2 '>
                <label className='text-[#ffffffa9] text-sm'>0:46</label>
                <label className='text-[#ffffffa9] text-sm'>-3:14</label>
            </div>
        </div>
    )
}

export default VideoControl;