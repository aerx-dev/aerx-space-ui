import React from "react";
import Link from "next/link";

import { Box, Image, Text, Center, Flex, Button } from "@chakra-ui/react";
import { useDispatch, useSelector } from "../../store/store";
import { getUserState, setImages } from "../../store/slices/imageSlices";
import { nearStore } from "../../store/near";

import { MinusIcon } from "@chakra-ui/icons";

// type Props = {}

const WalletHead = (props) => {
  const nearState = nearStore((state) => state);

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
      position="absolute"
      h="327.43px"
      top="412.37px"
    
    >
    
      <Center>
      <div
        className="m cursor-pointer  hover:bg-[#ffffff39]  flex flex-col
        background-#1F1F1F
        gap-0.5"
        onClick={props.wallet}
      >
        <MinusIcon
            w="21.92px"
            bgColor="rgba(255, 255, 255, 0.3);"
            height="2px"
          />
          <MinusIcon
            w="21.92px"
            bgColor="rgba(255, 255, 255, 0.3);"
            height="2px"
          />
      </div>
      </Center>


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
          {nearState.aexBalance} AEX
        </Text>
        <Flex>
        <div
        className="cursor-pointer  hover:bg-[#ffffff39]
        background-#1F1F1F
        w-[16.44px]
        h-[16.44px]
        mr-[10.275px]

       "
      >
          <Image
            src={"resources/Download.png"}
            alt="download"
            w="16.44px"
            h="16.44px"
          
          />
          </div>
          <div
        className="cursor-pointer  hover:bg-[#ffffff39]
        background-#1F1F1F
        w-[16.44px]
        h-[16.44px]
        mr-[10.275px]

       "
       onClick={props.wallet}
      >
          <Image
            src={"resources/Upload.png"}
            alt="upload"
            w="16.44px"
            h="16.44px"
            mr="10.275px"
          />
          </div>
          <div
        className="cursor-pointer  hover:bg-[#ffffff39]
        background-#1F1F1F
        w-[16.44px]
        h-[16.44px]
        mr-[10.275px]

       "
       onClick={props.wallet}
      >
          <Image
            src={"resources/Frame 5556.png"}
            alt="upload"
            w="16.44px"
            h="16.44px"
            mr="10.275px"
          />
          </div>
          <div
        className="cursor-pointer  hover:bg-[#ffffff39]
        background-#1F1F1F
        w-[16.44px]
        h-[16.44px]
        mr-[10.275px]

       "
       onClick={props.wallet}
      >
          <Image
            src={"resources/plant 1.png"}
            alt="upload"
            w="16.44px"
            h="16.44px"
            mr="10.275px"
          />
          </div>
        </Flex>
      </Flex>
      {/* <NftValues /> */}
    </Box>
  );
};

export default WalletHead;
