import React from "react";
import {
  Box,
  Button,
  Image,
  Text,
  Heading,
  Container,
  Flex,
} from "@chakra-ui/react";
import WithStar from "./WithStars";
import WithDots from "./WithDots";
import { useDispatch, useSelector } from "../../store/store";
import { getUserState, setImages } from "../../store/slices/imageSlices";

const HeroSection: React.FC = () => {
  const { saly, group1 } = useSelector(getUserState);
  function authentication() {
    console.log("welcome to arex");
  }
  return (
    
      <Container maxWidth="container.xlg">
        <Flex
          alignItems="center"
          py="30"
          flexDirection="row"
          marginRight="95px"
          marginLeft="95px"
          bgImage="url('../resources/saly-1.png'), url('../resources/Ellipse 727.png'),  url('../resources/Ellipse 6.png') "
          bgRepeat="no-repeat"
          bgPosition="center right, top right, center left"
          // bgGradient="linear(to-l, #7928CA, #FF0080)"
          height="80vh"
          bgSize="40%"
          // bgColor="#16FF02"
          // filter='blur(345px)'
          // opacity="0.2px"
          
        >
          <Box>
            <Heading
              fontSize="76px"
              lineHeight="114px"
              fontWeight="600"
              fontFamily="Poppins"
              color="#322E65"
            >
              <Image src="resources\Welcome.png" />
              {/* Welcome to Aerx */}
            </Heading>
            <Text
              fontSize="24px"
              fontStyle="italic"
              fontWeight={300}
              fontFamily="Poppins"
              color="#322E65CC"
              lineHeight="36px"
            >
                <Image src="resources\web3.png"  mt={3}/>

              {/* web3.0 media social platform */}
            </Text>
            <Text
              fontSize="24px"
              lineHeight="36px"
              fontWeight="300"
              mt="48px"
              width={525}
              color="#322E6580"
            >
              <Image src="resources\aerxcont.png" />
              {/* Aerx is a web 3 social media platform with a <br /> fundamentally
              new approach to <br />
              monetization of user content */}
            </Text>
            <Button
              bgColor="#8D00FF"
              className="button"
              py="12px"
              px="40px"
              fontFamily="Poppins"
              borderRadius={50}
              fontWeight="600"
              color="white"
              onClick={authentication}
              mt="56px"
            >
              Get started
            </Button>
          </Box>
          
            <Box marginLeft="135px" marginTop="-125px" >
              <Image width="100" src="resources\Group 5401.png" className="group1-a" />
            </Box>
          
        </Flex>
      </Container>
    
  );
};
export default HeroSection;
