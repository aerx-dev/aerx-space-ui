import Image from "next/image"
import React from "react"

export interface Props {
  onChange?: (value: string) => void
}
const SearchInput: React.FC<Props> = ({ onChange }) => {
  return (
    <div
      className={` px-5  bg-black-dark py-1.5 w-full rounded-md flex items-center  gap-2`}
    >
      <div className="relative  -left-[6px] mt-1  ">
        {/* <Image
          src={"/assets/icons/search-input-icon.svg"}
          width={15}
          height={15}
          alt="Search"
        /> */}
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="7.5"
            cy="7.5"
            r="6.5"
            stroke="white"
            opacity="15%"
            strokeWidth="2"
          />
          <path
            d="M12.3047 12.3022L16.7201 16.7177"
            stroke="white"
            opacity="15%"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="">
        <input
          type="text"
          placeholder="Search user"
          className="placeholder-[#575757] w-full relative right-2  bg-black-dark placeholder-opacity-80 text-white   text-[14px] focus:outline-none"
          style={{}}
          onChange={(e) => onChange && onChange(e.target.value)}
        />
      </div>
    </div>
  )
}
export default SearchInput
