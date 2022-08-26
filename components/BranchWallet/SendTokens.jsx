import React from "react";
import {
  Box,
  Text,
  Center,
  Flex,
  Image,
  Input,
  Button,
} from "@chakra-ui/react";
// import { Input } from "postcss";

function SendTokens(props) {
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

      <Box
        mb="202.76px"
        mx="16.44px"
        fontFamily="Poppins"
        fontSize="10.96px"
        fontWeight="400"
      >
        <Flex gap="5.48px" alignItems="center" onClick={props.upload} cursor="pointer">
          <Image
            src={"../resources/Arrow - Right1.png"}
            color="#FFFFFF4D;"
            w="8.25425px"
            h="10.275px"
          />
          <Text color="#FFFFFF4D;">Back</Text>
        </Flex>
      </Box>

      <Center mb="32.88px">
        <Text
          fontFamily="Poppins"
          fontSize="12.33px"
          fontWeight="500"
          color="#ffffff"
        >
          Send Tokens
        </Text>
      </Center>

      <Center mb="27.4px">
        <Text
          fontFamily="Poppins"
          fontSize="24.66px"
          fontWeight="700"
          color="#ffffff"
        >
          0
        </Text>
      </Center>

      <Input
        py="13.7px"
        mx="32.88px"
        w="191.8px"
        h="38.36px"
        mb="10.96px"
        bgColor="#1B1B1B;"
        border="none"
        borderRadius="10.275px"
        placeholder="User"
        fontFamily="Poppins"
        fontSize="10.96px"
        fontWeight="400"
        color="#ffffff4d"
      />

      <Center mb="21.92px">
        <Button
          fontFamily="Poppins"
          fontSize="10.96px"
          color="#ffffff"
          opacity="0.3"
          fontWeight="600"
          bgColor="#FFFFFF1D;"
          
          w="191.8px"
          h="38.36px"
        >
          <Image  src={"../resources/Arrow - Right.png"} w="8.25425px" h="10.275px" mr="5.48px" />
          Send
        </Button>
      </Center>

      <Flex alignItems="center" flexDirection="column" gap="5.48px"  fontFamily="Poppins"
          fontSize="9.59px"
          
          fontWeight="400">
        <Text color="#ffffff4d" >Available to send</Text>
        <Text color="#ffffff4d">102.48283 NEAR</Text>
      </Flex>
    </Box>
  );
}

export default SendTokens;
