import React from 'react'
import {Box, Flex, Image, Text, Button} from "@chakra-ui/react";

type Props = {}

const Circle = (props: Props) => {
  return (
    <Box w="413px" h="682px" position="absolute" borderRadius="20px" bgColor="#191919" left="500px" top="0">
        <Flex>
            <Image src={"../resources/Ellipse 702.png"} marginRight={2} w="16px" h="16px" />
            <Text
                color="#FFFFFF80"
                fontFamily="Poppins"
                fontWeight="500"
                fontSize="14px"
                mb="16px"
              >
                Aura: 2k
            </Text>
        </Flex>
        <Flex justifyItems="center" alignItems="center" gap="8px" mb="16px">
            <Text px="10px" py="6px" borderRadius="20px" fontFamily="Poppins" fontWeight="400" fontSize="16px" color="#ffffff" bgColor="rgba(255, 255, 255, 0.1)" >#crypto</Text>
            <Text px="10px" py="6px" borderRadius="20px" fontFamily="Poppins" fontWeight="400" fontSize="16px" color="#ffffff" bgColor="rgba(255, 255, 255, 0.1)" >#nfts</Text>
            <Text px="10px" py="6px" borderRadius="20px" fontFamily="Poppins" fontWeight="400" fontSize="16px" color="#ffffff" bgColor="rgba(255, 255, 255, 0.1)" >#future</Text>
            <Text px="10px" py="6px" borderRadius="20px" fontFamily="Poppins" fontWeight="400" fontSize="16px" color="#ffffff" bgColor="rgba(255, 255, 255, 0.1)" >#Aerx</Text>
        </Flex>
        <Text fontFamily="Poppins" fontWeight="400" color="#ffffff" textAlign="center" opacity="0.7" mb="32px">I work as a doctor, but in my free time I like to make funny pictures and videos.</Text>
        <Button py="12px" px="37px" bgColor="#B882E1" borderRadius="10px"><Image /> <Text>Start</Text></Button>
    </Box>
  )
}

export default Circle