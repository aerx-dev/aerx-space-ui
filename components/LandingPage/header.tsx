import React from "react";
import { Box, Button, Image, Text, Container } from "@chakra-ui/react";

import { useDispatch, useSelector } from "../../store/store";
import { getUserState, setImages } from "../../store/slices/imageSlices";


const Header: React.FC = () => {
  const dispatch = useDispatch();
  const { logo } = useSelector(getUserState);

  function authentication () {
    console.log('Welcome to arex')
  }


  return (
    <Container maxWidth="1921px">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        paddingRight="95px"
        paddingLeft="95px"
        mt={6}
      >
        <Box>
          <Image src={logo} alt="logo" />
        </Box>
        <Box display="flex" marginLeft="-625px">
          <Text fontSize="md" mr={4} mt={2}>
            Home
          </Text>
          <Text fontSize="md" mr={4} mt={2}>
            Features
          </Text>
          <Text fontSize="md" mr={4} mt={2}>
            About us
          </Text>
        </Box>
        <Box display="flex">
          <Button bgColor="#8D00FF" borderRadius={50} color="white" onClick={authentication}>
            Login/Register
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Header;
