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
          height="651px"
          borderTopRadius="50px"
          width="376px"
          top="429px"
          position="absolute"
     
        >
            <Box>
            <Center>
              <Image src={"Rectangle 3526.png"} mt={4} />
            </Center>
            <Center>
              <Image src={"Rectangle 3526.png"} mt={1} />
            </Center>
          </Box>

          <Box>
            <Text
              marginLeft="24px"
              marginTop="12px"
              fontWeight="500"
              fontSize="16px"
              color="rgba(255, 255, 255, 0.3);"
              height={21}
              fontFamily="Poppins"
            >
              Circles
            </Text>

            <Flex
              justify="space-between"
              flexGrow="2"
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
                  fontSize="16px"
                  fontFamily="Poppins"
                  h="48px"
                  fontWeight="400"
                  color="#ffffff"
                >
                  Work
                </Text>
              </Flex>

              <Flex flexDirection="column" alignItems="center" width="auto" ml="12px">
                <Image
                  src={ellipse4}
                  width="48px"
                  borderRadius="100%"
                  mb="8px"
                />
                <Text
                  fontSize="16px"
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
                  src={ellipse5}
                  width="48px"
                  h="48px"
                  borderRadius="100%"
                  mb="8px"
                />
                <Text
                  fontSize="16px"
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
                  fontSize="16px"
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
                  fontSize="16px"
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