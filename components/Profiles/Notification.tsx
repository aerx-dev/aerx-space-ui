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

const Notification = (props: Props) => {
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
    top="967px"
    mt="60px"
    bgColor="#303030;
    "
    width="376px"
    height="112px"
    marginLeft="0"
    borderTopRadius="50px"
    
    zIndex="3"
  >
     <Center>
                <Image src={"Rectangle 3526.png"} mt="12px" />
              </Center>
              <Center>
                <Image src={"Rectangle 3526.png"} mt="4px" />
              </Center>
              <Flex marginLeft="84px" marginTop="12px">
                <Box
                  border="1px"
                  borderColor="rgba(255, 255, 255, 0.1);"
                  borderRadius="100%"
                  marginRight="32px"
                  padding="5px"
                >
                  <Flex>
                    <Image src={"Notification.png"} />
                  </Flex>
                </Box>
                <Text
                  color="#ffffff"
                  marginTop={-2}
                  marginLeft={8}
                  position="absolute"
                  backgroundColor="red"
                  px={2}
                  borderRadius="100%"
                  fontFamily="Poppins"
                  fontWeight="500"
                  fontSize="14px"
                >
                  3
                </Text>
                <Box
                  border="1px"
                  borderColor="rgba(255, 255, 255, 0.1);"
                  borderRadius="100%"
                  marginRight="32px"
                  padding="5px"
                >
                  <Image src={"Ellipse 706.png"} />
                </Box>
                <Box
                  border="1px"
                  borderColor="rgba(255, 255, 255, 0.1);"
                  marginRight="32px"
                  borderRadius="100%"
                  padding="8px"
                >
                  <Image src={"Setting.png"} />
                </Box>
              </Flex>
    </Box>
  )
}

export default Notification