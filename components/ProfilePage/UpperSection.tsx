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
const settings = {
  dots: true,
  infinit: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
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
    <SimpleGrid>
      <Box bgColor="#191919"  h="1080px">
      <Box
        className="UpperSection"
        width="376px"
        height="434px"
        borderTopLeftRadius="80px 80px"
        // bgColor="#191919"
      >
        <Flex
          bgImage="url('../Rectangle 3212.png')"
          bgRepeat="no-repeat"
          bgPosition="60% 7%"
          bgColor="#191919"
          w="376px"
          h="1080px"
        >
          <Flex flexDirection="column" gap="16px" ml="24px" mt="32px">
            <Image width={10} height={10} src={groupP1} border="2px" />
            <Image
              width={10}
              height={10}
              src={ellipse1}
              border="2px"
              borderColor="gray.200"
              borderRadius="100%"
      
            />
            <Image width={10} height={10} src={groupP2} border="2px" />
            <Image
              width={10}
              height={10}
              src={ellipse2}
              border="2px"
              borderColor="gray.200"
              borderRadius="100%"
            
            />
          </Flex>
          {/* end */}
          <Flex flexDirection="column" alignItems="center" mx="auto">
            <Image width={16} height={16} src={logoP} mt="14px" />

            <Box mt="232px">
              <Heading
                fontSize="32px"
                color="#FFFFFF"
                fontFamily="Poppins"
                fontWeight={700}
                fontStyle="normal"
                lineHeight="100%"
              >
                Pavel Dantsev
              </Heading>

              <Flex alignItems="center" flexDirection="column">
                <Text
                  fontSize="18px"
                  fontFamily="Poppins"
                  fontStyle="italic"
                  color="#FFFFFFB2"
                  fontWeight={400}
                  letterSpacing="-0.02em"
                  marginTop="8px"
                >
                  pashq.aerx
                </Text>

                <Flex>
                  <Image src={ellipse3} marginRight={2} />
                  <Text
                    color="#FFFFFF80"
                    fontFamily="Poppins"
                    fontWeight="500"
                    fontSize="14px"
                  >
                    Aura: 2k
                  </Text>
                </Flex>
              </Flex>
            </Box>
          </Flex>
          {/* end */}
          <Flex flexDirection="column" gap="32px" mr="21px" mt="32px">
            <Image src={frameP1} />
            <Image src={frameP2} />
          </Flex>
          {/* end */}
        </Flex>
      </Box>
      {/* end */}
        <Box
          className="UpperSection"
          bgColor="#1F1F1F"
          height="651px"
          borderRadius="50px 50px"
          width="379px"
          
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
          {/* end */}
          <Box
            bgColor="#242424"
            maxWidth="376px"
            // height="478px"
            marginLeft="0"
            borderRadius="40px 40px"
            zIndex={-1}
            marginTop="12px"
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
          </Box>
          {/* end */}
        </Box>
        {/* end */}
    </Box>
      
    </SimpleGrid>
  );
};

export default UpperSection;
