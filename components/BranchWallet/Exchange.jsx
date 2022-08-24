import React from "react";
import { Box, Text, Center, Flex, Image, Button } from "@chakra-ui/react";

function Exchange(props) {
  return (
    <Box
      height="739.8px"
      w="257.56px"
      bgColor="#1f1f1f"
      position="absolute"
      top="0"
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
          mb="23.29px"
        ></Box>
      </Center>

      <Flex
        mb="136.315px"
        mx="16.44px"
        gap="160.29px"
        alignItems="center"
        fontFamily="Poppins"
        fontSize="10.96px"
        fontWeight="400"
      >
        <Flex gap="5.48px" alignItems="center" onClick={() => props.exchange()}>
          <Image
            src={"../resources/Arrow - Right1.png"}
            color="#FFFFFF4D;"
            w="8.25425px"
            h="10.275px"
          />
          <Text color="#FFFFFF4D;">Back</Text>
        </Flex>
        <Text color="#FFFFFF4D;">Pool</Text>
      </Flex>

      <Text
        textAlign="center"
        fontWeight="500"
        fontSize="12.33px"
        fontFamily="Poppins"
        color="#ffffff"
        mb="27.4px"
      >
        Exchange tokens
      </Text>

      <Flex
        mb="10.96px"
        mx="32.88px"
        bgColor="#1B1B1B;"
        borderRadius="10.275px"
        gap="102.75px"
        fontFamily="Poppins"
        alignItems="center"
      >
        <Text
          color="#ffffff"
          py="13.7px"
          pl="16.44px"
          fontSize="10.96px"
          fontWeight="500"
        >
          101
        </Text>
        <Flex gap="5.48px">
          <Text color="#FFFFFF33;" fontWeight="400" fontSize="10.96px">
            NEAR
          </Text>
          <Image src={"../resources/Group 14030.png"} w="16.44px" h="16.44px" />
        </Flex>
      </Flex>

      <Text mb="10.96px" textAlign="center" fontFamily="Poppins" fontWeight="400" fontSize="9.59" color="#FFFFFF4D;">Available: 102.4 NEAR</Text>

      <Flex
        mb="10.96px"
        mx="32.88px"
        bgColor="#1B1B1B;"
        borderRadius="10.275px"
        justifyItems="center"
        fontFamily="Poppins"
        alignItems="center"
        fontSize="10.96px"
        fontWeight="500"
        py="14.385px"
        px="16.44"
        gap="auto"
      >
        <Text
          color="#ffffff"
          
        >
          0.1%
        </Text>

        <Text
          color="#FFFFFF4D;"

          ml="39.045px"
          mr="34.935px"

        >
          0.5%
        </Text>

        <Text
          color="#FFFFFF4D;"
        
          
        >
          1%
        </Text>
        
      </Flex>


      <Text mb="27.4px" textAlign="center" fontFamily="Poppins" fontWeight="400" fontSize="9.59" color="#FFFFFF4D;">Slippage Tolerance</Text>
 
      <Flex mb="27.4px" mx="32.88px" gap="9.03515px" alignItems="center">
      <Box
          w="82.85px"
          bgColor="rgba(255, 255, 255, 0.3);"
          height="1px"
          borderRadius="6.85px"
        ></Box>

        <Image  src={'../resources/Group 1.png'} w="16.44px" h="16.44px" />

        <Box
          w="82.85px"
          bgColor="rgba(255, 255, 255, 0.3);"
          height="1px"
          borderRadius="3.425px"
        ></Box>
      </Flex>

      
      <Flex
        mb="10.96px"
        mx="32.88px"
        bgColor="#1B1B1B;"
        borderRadius="10.275px"
        gap="102.75px"
        fontFamily="Poppins"
        alignItems="center"
      >
        <Text
          color="#ffffff"
          py="13.7px"
          pl="16.44px"
          fontSize="10.96px"
          fontWeight="500"
        >
          402
        </Text>
        <Flex gap="5.48px">
          <Text color="#FFFFFF33;" fontWeight="400" fontSize="10.96px">
            AEX
          </Text>
          <Image src={"../resources/Group 14031.png"} w="16.44px" h="16.44px" />
        </Flex>
      </Flex>

      <Text mb="27.4px" textAlign="center" fontFamily="Poppins" fontWeight="400" fontSize="9.59" color="#FFFFFF4D;">1 NEAR = 3.9 AEX</Text>

        <Center>
      <Button fontFamily="Poppins" fontSize="10.96px" color="#ffffff" fontWeight="600" bgColor="#6054F0;" w="191.8px" h="38.36px"><Image src={'../resources/Frame 5556.png'} mr="5.48px" />Change</Button>
      </Center>
    </Box>
  );
}

export default Exchange;
