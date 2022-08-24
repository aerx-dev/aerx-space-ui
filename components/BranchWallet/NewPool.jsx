import React from "react";
import { Box, Text, Center, Flex, Image, FormControl, Select,  Button } from "@chakra-ui/react";

function NewPool(props) {
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
        mb="137px"
        mx="16.44px"
        fontFamily="Poppins"
        fontSize="10.96px"
        fontWeight="400"
      >
        <Flex gap="5.48px" alignItems="center" mb="137px" onClick={() => props.newPool()}>
          <Image
            src={"../resources/Arrow - Right1.png"}
            color="#FFFFFF4D;"
            w="8.25425px"
            h="10.275px"
          />
          <Text color="#FFFFFF4D;">Back</Text>
        </Flex>
      </Box>

      <Center mb="27.4px">
        <Text
          fontFamily="Poppins"
          fontSize="12.33px"
          fontWeight="500"
          color="#ffffff"
        >
          Create new pool
        </Text>
      </Center>

      <Flex
        mb="10.96px"
        fontFamily="Poppins"
        fontWeight="400"
        fontSize="9.59px"
        lineHeight="14.385px"
        gap="91.79px"
        justifyContent="center"
      >
        <Text color="#FFFFFF4D;">Token</Text>

        <Text
          color="#FFFFFF4D;
"
        >
          Pair
        </Text>
      </Flex>

      <Flex mb="21.92px" gap="5.48px" mx="16.44px">
        <Box w="109.6px" h="38.36px" bgColor="#1A1B1B;" borderRadius="10.275px" fontFamily="Poppins" fontWeight="400" fontSize="10.96px" color="#ffffff">
            <FormControl>
                <Select color="#ffffff"  fontWeight="400" fontSize="10.96px" placeholder='AEX' border="none" >
                    <option>AEX</option>
                    <option>NEAR</option>
                </Select>
            </FormControl>
        </Box>
        <Box w="109.6px" h="38.36px" bgColor="#1A1B1B;" borderRadius="10.275px" fontFamily="Poppins" fontWeight="400" fontSize="10.96px" color="#ffffff">
            <FormControl>
                <Select color="#ffffff"  fontWeight="400" fontSize="10.96px" placeholder='NEAR-AEX' border="none" >
                    <option>AEX-NEAR</option>
                    <option>NEAR-AEX</option>
                </Select>
            </FormControl>
        </Box>
      </Flex>

      <Text mb="10.96px" textAlign="center" color="#ffffff4d" fontFamily="Poppins" fontWeight="400" fontSize="9.56px">Total fee</Text>

      <Flex mb="21.92px" mx="16.44px" alignItems="center" gap="16.44px" fontFamily="Poppins" fontWeight="500" fontSize="10.96px">
        <Flex bgColor="#1a1b1b" borderRadius="10.275px">
            <Text bgColor="#6054F0;" color="#ffffff" borderRadius="10.275px" py="10.96px" px="13.7px">0.20%</Text>
            <Text color="#ffffff4d" borderRadius="10.275px"py="10.96px" px="13.7px">0.30%</Text>
            <Text color="#ffffff4d" borderRadius="10.275px" py="10.96px" px="13.7px">0.60%</Text>
        </Flex>
        <Text color="#ffffff4d">0.30%</Text>
      </Flex>

      <Flex mb="27.4px" mx="16.44px" borderRadius="10.275px" bgColor="#1a1b1b" flexDirection="column" gap="10.96px" mr="16.44px" fontFamily="Poppins" fontWeight="400" fontSize="9.59px" p="10.96px">
        <Flex justifyContent="space-between">
            <Text color="#ffffff4d" >I.P fee</Text>
            <Text color="#ffffff">0%</Text>
        </Flex>
        <Flex justifyContent="space-between">
            <Text color="#ffffff4d" >Protocol fee</Text>
            <Text color="#ffffff">0%</Text>
        </Flex>
        <Flex justifyContent="space-between">
            <Text color="#ffffff4d" >Referral fee</Text>
            <Text color="#ffffff">0%</Text>
        </Flex>
      </Flex>

      <Center>
        <Button
          fontFamily="Poppins"
          fontSize="10.96px"
          color="#ffffff"
          fontWeight="600"
          bgColor="#6054F0;"
          w="224.68px"
          h="38.36px"
        
        >
        
          Create
        </Button>

        </Center>

    </Box>
  );
}

export default NewPool;
