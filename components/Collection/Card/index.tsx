import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

type Props = {
  image?: any;
  amount?: String;
};

export default function Card({
  image = "resources/bg-collection-1.png",
  amount = "12,03",
}: Props) {
  return (
    <Box
      display="flex"
      alignItems="flex-end"
      justifyContent="center"
      w="115px"
      h="134px"
      borderWidth="1px"
      borderRadius="10px"
      overflow="hidden"
      bgImage={image}
      bgColor="transparent"
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPos="center"
      border="none"
    >
      <Flex
        justifyContent="center"
        alignItems="center"
        bgColor="rgba(255, 255, 255, 0.15)"
        backdropFilter="blur(12.5px)"
        w="79px"
        h="24px"
        borderRadius="55px"
        mb={2}
      >
        <Text fontSize="12px" color="#fff" fontWeight="500" lineHeight="100%">
          {amount} AEX
        </Text>
      </Flex>
    </Box>
  );
}
