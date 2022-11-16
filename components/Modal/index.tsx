import Image from "next/image"
import React, { ReactNode } from "react"

const Modal: React.FC<{ children: ReactNode; onClose: () => void }> = ({
  children,
  onClose,
}) => {
  return (
    <div className="absolute inset-0 h-screen w-full flex bg-black-light bg-opacity-10 backdrop-blur-sm items-center justify-center z-10">
      <div className="relative  top-0 right-0  w-[max-content] z-50 h-[max-content] p-3 bg-[#191919] rounded-[20px]">
        <div className="w-full flex z-50">
          <div
            className="ml-auto cursor-pointer z-50"
            onClick={() => onClose()}
          >
            <Image
              src="/assets/icons/modal-close.svg"
              alt="close"
              width={20}
              height={20}
              className="cursor-pointer hover:bg-black-light rounded-md"
            />
          </div>
        </div>
        <div className="">{children}</div>
      </div>
    </div>
  )
}
export default Modal
