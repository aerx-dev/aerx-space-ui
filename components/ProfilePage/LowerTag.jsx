import React from 'react';
import {
  ChakraProvider,
  theme,
  Box,
  Text,
  Image,
  Flex,
  Center,
} from '@chakra-ui/react';
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';

// const responsive = {
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1,
//     slidesToSlide: 1,
//   },
// };

function LowerTag() {
  return (
    <ChakraProvider theme={theme}>
      <Box
        bgColor="#242424;"
        maxWidth="376px"
        height="478px"
        marginLeft="0"
        borderTopEndRadius="50px"
        zIndex="-1"
        marginTop={23}
      >
        <Center>
          <Image src={'Rectangle 3526.png'} mt="12px" />
        </Center>
        <Center>
          <Image src={'Rectangle 3526.png'} mt="4px" />
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
              src={'Download.png'}
              alt="download"
              w="24px"
              h="24px"
              mr="15px"
            />

            <Image
              src={'Upload.png'}
              alt="upload"
              w="24px"
              h="24px"
              mr="15px"
            />

            <Image
              src={'Frame 5556.png'}
              alt="upload"
              w="24px"
              h="24px"
              mr="15px"
            />

            <Image
              src={'plant 1.png'}
              alt="upload"
              w="24px"
              h="24px"
              mr="24px"
            />
          </Flex>
        </Flex>
      </Box>
      <Box
        position="absolute"
        top="120px"
        mt="32px"
        bgColor="#282828;"
        maxWidth="376px"
        maxHeight="358px"
        marginLeft="0"
        borderTopEndRadius="50px"
        zIndex="2"
      >
        <Center>
          <Image src={'Rectangle 3526.png'} mt="12px" />
        </Center>
        <Center>
          <Image src={'Rectangle 3526.png'} mt="4px" />
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
            <Image src={'Rectangle 3396.png'} alt="" w="8px" h="8px" mr="8px" />
            <Image src={'Rectangle 3406.png'} alt="" w="8px" h="8px" mr="8px" />
            <Image src={'Rectangle 3407.png'} alt="" w="8px" h="8px" />
          </Flex>
        </Flex>
        <Flex mt="20px" ml="24px" overflow="hidden">
          <Box marginRight="16px" position="relative">
            <Flex position="absolute" left={43} top={39}>
              <Image src={'Ticket Star.png'} />
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
            <Image src={'Rectangle 3421.png'} maxWidth="140px" height="149px" />
          </Box>

          <Box marginRight="16px" position="relative">
            <Flex position="absolute" left={43} top={39}>
              <Image src={'Fill 1.png'} />
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
            <Image src={'Rectangle 3527.png'} maxWidth="140px" height="149px" />
          </Box>

          <Box marginRight="16px" position="relative">
            <Flex position="absolute" left={43} top={39}>
              <Image src={'Ticket Star.png'} />
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
            <Image src={'Rectangle 3421.png'} maxWidth="140px" height="149px" />
          </Box>
        </Flex>
      </Box>
      <Box
        position="absolute"
        top="365px"
        mt="60px"
        bgColor="#303030;"
        width="376px"
        height="112px"
        marginLeft="0"
        borderTopEndRadius="50px"
        borderBottomEndRadius="50px"
        zIndex="3"
      >
        <Center>
          <Image src={'Rectangle 3526.png'} mt="12px" />
        </Center>
        <Center>
          <Image src={'Rectangle 3526.png'} mt="4px" />
        </Center>
        <Flex marginLeft="84px" marginTop="12px">
          <Box
            border="1px"
            borderColor="rgba(255, 255, 255, 0.1);"
            borderRadius="100%"
            marginRight="32px"
            padding="5px"
          >
            <Image src={'Notification.png'} />
          </Box>
          <Box
            border="1px"
            borderColor="rgba(255, 255, 255, 0.1);"
            borderRadius="100%"
            marginRight="32px"
            padding="5px"
          >
            <Image src={'Ellipse 706.png'} />
          </Box>
          <Box
            border="1px"
            borderColor="rgba(255, 255, 255, 0.1);"
            marginRight="32px"
            borderRadius="100%"
            padding="8px"
          >
            <Image src={'Setting.png'} />
          </Box>
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default LowerTag;