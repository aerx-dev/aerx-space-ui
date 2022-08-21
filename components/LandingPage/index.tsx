import React from 'react'
import Header from './header'
import HeroSection from './heroSection'
import SectionOne from './sectionOne'
import SectionTwo from './sectionTwo'
import About from './about'
import NewsLetterForm from './newsLetterForm'
import WithDots from "./WithDots";
import {
  Box, Image
} from "@chakra-ui/react";
import WithStarsAndDots from './WithStarsAndDots'








const Index = () => {



  return (
  < Box overflow="hidden" maxWidth="1920px" bg="white"  bgGradient="linear(to-r11%,FFFFFF 11%)">
    {/* <Box boxSizing="border-box" position="absolute"  top="-383-px" left="811px" w="797px" h="797px" bgImage="url('../resources/Ellipse 727.png')"></Box> */}
    <WithStarsAndDots />
   
    <Header />
    <HeroSection />
    <SectionOne />
    <SectionTwo  />
    <About  />
    <NewsLetterForm />
  </Box>

  )
}

export default Index;