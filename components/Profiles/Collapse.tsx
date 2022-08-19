import React from 'react'
import {
    Box,
    Image,
    Text,
    Center,
    Flex,
  } from "@chakra-ui/react";

type Props = {}

function Collapse({}: Props) {
  return (
        <Flex h="1000px" w="80px" ml="13px" flexDirection="column" bgColor="#6054F0" position="absolute" left="388px" top="0" borderRadius="20px" py="32px" px="24px">
                <Flex flexDirection="column" gap="32px" mb="624px">
                    <Image src={"../resources/Frame 5449.png"} w="32px" h="32px" />
                    <Image src={"../resources/Flow.png"} w="32px" h="32px" />
                    <Image src={"../resources/Group.png"} w="32px" h="32px" />
                    <Image src={"../resources/Group 5409.png"} w="32px" h="32px" />
                </Flex>
                <Flex></Flex>
                <Flex flexDirection="column" gap="32px">
                <Text
                  color="#ffffff"
                  marginTop={-2}
                  marginLeft={4}
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
                    <Image src={"../resources/Notification2.png"} w="32px" h="32px" />
                    <Image src={"../resources/Frame 5450.png"} w="32px" h="32px" />
                </Flex>
        </Flex>
  )
}

export default Collapse