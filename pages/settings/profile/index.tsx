import React from "react";
import Image from "next/image";
import ProfileSettingForm from "../../../components/Forms/Profile";


const ProfileSettings: React.FC = () => {
    return (
        <div className="w-full h-screen bg-black flex justify-around items-center profile">
          <div className="w-[45%] h-[max-content] bg-black-dark rounded-[20px] py-[30px] px-[20px] ">
            <div className="w-full flex justify-around">
                <Image src="/assets/images/ae-pass.svg" alt="ae-pass" width={50} height={50} />
            </div>
            <ProfileSettingForm />
          </div>
        </div>
    );
}

export default ProfileSettings;