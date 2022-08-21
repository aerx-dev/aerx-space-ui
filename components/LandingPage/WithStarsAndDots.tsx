import React from 'react'
import {
    Box, Image, Container
  } from "@chakra-ui/react";

type Props = {}

const WithStarsAndDots = (props: Props) => {
  return (
    <Container  maxWidth="container.xlg">
        

        {/* HERO SECTION */}
    <Image src={"../resources/Ellipse 718.png"} position="absolute" w="36px" h="36px" top="250px" left="1380px" />
    <Image src={"../resources/Star 4.png"} position="absolute" w="34px" h="34px" top="140px" left="874px" />
    {/* <Image src={"../resources/Star 3.png"} position="absolute" w="58px" h="58px" top="336px" left="2px" /> */}
    <Image src={"../resources/Star 2.png"} position="absolute" w="58px" h="58px" top="623px" left="1322px"   />
    <Image src={"../resources/Ellipse 71.png"} position="absolute" w="21px" h="21px" top="159px" left="30px"  />
    <Image src={"../resources/Ellipse 66.png"} position="absolute" w="20px" h="19px" top="619.23px" left="712.73px"  />

    {/* SECTION 1 */}
    <Image src={"../resources/Ellipse 720.png"} position="absolute" w="20px" h="19px" top="721px" left="1243px"  />
    <Image src={"../resources/Ellipse 728.png"} position="absolute" w="20px" h="19px" top="1142.23px" left="43.89px"  />
    <Image src={"../resources/Ellipse 742.png"} position="absolute" w="12px" h="12px" top="1298.46px" left="60.78px"  />
    <Image src={"../resources/Ellipse 729.png"} position="absolute" w="21px" h="21px" top="867px" left="1316.63px"  />
    <Image src={"../resources/Ellipse 721.png"} position="absolute" w="18px" h="18px" top="1317px" left="1325.63px"  />

    {/* SECTION 2 */}
    <Image src={"../resources/Ellipse 745.png"} position="absolute" w="21px" h="21px" top="1762px" left="66px"  />
    <Image src={"../resources/Ellipse 746.png"} position="absolute" w="20px" h="19px" top="1893.23px" left="928.73px"  />
    <Image src={"../resources/Star 7.png"} position="absolute" w="44px" h="44px" top="2117px" left="35px" />
    <Image src={"../resources/Star 5.png"} position="absolute" w="58px" h="58px" top="2220px" left="1365px" />
    <Image src={"../resources/Star 6.png"} position="absolute" w="44px" h="44px" top="1742px" left="897px" />

    {/* ABOUT SECTION */}
    <Image src={"../resources/Star 12.png"} position="absolute" w="58px" h="58px" top="2854px" left="7px" />
    <Image src={"../resources/Ellipse 747.png"} position="absolute" w="20px" h="19px" top="3105px" left="37px" />
    <Image src={"../resources/Ellipse 750.png"} position="absolute" w="21px" h="21px" top="2564px" left="1489px" />
    

    {/* NEWSLETTER SECTION */}
    <Image src={"../resources/Star 11.png"} position="absolute" w="52px" h="52px" top="4024px" left="1411px" />
    <Image src={"../resources/Ellipse 752.png"} position="absolute" w="18px" h="18px" top="3925px" left="1481px" />
    <Image src={"../resources/Ellipse 753.png"} position="absolute" w="18px" h="18px" top="4119px" left="151px" />
    <Image src={"../resources/Star 9.png"} position="absolute" w="64px" h="64px" top="3565px" left="244px" />

    </Container>
  )
}

export default WithStarsAndDots