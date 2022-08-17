import React from 'react'
import Header from './header'
import HeroSection from './heroSection'
import SectionOne from './sectionOne'
import SectionTwo from './sectionTwo'
import About from './about'
import NewsLetterForm from './newsLetterForm'
import WithDots from "./WithDots";
import {
  Box,
} from "@chakra-ui/react";








const Index: React.FC = () => {



  return (
  < Box>
 
  <WithDots>
    <Header />
    <HeroSection />
    <SectionOne />
    <SectionTwo  />
    <About  />
    <NewsLetterForm />
  </WithDots>
  </Box>

  )
}

export default Index;