import React from 'react'
import {Box, Text, Center, Image, Button} from '@chakra-ui/react'

function Succesful() {
  return (
    <Box w="257.56px" h="739.8px" bgColor="#1F1F1F" position="absolute" top="0">
        <Center>
          <Box
            w="21.92px"
            bgColor="rgba(255, 255, 255, 0.3);"
            height="2px"
            mt="8.22px"
            borderRadius="6.85px"
          ></Box>
        </Center>
        <Center mb="274.45895px">
          <Box
            w="21.92px"
            bgColor="rgba(255, 255, 255, 0.3);"
            height="2px"
            mt="2.74px"
            borderRadius="6.85px"
          ></Box>
        </Center>

        <Center mb="25.11895px">
            <Image src={'../resources/akar-icons_circle-check1.png'} w="38.36px" />
        </Center>

        <Text mb="10.96px" textAlign="center" color="#ffffff" fontFamily="Poppins" fontWeight="600" fontSize="12.33px">
            Payment successful!
        </Text>

        <Center>
      <Button fontFamily="Poppins" fontSize="10.96px" color="#ffffff" fontWeight="600" bgColor="#FFFFFF0D;" w="191.8px" h="38.36px">Ok</Button>
      </Center>
    </Box>
  )
}

export default Succesful