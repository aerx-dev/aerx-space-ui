import React from "react";
import Link from 'next/link';

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

// type Props = {}

const Wallets = () => {
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
      width="257.56px"
      marginLeft="0"
      borderTopRadius="34.25px"
      // top="374.695px"
      top="412.37px"
      position="absolute"
      height="327.43px"
      zIndex="1"
    >
      <Center>
        
        <Box
          w="21.92px"
          bgColor="rgba(255, 255, 255, 0.3);"
          height="2px"
          mt="8.22px"
        >.</Box>
      </Center>
      <Link href="wallet">

      <Center>
        <Box
          w="21.92px"
          bgColor="rgba(255, 255, 255, 0.3);"
          height="2px"
          mt="2.74px"
        >.</Box>
      </Center>
      </Link>

      <Text
        marginLeft="16.44px"
        marginTop="8.22px"
        fontWeight="500"
        fontSize="10.96px"
        fontFamily="Poppins"
        color="rgba(255, 255, 255, 0.3);"
      >
        Wallet
      </Text>
      <Flex ml="16.44px" mt="10.96px" alignItems="center">
        <Text
          fontSize="16.44px"
          fontWeight="700"
          color="#ffffff"
          fontFamily="Poppins"
          mr="30.14px"
        >
           <Link href="wallet">12,786 AEX</Link>
        </Text>
        <Flex>
          <Image
            src={"resources/Download.png"}
            alt="download"
            w="16.44px"
            h="16.44px"
            mr="10.275px"
          />

          <Image
            src={"resources/Upload.png"}
            alt="upload"
            w="16.44px"
            h="16.44px"
            mr="10.275px"
          />

          <Image
            src={"resources/Frame 5556.png"}
            alt="upload"
            w="16.44px"
            h="16.44px"
            mr="10.275px"
          />

          <Image
            src={"resources/plant 1.png"}
            alt="upload"
            w="16.44px"
            h="16.44px"
            mr="10.275px"
          />
        </Flex>
      </Flex>
      {/* <NftValues /> */}
    </Box>
  );
};

export default Wallets;
