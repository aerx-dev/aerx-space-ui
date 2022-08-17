import React from 'react'
import ProfileSection from "./ProfileSection"
import {
    Box,
} from "@chakra-ui/react";
import ImagesCarousel from "./ImagesCarousel" 
import Wallets from "./Wallets"
import Notifications from "./Notification"
import NftValues from "./NftValues"

type Props = {}

function index({}: Props) {
  return (
    <Box >
        <ProfileSection />
        <ImagesCarousel />
        <Wallets />
        <NftValues />
        <Notifications />

    </Box>
  )
}

export default index