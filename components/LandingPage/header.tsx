import React from "react";
import { Box, Button, Image, Text, Container,Flex } from "@chakra-ui/react";

import { useDispatch, useSelector } from "../../store/store";
import { getUserState, setImages } from "../../store/slices/imageSlices";

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const { logo } = useSelector(getUserState);

  function authentication() {
    console.log("Welcome to arex");
  }

  return (
    
      <Flex
        justifyItems="center"
        overflow="hidden"
        marginInline="150px"
        
        mt={6}
        mb="150px"
      >
        
          <Image src={logo} alt="logo" />






        
        <Flex  alignItems="center" gap="56px" marginLeft="99px">
          
          <Text fontFamily="Poppins" fontWeight="400" >
            Home
          </Text>
          <Text fontFamily="Poppins" fontWeight="400">
            Features
          </Text>
          <Text fontFamily="Poppins" fontWeight="400">
            About us
          </Text>
        </Flex>
        <Flex ml="495px" gap="32px" alignItems="center">
        <Text fontFamily="Poppins" fontWeight="400">
            Register
          </Text>
          <Button
            bgColor="#8D00FF"
            py="12px"
            px="40px"
        
            fontFamily="Poppins"
            borderRadius={50}
            fontWeight="600"
            color="white"
            onClick={authentication}
          >
            Login
          </Button>
        </Flex>
      
      </Flex>
    
  );
};

export default Header;
