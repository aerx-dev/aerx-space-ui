import React from "react";
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
import { nearStore } from "../../store/near";
import { MinusIcon } from '@chakra-ui/icons'


// type Props = {}

const Notification = () => {
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
      position="absolute"
      bgColor="#303030;"
      width="257.56px"
      marginLeft="0"
      borderTopRadius="50px"
      h="76.72px"
      top="662.395px"
    
    >
      <Center>
         <div
        className="m cursor-pointer  hover:bg-[#ffffff39]  flex flex-col
        background-#1F1F1F
        gap-0.5
     
        mt-2
       "
        onClick=""
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

      <Center
        display="flex"
        marginTop="8.22px"
        mb="5px"
        gap="21.92px"
        ml="28px"
      >
        <Box
          border="1px"
          borderColor="rgba(255, 255, 255, 0.1);"
          borderRadius="100%"
          padding="3.8px"
        >
          <Flex alignItems="center" justifyItems="center">
            <Text
            color="#ffffff"
            marginTop={-4}
            marginLeft={3}
            position="absolute"
            backgroundColor="red"
            px="3.5px"
            borderRadius="100%"
            fontFamily="Poppins"
            fontWeight="500"
            fontSize="9.59px"
          >
            3
          </Text>
            <Image src={"resources/Notification.png"} w="19.52895px" h="21.26895px" />
          </Flex>
        </Box>
        <Box
          border="1px"
          borderColor="rgba(255, 255, 255, 0.1);"
          borderRadius="100%"
          padding="5px"
        >
          <Image src={nearState.profile.profileImg} w="21.92px" h="21.92px" borderRadius="100%" />
        </Box>
        <Box
          border="1px"
          borderColor="rgba(255, 255, 255, 0.1);"
          marginRight="32px"
          borderRadius="100%"
          padding="5px"
        >
          <Image src={"resources/Setting.png"} w="17.35105px" />
        </Box>
      </Center>
    </Box>
  );
};

export default Notification;
