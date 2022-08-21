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
// type Props = {}

const Notification = () => {
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
      // top="624.72px"
      top="662.395px"
      bgColor="#303030;"
      width="257.56px"
      height="76.72px"
      marginLeft="0"
      borderTopRadius="50px"
      zIndex="3"
    >
      <Center>
        <Box
          w="21.92px"
          bgColor="rgba(255, 255, 255, 0.3);"
          height="2px"
          mt="8.22px"
        ></Box>
      </Center>
      <Center>
        <Box
          w="21.92px"
          bgColor="rgba(255, 255, 255, 0.3);"
          height="2px"
          mt="2.74px"
        ></Box>
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
          padding="5px"
        >
          <Flex>
            <Text
              color="#ffffff"
              marginTop={-3}
              marginLeft={6}
              position="absolute"
              backgroundColor="red"
              px={2}
              py={1}
              borderRadius="100%"
              fontFamily="Poppins"
              fontWeight="500"
              fontSize="10.59px"
            >
              3
            </Text>
            <Image src={"resources/Notification.png"} />
          </Flex>
        </Box>
        <Box
          border="1px"
          borderColor="rgba(255, 255, 255, 0.1);"
          borderRadius="100%"
          padding="5px"
        >
          <Image src={"resources/Ellipse 706.png"} />
        </Box>
        <Box
          border="1px"
          borderColor="rgba(255, 255, 255, 0.1);"
          marginRight="32px"
          borderRadius="100%"
          padding="8px"
        >
          <Image src={"resources/Setting.png"} />
        </Box>
      </Center>
    </Box>
  );
};

export default Notification;
