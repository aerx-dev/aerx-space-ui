import React from "react";
import { Box, Text, Center, Flex, Image, Button } from "@chakra-ui/react";

function ConfirmationPage() {
  return (
    <Box
      w="308.25px"
      h="143.85px"
      position="absolute"
      top="0"
      bgColor="#1F1F1F"
      borderRadius="13.7px"
    >
      <Image
        src={"../resources/Frame 13923.png"}
        w="16.44px"
        mb="2px"
        mt="10.96px"
        ml="280.85px"
      />


      <Text
        textAlign="center"
        fontWeight="411"
        fontFamily="Poppins"
        color="#ffffff"
        lineHeight="19.728px"
        fontSize="10.96px"
        mb="16.44px"
        mx="21.4px"
        letterSpacing="-1.37%"
      >
        Sending a message request costs 0.0288 NEAR Payment for using the
        blockchain network.
      </Text>
    

        <Center>
      <Button
          py="17.125px"
          px="25.345px"
          bgColor="#B882E1"
          borderRadius="6.85px"
          height="32.88px"
          mb="27.4px"
          w="134.945px"
        >
          <Image
            src={"../resources/Frame 14044.png"}
            mr="5.48px"
            w="21.92px"
            h="21.92px"
          />{" "}
          <Text
            fontFamily="Poppins"
            fontWeight="600"
            fontSize="10.96px"
            color="#ffffff"
            letterSpacing="-1.37%"
            lineHeight="100%"
          >
            Ok, let's go
          </Text>
        </Button>
        </Center>
    </Box>
  );
}

export default ConfirmationPage;
