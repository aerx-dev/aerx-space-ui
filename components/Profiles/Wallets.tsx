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
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "../../store/store";
import { getUserState, setImages } from "../../store/slices/imageSlices";



type Props = {}


const Wallets = (props: Props) => {

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
            bgColor="#242424"
            width="376px"
            marginLeft="0"
            borderRadius="40px 40px"
            top="602"
            position="absolute"
            height="478px"

          >
             <Center>
              <Image src={"Rectangle 3526.png"} mt="12px" />
            </Center>
            <Center>
              <Image src={"Rectangle 3526.png"} mt="4px" />
            </Center>
            <Text
              marginLeft="24px"
              marginTop="12px"
              fontWeight="500"
              fontSize="16px"
              fontFamily="Poppins"
              color="rgba(255, 255, 255, 0.3);"
            >
              Wallet
            </Text>

            <Flex ml="24px" mt="16px" alignItems="center">
              <Text
                fontSize="24px"
                fontWeight="700"
                color="#ffffff"
                fontFamily="Poppins"
                mr="44px"
              >
                12,786 AEX
              </Text>
              <Flex>
                <Image
                  src={"Download.png"}
                  alt="download"
                  w="24px"
                  h="24px"
                  mr="15px"
                />

                <Image
                  src={"Upload.png"}
                  alt="upload"
                  w="24px"
                  h="24px"
                  mr="15px"
                />

                <Image
                  src={"Frame 5556.png"}
                  alt="upload"
                  w="24px"
                  h="24px"
                  mr="15px"
                />

                <Image
                  src={"plant 1.png"}
                  alt="upload"
                  w="24px"
                  h="24px"
                  mr="24px"
                />
              </Flex>
            </Flex>
            {/* <NftValues /> */}


          </Box>
  )
}

export default Wallets