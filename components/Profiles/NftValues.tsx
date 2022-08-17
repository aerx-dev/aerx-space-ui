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
type Props = {};

const NftValues = (props: Props) => {
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
      bgColor="#282828"
      width="376px"
      height="358px"
      marginLeft="0"
      borderRadius="40px 40px"
      // zIndex={2}
      marginTop={23}
      position="absolute"
      top="722px"
    >
      <Center>
        <Image src={"Rectangle 3526.png"} mt="12px" />
      </Center>
      <Center>
        <Image src={"Rectangle 3526.png"} mt="4px" />
      </Center>

      <Flex mt="32px" ml="24px" alignItems="center">
                <Text
                  fontWeight="500"
                  fontSize="16px"
                  color="rgba(255, 255, 255, 0.3);"
                  mr="234px"
                  fontFamily="Poppins"
                >
                  Values
                </Text>
                <Flex>
                  <Image src={dot} alt="" w="8px" h="8px" mr="8px" />
                  <Image
                    src={" Rectangle blank.png"}
                    alt=""
                    w="8px"
                    h="8px"
                    mr="8px"
                  />
                  <Image src={" Rectangle blank.png "} alt="" w="8px" h="8px" />
                </Flex>
              </Flex>
    
              <Flex mt="20px" ml="24px" overflow="hidden">
                <Box marginRight="16px" position="relative">
                  <Flex position="absolute" left={43} top={39}>
                    <Image src={"Ticket Star.png"} />
                    <Text
                      fontWeight="400"
                      fontSize="16px"
                      color="#ffffff"
                      position="absolute"
                      marginLeft="32px"
                      fontFamily="Poppins"
                    >
                      Art
                    </Text>
                  </Flex>
                  <Text
                    position="absolute"
                    color="#ffffff"
                    top={71}
                    left={25}
                    fontSize="18px"
                    fontWeight={600}
                    fontFamily="Poppins"
                  >
                    NFT Name
                  </Text>
                  <Text
                    position="absolute"
                    top="93px"
                    left="38px"
                    color="#ffffff"
                    fontWeight={400}
                    fontSize="16px"
                    fontFamily="Poppins"
                  >
                    24,6 aex
                  </Text>
                  <Image
                    src={"Rectangle 3421.png"}
                    maxWidth="140px"
                    height="149px"
                  />
                </Box>

                <Box marginRight="16px" position="relative">
                  <Flex position="absolute" left={43} top={39}>
                    <Image src={"Fill 1.png"} />
                    <Text
                      fontWeight="400"
                      fontSize="16px"
                      color="#ffffff"
                      position="absolute"
                      marginLeft="32px"
                      fontFamily="Poppins"
                    >
                      Ticket
                    </Text>
                  </Flex>
                  <Text
                    position="absolute"
                    color="#ffffff"
                    top={71}
                    left={25}
                    fontSize="18px"
                    fontWeight={600}
                    fontFamily="Poppins"
                  >
                    NFT Name
                  </Text>
                  <Text
                    position="absolute"
                    top="93px"
                    left="38px"
                    color="#ffffff"
                    fontWeight={400}
                    fontSize="16px"
                    fontFamily="Poppins"
                  >
                    24,6 aex
                  </Text>
                  <Image
                    src={"Rectangle 3527.png"}
                    maxWidth="140px"
                    height="149px"
                  />
                </Box>

                <Box marginRight="16px" position="relative">
                  <Flex position="absolute" left={43} top={39}>
                    <Image src={"Ticket Star.png"} />
                    <Text
                      fontWeight="400"
                      fontSize="16px"
                      color="#ffffff"
                      position="absolute"
                      marginLeft="32px"
                      fontFamily="Poppins"
                    >
                      Art
                    </Text>
                  </Flex>
                  <Text
                    position="absolute"
                    color="#ffffff"
                    top={71}
                    left={25}
                    fontSize="18px"
                    fontWeight={600}
                    fontFamily="Poppins"
                  >
                    NFT Name
                  </Text>
                  <Text
                    position="absolute"
                    top="93px"
                    left="38px"
                    color="#ffffff"
                    fontWeight={400}
                    fontSize="16px"
                    fontFamily="Poppins"
                  >
                    24,6 aex
                  </Text>
                  <Image
                    src={"Rectangle 3421.png"}
                    maxWidth="140px"
                    height="149px"
                  />
                </Box>
              </Flex>
    </Box>
  );
};

export default NftValues;
