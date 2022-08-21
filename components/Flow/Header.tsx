import Image from 'next/image';
import React from 'react'

export interface Props {
    backgroundColor?:string,
    placeholder?: string
}
const SearchInput: React.FC<Props> = ({backgroundColor='bg-black-dark', placeholder="Search user" }) => {
    return (
        <div className={`${backgroundColor}  px-3 py-1 rounded-md flex items-center  gap-2 w-[210px]`}>
            <div className='mt-1'>
            <Image src={'/assets/icons/search-input-icon.svg'}  width={15} height={15} alt="Search" />
            </div>
            <div>
              <input type="text" placeholder={placeholder} className='text-white bg-transparent text-sm focus:outline-none' style={{}} />
            </div>
        </div>
    )
}

const FlowHeader: React.FC = () => {
    return (
        <div className='flex justify-between items-center h-10  w-full'>
           <div className='flex items-center mr-1'>
             <Image src="/assets/icons/flow-header-logo.svg" alt='flow' width={30} height={30} />
             <label className='text-white font-semibold text-sm'>My Flow</label>
           </div>
           <div>
             <SearchInput backgroundColor='bg-black-light' placeholder="Search"/>
           </div>
           <div className='bg-black-light p-1 px-2 rounded-md items-center flex  h-[35px]'>
             <Image src='/assets/icons/flash-icon.svg' alt="total posts" width={20} height={20} />
             <label className='text-white text-sm'>31134</label>
           </div>
           <div className='bg-black-light p-1 rounded-md items-center justify-around flex w-[35px] h-[35px]'>
            <Image src="/assets/icons/switch-icon.svg" alt="Switch accounts" width={20} height={20} />
           </div>
           <div className='bg-purple p-1 rounded-md items-center justify-around flex w-[35px] h-[35px]'>
            <Image src="/assets/icons/white-add-icon.svg" alt="Add Post" width={15} height={15} />
           </div>
           <div>
             <Image src="/assets/icons/chat-room-menu-icon.svg" alt="Meu" width={30} height={30} />
           </div>
        </div>
    )
}

export default FlowHeader;