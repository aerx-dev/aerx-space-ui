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
} from "@chakra-ui/react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import { useDispatch, useSelector } from "../../store/store";
import { getUserState, setImages } from "../../store/slices/imageSlices";
import LowerTag from "./LowerTag";

type Props = {};

const UpperSection = (props: Props) => {
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
  const theme = extendTheme({
    textStyles: {
      h1: {
        // you can also use responsive styles
        fontSize: ["48px", "72px"],
        fontWeight: "bold",
        lineHeight: "110%",
        letterSpacing: "-2%",
      },
      h2: {
        fontSize: ["36px", "48px"],
        fontWeight: "semibold",
        lineHeight: "110%",
        letterSpacing: "-1%",
      },
    },
  });

  return (
    <SimpleGrid >
      <Box
        className="UpperSection"
        width="376px"
        height="434px"
        borderTopLeftRadius="80px 80px"
      >
        <Image
          src={rectangle}
          bgColor="black"
          zIndex="-11"
          position="absolute"
        />
        <Box>
          <Center mt={8}>
            <Image width={16} height={16} src={logoP} position="absolute" />
          </Center>
          <Flex>
            <Box display="flex" flexDirection="column" px={2}>
              <Image width={10} height={10} src={groupP1} border="2px" />
              <Image
                width={10}
                height={10}
                src={ellipse1}
                border="2px"
                borderColor="gray.200"
                borderRadius="100%"
                my={2}
              />
              <Image width={10} height={10} src={groupP2} border="2px" />
              <Image
                width={10}
                height={10}
                src={ellipse2}
                border="2px"
                borderColor="gray.200"
                borderRadius="100%"
                my={2}
              />
            </Box>
            <Spacer />
            <Box>
              <Center marginTop={280}>
                <Heading
                  fontSize="4xl"
                  color="#FFFFFF"
                  fontFamily="Poppins"
                  fontWeight={700}
                >
                  Pavel Dantsev
                </Heading>
              </Center>
              <Center>
                <Text
                  fontSize="2xl"
                  fontStyle="italic"
                  color="#FFFFFFB2"
                  fontWeight={400}
                >
                  pashq.aerx
                </Text>
              </Center>
              <Center>
                <Image src={ellipse3} marginRight={2} />
                <Text color="#FFFFFF80">Aura: 2k</Text>
              </Center>
            </Box>
            <Spacer />
            <Box display="flex" flexDirection="column" px={2}>
              <Image src={frameP1} />
              <Image src={frameP2} />
              {/* <Image width={10} height={10} src={groupP2} border='2px'  />
          <Image width={10} height={10} src={ellipse2} border='2px'  borderColor='gray.200' borderRadius="100%"  my={2}/> */}
            </Box>
          </Flex>
        </Box>
      </Box>
      {/* end */}
      <Box bgColor="black" width="376px">
        <Box
          className="UpperSection"
          bgColor="#1F1F1F;
          "
          borderRadius="40px 40px"
          width="376px"
          // height=""
        >
          <Box>
            <Center>
              <Image src={"Rectangle 3526.png"} mt={4} />
            </Center>
            <Center>
              <Image src={"Rectangle 3526.png"} mt={1} />
            </Center>
          </Box>
          {/* end */}
          <Box>
            <Text
              ml="24px"
              mt="18px"
              fontWeight="400"
              fontSize="16px"
              color="rgba(255, 255, 255, 0.3);"
              height={21}
            >
              Circles
            </Text>
            <Flex
              justify="space-between"
              flexDirection="row"
              ml={2}
              mt={4}
              overflow="hidden"
            >
              <Flex flexDirection="column" alignItems="center">
                <Image src={ellipse4} width="48px" mx={3} />
                <Text fontSize="16px" fontWeight="400" color="#ffffff">
                  Work
                </Text>
              </Flex>

              <Flex flexDirection="column" alignItems="center">
                <Image src={ellipse5} width="48px" mx={3} />
                <Text fontSize="16px" fontWeight="400" color="#ffffff">
                  Family
                </Text>
              </Flex>
              <Flex flexDirection="column" alignItems="center">
                <Image src={ellipse4} width="48px" mx={3} />
                <Text fontSize="16px" fontWeight="400" color="#ffffff">
                  Friends
                </Text>
              </Flex>
              <Flex flexDirection="column" alignItems="center">
                <Image src={ellipse5} width="48px" mx={3} />
                <Text fontSize="16px" fontWeight="400" color="#ffffff">
                  Followers
                </Text>
              </Flex>
              <Flex flexDirection="column" alignItems="center">
                <Image src={ellipse5} width="48px" mx={3} />
                <Text fontSize="16px" fontWeight="400" color="#ffffff">
                  Followed
                </Text>
              </Flex>
            </Flex>
          </Box>
          {/* end */}
          <Box
            bgColor="#242424"
            maxWidth="376px"
            height="478px"
            marginLeft="0"
            borderRadius="40px 40px"
            zIndex={-1}
            marginTop={23}
          >
            <Center>
              <Image src={"Rectangle 3526.png"} mt="12px" />
            </Center>
            <Center>
              <Image src={"Rectangle 3526.png"} mt="4px" />
            </Center>
            <Text
              ml="24px"
              mt="32px"
              fontWeight="400"
              fontSize="16px"
              color="rgba(255, 255, 255, 0.3);"
            >
              Wallet
            </Text>

            <Flex ml="24px" mt="16px" alignItems="center">
              <Text fontSize="24px" fontWeight="700" color="#ffffff" mr="44px">
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
            <Box
              bgColor="#282828"
              maxWidth="376px"
              height="358px"
              marginLeft="0"
              borderRadius="40px 40px"
              zIndex={-1}
              marginTop={23}
            >
              <Center>
                <Image src={"Rectangle 3526.png"} mt="12px" />
              </Center>
              <Center>
                <Image src={"Rectangle 3526.png"} mt="4px" />
              </Center>

              <Flex mt="32px" ml="24px" alignItems="center">
                <Text
                  fontWeight="400"
                  fontSize="16px"
                  color="rgba(255, 255, 255, 0.3);"
                  mr="234px"
                >
                  Values
                </Text>
                <Flex>
                  <Image src={dot} alt="" w="8px" h="8px" mr="8px" />
                  <Image src={dot} alt="" w="8px" h="8px" mr="8px" />
                  <Image src={dot} alt="" w="8px" h="8px" />
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

              {/* <Carousel
                showArrows={false}
                showStatus={false}
                swipeable={true}
                infiniteLoop={true}
                showIndicators={true}
              >
                <Box marginRight="16px" position="relative">
                  <Flex position="absolute" left={150} top={39}>
                    <Image src={"Ticket Star.png"} />
                    <Text
                      fontWeight="400"
                      fontSize="16px"
                      color="#ffffff"
                      position="absolute"
                      marginLeft="32px"
                    >
                      Art
                    </Text>
                  </Flex>
                  <Text
                    position="absolute"
                    color="#ffffff"
                    top={71}
                    left={135}
                    fontSize="18px"
                    fontWeight={600}
                  >
                    NFT Name
                  </Text>
                  <Text
                    position="absolute"
                    top="93px"
                    left="148px"
                    color="#ffffff"
                    fontWeight={400}
                    fontSize="16px"
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
                  <Flex position="absolute" left={143} top={39}>
                    <Image src={"Fill 1.png"} />
                    <Text
                      fontWeight="400"
                      fontSize="16px"
                      color="#ffffff"
                      position="absolute"
                      marginLeft="32px"
                    >
                      Ticket
                    </Text>
                  </Flex>
                  <Text
                    position="absolute"
                    color="#ffffff"
                    top={71}
                    left={135}
                    fontSize="18px"
                    fontWeight={600}
                  >
                    NFT Name
                  </Text>
                  <Text
                    position="absolute"
                    top="93px"
                    left="148px"
                    color="#ffffff"
                    fontWeight={400}
                    fontSize="16px"
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
                  <Flex position="absolute" left={150} top={39}>
                    <Image src={"Ticket Star.png"} />
                    <Text
                      fontWeight="400"
                      fontSize="16px"
                      color="#ffffff"
                      position="absolute"
                      marginLeft="32px"
                    >
                      Art
                    </Text>
                  </Flex>
                  <Text
                    position="absolute"
                    color="#ffffff"
                    top={71}
                    left={135}
                    fontSize="18px"
                    fontWeight={600}
                  >
                    NFT Name
                  </Text>
                  <Text
                    position="absolute"
                    top="93px"
                    left="148px"
                    color="#ffffff"
                    fontWeight={400}
                    fontSize="16px"
                  >
                    24,6 aex
                  </Text>
                  <Image
                    src={"Rectangle 3421.png"}
                    maxWidth="140px"
                    height="149px"
                  />
                </Box>
              </Carousel> */}
            </Box>
            <Box
              position="absolute"
              top="967px"
              mt="60px"
              bgColor="#303030;"
              width="376px"
              height="112px"
              marginLeft="0"
              // borderBottomStartRadius="50px"
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
                  color="white"
                  marginTop={-2}
                  marginLeft={8}
                  position="absolute"
                  backgroundColor="red"
                  px={2}
                  borderRadius="100%"
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
          </Box>
          {/* end */}
        </Box>
        {/* end */}
      </Box>
    </SimpleGrid>
  );
};

export default UpperSection;
