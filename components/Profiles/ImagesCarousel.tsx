import React from 'react'
import {
    Box,
    Spacer,
    Image,
    Text,
    Heading,
    SimpleGrid,
    extendTheme,
    Center,
    Flex,
    Container,
  } from "@chakra-ui/react";

import { useDispatch, useSelector } from "../../store/store";
import { getUserState, setImages } from "../../store/slices/imageSlices";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'



type Props = {}

const ImagesCarousel = (props: Props) => {
    const dispatch = useDispatch();
    const {
      rectangle,
      groupP1,
      groupP2,
      ellipse1,
      ellipse2,
      ellipse3,
      ellipse4,
      logoP,
      frameP1,
      frameP2,
      dot,
      ticketStar,
      groupLp3,
      rectangleP2,
      rectangleP3,
      rectangleP4,
      ellipse5,
    } = useSelector(getUserState);

  return (
    <Box
          bgColor="#1F1F1F"
          // height="646px"
          borderTopRadius="50px"
          width="376px"
          // top="434px"
          // position="absolute"
          
          // zIndex="-1"
     
        >
            
            <Center>
              <Image src={"resources/Rectangle 3526.png"} mt="12px" />
            </Center>
            <Center>
              <Image src={"resources/Rectangle 3526.png"} mt="4px" />
            </Center>
          

          <Box>
            <Text
              marginLeft="24px"
              marginTop="5px"
              fontWeight="500"
              fontSize="16px"
              color="rgba(255, 255, 255, 0.3);"
              height={21}
              fontFamily="Poppins"
            >
              Circles
            </Text>

            <Flex
              justifyContent="space-between"
              // flexGrow="2"
              flexDirection="row"
              marginLeft="27px"
              mt={4}
              overflow="hidden"
              flex="auto"
            >
              <Flex flexDirection="column" alignItems="center" width="auto">
                <Image
                  src={ellipse4}
                  width="48px"
                  borderRadius="100%"
                  mb="8px"
                />
                <Text
                  fontSize="14px"
                  fontFamily="Poppins"
                  h="48px"
                  fontWeight="400"
                  color="#ffffff"
                >
                  Work
                </Text>
              </Flex>

              <Flex flexDirection="column" alignItems="center" width="auto">
                <Image
                  src={ellipse5}
                  width="48px"
                  borderRadius="100%"
                  mb="8px"
                />
                <Text
                  fontSize="14px"
                  fontFamily="Poppins"
                  h="48px"
                  fontWeight="400"
                  color="#ffffff"
                >
                  Family
                </Text>
              </Flex>
              <Flex flexDirection="column" alignItems="center" width="auto">
                <Image
                  src={ellipse4}
                  width="48px"
                  h="48px"
                  borderRadius="100%"
                  mb="8px"
                />
                <Text
                  fontSize="14px"
                  fontFamily="Poppins"
                  fontWeight="400"
                  color="#ffffff"
                >
                  Friends
                </Text>
              </Flex>
              <Flex flexDirection="column" alignItems="center" width="auto">
                <Image
                  src={ellipse4}
                  width="48px"
                  h="48px"
                  borderRadius="100%"
                  mb="8px"
                />
                <Text
                  fontSize="14px"
                  fontFamily="Poppins"
                  fontWeight="400"
                  color="#ffffff"
                >
                  Followers
                </Text>
              </Flex>
              <Flex flexDirection="column" alignItems="center" width="autonp">
                <Image src={ellipse4} width="48px" mb="8px" />
                <Text
                  fontSize="14px"
                  fontFamily="Poppins"
                  fontWeight="400"
                  h="48px"
                  borderRadius="100%"
                  color="#ffffff"
                >
                  Followed
                </Text>
              </Flex>
            </Flex>
          </Box>
        </Box>
  )
}

export default ImagesCarousel