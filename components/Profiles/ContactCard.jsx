import Image from "next/image";
import React from "react";
import { SmoothCorners } from "react-smooth-corners";

export const ContactCard = ({ isModalOpen, setIsModalOpen }) => {
  const handleClick = (event) => {
    if (event.target.id === "background") {
      setIsModalOpen(false);
    }
  };

  if (!isModalOpen) {
    return null;
  } else {
    return (
      <div
        id="background"
        onClick={handleClick}
        className="fixed inset-0 z-20 bg-black backdrop-blur-sm bg-opacity-25  flex items-center justify-center"
      >
        <div
          id="modal"
          className="w-fit h-[85%] 2xl:h-[81%] my-auto  bg-black-light  rounded-2xl shadow-md "
        >
          <div className="h-[360px] w-[340px] rounded-2xl bg-transparent">
            <Image
              src="/cardpicture.png"
              className="rounded-2xl"
              width={340}
              height={360}
              layout="fixed"
            />
          </div>
          <div className="relative bottom-14 flex flex-col items-center">
            <h1 className="text-white text-2xl font-extrabold tracking-[0.02em]">
              Anna Smith
            </h1>
            <p className="text-white text-opacity-70 italic">smith.aerx</p>
          </div>
          <div className="flex w-fit flex-col relative -top-[400px]  ml-5 gap-6">
            <Image
              src={"/icons/profile-icon-1.svg"}
              width={19.5}
              height={32}
              layout="fixed"
              className="hover:scale-110 transition duration-400 cursor-pointer ease-in-out"
            />
            <div className="mr-4 relative right-2">
              <Image
                src={"/icons/profile-icon-2.svg"}
                className="hover:scale-110 transition duration-400 cursor-pointer ease-in-out"
                width={36.3}
                height={31.9}
                layout="fixed"
              />
            </div>
            <div className="relative right-1.5">
              <Image
                className="hover:scale-110 transition duration-400 cursor-pointer ease-in-out"
                src={"/icons/profile-icon-3.svg"}
                width={32}
                height={32}
                layout="fixed"
              />
            </div>
          </div>
          <div
            onClick={() => setIsModalOpen(false)}
            className="relative bottom-[555px]  left-[300px]"
          >
            <Image
              className="hover:scale-110 transition cursor-pointer duration-400 ease-in-out"
              src={"/icons/close-profile.svg"}
              width={17}
              height={17}
              layout="fixed"
            />
          </div>

          <div className="relative  -top-60 mt-2  ">
            <div className="flex items-center justify-center ">
              <div className="hover:scale-105 mb-1 mr-1 transition cursor-pointer duration-400 ease-in-out">
                <Image
                  className=" "
                  src={"/icons/aura.svg"}
                  width={16}
                  height={16}
                  layout="fixed"
                />
              </div>
              <h5 className="mb-2 text-white text-opacity-50 text-sm  tracking-wide ">
                Aura: 2k
              </h5>
            </div>
            <div className="flex flex-row pt-1.5 justify-center gap-2">
              <div className="rounded-full bg-white/10 hover:bg-white/20">
                <h1 className="text-white cursor-pointer  text-sm px-2 py-1.5 ">
                  #crypto
                </h1>
              </div>
              <div className="rounded-full bg-white/10 hover:bg-white/20">
                <h1 className="text-white  cursor-pointer text-sm px-2 py-1.5 ">
                  #nfts
                </h1>
              </div>
              <div className="rounded-full bg-white/10 hover:bg-white/20">
                <h1 className="text-white cursor-pointer  text-sm px-2 py-1.5 ">
                  #future
                </h1>
              </div>
              <div className="rounded-full bg-white/10 hover:bg-white/20">
                <h1 className="text-white cursor-pointer  text-sm px-2 py-1.5 ">
                  #Aerx
                </h1>
              </div>
            </div>
            <div className="w-[320px] mt-4 ml-2">
              <p className="text-center text-[14px] text-white tracking-[0.02em]  text-opacity-70">
                I work as a doctor, but in my free time I like to make funny
                pictures and videos.
              </p>
            </div>
            <div className="flex justify-center items-center ">
              {/* <SmoothCorners corners="32,42" borderRadius="20px"> */}
              <div className="w-fit flex relative  cursor-pointer top-4 2xl:top-6 left-0  px-7 gap-1.5 rounded-2xl transition py-1.5   duration-300 ease-in-out  bg-primary hover:shadow-xl shadow-lg hover:bg-[#b173e1]">
                <div className="relative top-0.5">
                  <Image
                    src={"/icons/profile-icon-2.svg"}
                    // className="hover:scale-110 transition duration-400 cursor-pointer ease-in-out"
                    width={36.3}
                    height={31.9}
                    layout="fixed"
                  />
                </div>
                <button className=" text-base font-semibold     text-white    focus:outline-none">
                  Start
                </button>
              </div>
              {/* </SmoothCorners> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
};
