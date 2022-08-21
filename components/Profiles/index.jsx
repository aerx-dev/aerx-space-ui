import React from "react";
import ProfileSection from "./ProfileSection";
import { Box, Container, ChakraProvider } from "@chakra-ui/react";
import ImagesCarousel from "./ImagesCarousel";
import Wallets from "./Wallets";
import Notifications from "./Notification";
import NftValues from "./NftValues";
import Collapse from "./Collapse";
import FlowFeeds from "../Flow/index";
import Circle from "./Circle"
import ChatRoom from "../Chat/ChatRoom";
import Chat from "../Chat/index";
import Space from "../Space/index"

import { useState } from "react";


// type Props = {
// }
// const [toggle,setToggle] = React.useState<boolean>(false)

function index() {
  const [isToggle, setToggle] = useState(false);
  const [doubleclicked,setDoubleClicked]=useState(false)


  // change toggle state
  const toggleClick = () => {
    setToggle((prevState) => !prevState);
  // change toggle state
  }

  const doubleClick = (e) => {
    if (event.detail == 2) {
    setDoubleClicked((prevState) => !prevState);
    }
  };
  const removeCircle =(e) => {
    if (event.detail == 1) {
      setDoubleClicked((prevState) => !prevState);
      }
  }

 


   
  return (
    <div id="profile" className=" bg-[black] flex">

      {isToggle && (
        
        <div>
          <ProfileSection />
          <ImagesCarousel doubleClick={doubleClick} />
          <Wallets />
          <NftValues />
          <Notifications />


        </div>
      )}
          <Collapse toggle={toggleClick} Toggle={isToggle} />

    
    
      <div className=" w-[39%] h-[94vh]  overflow-y-scroll poppins ">
        <FlowFeeds />
      </div>
      <Circle circle={doubleclicked} removeCircle={removeCircle} />
      
    </div>
  );
  s;
}

export default index;
