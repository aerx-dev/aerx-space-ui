import React from "react";
import {
  Box,
  Spacer,
  Image,
  Text,
  Heading,
  SimpleGrid,
  extendTheme,
  Center,
  Flex,
  Container,
  position,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "../../store/store";
import { getUserState, setImages } from "../../store/slices/imageSlices";


// type Props = {};

const ProfileSection = (props) => {
  const dispatch = useDispatch();
  const {
    groupP1,
    groupP2,
    ellipse1,
    ellipse2,
    ellipse3,
    logoP,
    frameP1,
    frameP2,
  } = useSelector(getUserState);

  return (
    <Flex
      id=""
      bgImage="url('../resources/Rectangle 3212.png')"
      bgRepeat="no-repeat"
      bgPosition="60 5px"
      bgSize="257.56px 297.29px"
      // // bg="top right"
      bgColor="#191919"
      w="257.56px"
      height="323.29px"
      top="0"
      // position="absolute"
      zIndex="2"
      display={props.hidden}
    >
      {/* <Image src={'../resources/Rectangle 3212.png'} position="absolute" zIndex="-2" /> */}
      <Flex flexDirection="column" gap="10.96px" ml="16.44px" mt="21.92px">
        <Box
         width="27.4px"
         height="27.4px"
          border="2px solid"
          borderColor="white"
          padding="2px"
          borderRadius="100%"
        >
          <Image
            src={"../resources/1.png"}
            position="relative"
            zIndex="2"
            top="5.48px"
            left="6.85px"
            w="6.85px"
            h="10.96px"
            boxShadow="xl"
          />

          <Image
            src={"../resources/Ellipse 7.png"}
            position="relative"
            top="-10.96px"
          />
        </Box>

        <Box>
          <Image
           width="27.4px"
           height="27.4px"
            padding="2px"
            border="2px solid"
            borderColor="white"
            borderRadius="100%"
            src={"../resources/Ellipse 2.png"}
          />
        </Box>

        <Box
          width="27.4px"
          height="27.4px"
          border="2px solid"
          borderColor="white"
          padding="2px"
          borderRadius="100%"
        >
          <Image
            src={"../resources/1.png"}
            position="relative"
            zIndex="2"
            top="5.48px"
            left="6.85px"
            w="6.85px"
            h="10.96px"
            boxShadow="xl"
          />

          <Image
            src={"../resources/Ellipse 3.png"}
            position="relative"
            top="-10.96px"
          />
        </Box>

        <Box
          width="27.4px"
          height="27.4px"
          border="2px solid"
          borderColor="white"
          padding="2px"
          borderRadius="100%"
        >
          <Image src={"../resources/Ellipse 4.svg"} />
        </Box>
      </Flex>
      {/* end */}

      <Flex flexDirection="column" alignItems="center" mx="auto">
        <Image width="42.47px" height="15.755px" src={logoP} mt="9.59px" />

        <Box mt="176.045px">
          <Heading
            fontSize="21.92px"
            color="#FFFFFF"
            fontFamily="Poppins"
            fontWeight={700}
            fontStyle="normal"
            lineHeight="100%"
          >
            Pavel Dantsev
          </Heading>

          <Flex alignItems="center" flexDirection="column">
            <Text
              fontSize="12.33px"
              fontFamily="Poppins"
              fontStyle="italic"
              color="#FFFFFFB2"
              fontWeight={400}
              letterSpacing="-0.02em"
              marginTop="5.48px"
              mb="11.645px"
            >
              pashq.aerx
            </Text>

            <Flex>
              <Image src={ellipse3} marginRight={2} w='10.96px' />
              <Text
                color="#FFFFFF80"
                fontFamily="Poppins"
                fontWeight="500"
                fontSize="9.59px"
              >
                Aura: 2k
              </Text>
            </Flex>
          </Flex>
        </Box>
      </Flex>
      {/* end */}

      <Flex flexDirection="column" gap="21.92px" mr="14.385px" mt="21.92px">
        <Image src={frameP1} w="32.88px" h="32.88px" />
        <Image src={frameP2} w="32.88px" h="32.88px" />
      </Flex>
    </Flex>

    //    end
  );
};

export default ProfileSection;
