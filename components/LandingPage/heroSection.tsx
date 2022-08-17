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
    <WithStar>
      <Container maxWidth="container.xlg">
        <Flex
          alignItems="center"
          py="30"
          flexDirection="row"
          marginRight="95px"
          marginLeft="95px"
          bgImage="url('../Saly-1.png')"
          bgRepeat="no-repeat"
          bgPosition="center right"
          
          height="80vh"
          bgSize="40%"
        >
          <Box>
            <Heading
              fontSize="76px"
              lineHeight="114px"
              fontWeight="600"
              fontFamily="Poppins"
              color="#322E65"
            >
              Welcome to Aerx
            </Heading>
            <Text
              fontSize="24px"
              fontStyle="italic"
              fontWeight={300}
              fontFamily="Poppins"
              color="#322E65CC"
              lineHeight="36px"
            >
              web3.0 media social platform
            </Text>
            <Text
              fontSize="24px"
              lineHeight="36px"
              fontWeight="300"
              mt="48px"
              width={525}
              color="#322E6580"
            >
              Aerx is a web 3 social media platform with a <br /> fundamentally
              new approach to <br />
              monetization of user content
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
              mt="56px"
            >
              Get started
            </Button>
          </Box>
          <WithDots>
            <Box marginLeft="135px" marginTop="-125px" >
              <Image width="100" src={group1} className="group1-a" />
            </Box>
          </WithDots>
        </Flex>
      </Container>
    </WithStar>
  );
};
export default HeroSection;
