import React from 'react';
import {
  Box,
  Text,
  Center,
  Flex,
  Image,
  Input,
  Button,
} from "@chakra-ui/react";
function RecieveToken() {
  return (
    <Box height="739.8px" width="257.56px" background="#1F1F1F"
    >
            <Center cursor="pointer">
      <Flex flexDirection="column" mt="8.22px" gap="2.74px"  >
        <Box
          w="21.92px"
          bgColor="rgba(255, 255, 255, 0.3);"
          height="2px"
          mt="8.22px"
          borderRadius="6.85px"
        ></Box>

        <Box
          w="21.92px"
          bgColor="rgba(255, 255, 255, 0.3);"
          height="2px"
          borderRadius="6.85px"
          mb="23.29px"
        ></Box>
          </Flex>

      </Center>
      {/* end */}

      <Box
        mb="158.235px"
        mx="16.44px"
        fontFamily="Poppins"
        fontSize="10.96px"
        fontWeight="400"
      >
      <Flex gap="5.48px" alignItems="center" mb="202.075px" ml="16.44px" >
          <Image
            src={"../resources/Arrow - Right1.png"}
            color="#FFFFFF4D;"
            w="8.25425px"
            h="10.275px"
          />
          <Text color="#FFFFFF4D;">Back</Text>
    
      </Flex>
      </Box>
      <Center>

      <Flex flexDirection="column" alightItems="center" justifyContent="center" >
        <Center>
        <Text 
        fontFamily = 'Poppins'
        font-style = "normal"
        fontWeight= "500"
        fontSize = "12.33px"
        color="#FFFFFF"
        mb="9.1653px"

        >Recieve</Text>
        </Center>
        <Center mb="21.92px">
        <Image 
        src='../resources/Group 14694.png'
        w="102.75px" h="102.75px" 
        />
        </Center>
          <Center mb="22.605px">
        <Text
        fontFamily= 'Poppins'
        fontStyle= "normal"
        fontWeight= "500"
        fontSize= "9.59px"
        color="rgba(255, 255, 255, 0.3)"
       
        >
          account id
        </Text>
        </Center>

        <Box
        mx="32.88px"
        width= "191.8px"
        height= "50px"
        justifyContent="center"
        alignItems="center"
        padding = "10.96px 16.44px"
        background = "rgba(255, 255, 255, 0.05)"
        borderRadius = "10.275px"
        mb = "10.96px"
        >
          <Text
          fontFamily = 'Poppins'
          fontStyle = "normal"
          fontWeight = "500"
          fontSize = "9.59px"
          color =  "#FFFFFF"

          /* or 21px */
          
          textAlign= "center"
          >
          e8e9f38940951e644a64a4ca90dcc67108b8f50343d58e1
          </Text>
        </Box>
        <Flex 
        justifyContent="center"
        alignItems = "center"
        padding = "10.96px 16.44px"
        gap= "5.48px"
        mb="16.44px"
        >
          <Image src='../resources/Group23.png' w="10.65px" h="13.7px"/>
          <Text
          fontFamily= 'Poppins'
          fontStyle= "normal"
          fontWeight= "600"
          fontSize= "10.96px"
          color= "#FFFFFF"
          >Copy</Text>

        </Flex 
      
        >
        <Center>
          {/* <Flex flexDirection="column" alligItems="center"> */}
            <Box justifyContent="center">
        <Text 
          fontFamily = "Poppins"
          fontStyle= "normal"  
          fontWeight = "500"
          fontSize = "9.59px"
          color = "#FFFFFF4D"

        >
        Available balance
        </Text>
        <Text
            fontFamily = "Poppins"
            fontStyle= "normal"  
            fontWeight = "500"
            fontSize = "9.59px"
            color = "#FFFFFF4D"

        >
        102.4 AEX
        </Text>
        </Box>
        {/* </Flex> */}
        </Center>
      





      </Flex>

      </Center >
   



    </Box>
  )
}

export default RecieveToken