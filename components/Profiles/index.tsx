import React from 'react'
import ProfileSection from "./ProfileSection"
import {
    Box,
    Container,
    ChakraProvider,
} from "@chakra-ui/react";
import ImagesCarousel from "./ImagesCarousel" 
import Wallets from "./Wallets"
import Notifications from "./Notification"
import NftValues from "./NftValues"
import Collapse from "./Collapse"
import Circle from "./Circle"

type Props = {}

function index({}: Props) {
  function toggle(){

  }
  return (
      <div className="h-[100vh] bg-[#191919]">
        <ProfileSection />
        {/* <Collapse />
        <Circle /> */}
        <ImagesCarousel />
        <Wallets />
        <NftValues />
        <Notifications />

      </div>
        



    


  )
}

export default index