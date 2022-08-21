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
import Circle from "./Circle";

const ImagesCarousel = (props) => {
  const dispatch = useDispatch();
  const { ellipse4, ellipse5 } = useSelector(getUserState);


  return (
    <Box
      bgColor="#1F1F1F"
      height="442.51px"
      borderTopRadius="34.25px"
      width="257.56px"
      // top="259.615px"
      top="297.29px"
      position="absolute"
      zIndex="1"
    >
      <Center>
        <Box
          w="21.92px"
          bgColor="rgba(255, 255, 255, 0.3);"
          height="2px"
          mt="8.22px"
          borderRadius="6.85px"
        ></Box>
      </Center>
      <Center>
        <Box
          w="21.92px"
          bgColor="rgba(255, 255, 255, 0.3);"
          height="2px"
          mt="2.74px"
          borderRadius="6.85px"
        ></Box>
      </Center>

      <Box>
        <Text
          marginLeft="16.44px"
          marginTop="8.22px"
          fontWeight="500"
          fontSize="10.96px"
          color="rgba(255, 255, 255, 0.3);"
          // height={21}
          fontFamily="Poppins"
        >
          Circles
        </Text>

        <Flex
          justifyContent="space-between"
          // flexGrow="2"
          flexDirection="row"
          marginLeft="18.495px"
          mt={4}
          overflow="hidden"
          flex="auto"
        >
          <Flex
            flexDirection="column"
            alignItems="center"
            width="auto"
            onDoubleClick={(e) => props.doubleClick(e)}
          >
            <Image
              src={ellipse4}
              width="32.88px"
              borderRadius="100%"
              mb="5.48px"
            />
            <Text
              fontSize="10.96px"
              fontFamily="Poppins"
              h="32.88px"
              fontWeight="400"
              color="#ffffff"
            >
              Work
            </Text>
          </Flex>

          <Flex flexDirection="column" alignItems="center" width="auto">
            <Image
              src={ellipse5}
              width="32.88px"
              borderRadius="100%"
              mb="5.48px"
            />
            <Text
              fontSize="10.96px"
              fontFamily="Poppins"
              h="32.88px"
              fontWeight="400"
              color="#ffffff"
            >
              Family
            </Text>
          </Flex>
          <Flex flexDirection="column" alignItems="center" width="auto">
            <Image
              src={ellipse4}
              width="32.88px"
              borderRadius="100%"
              mb="5.48px"
            />
            <Text
              fontSize="10.96px"
              fontFamily="Poppins"
              h="32.88px"
              fontWeight="400"
              color="#ffffff"
            >
              Friends
            </Text>
          </Flex>
          <Flex flexDirection="column" alignItems="center" width="auto">
            <Image
              src={ellipse4}
              width="32.88px"
              borderRadius="100%"
              mb="5.48px"
            />
            <Text
              fontSize="10.96px"
              fontFamily="Poppins"
              h="32.88px"
              fontWeight="400"
              color="#ffffff"
            >
              Followers
            </Text>
          </Flex>
          <Flex flexDirection="column" alignItems="center" width="autonp">
            <Image
              src={ellipse4}
              width="32.88px"
              borderRadius="100%"
              mb="5.48px"
            />
            <Text
              fontSize="10.96px"
              fontFamily="Poppins"
              h="32.88px"
              fontWeight="400"
              color="#ffffff"
            >
              Followed
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default ImagesCarousel;
