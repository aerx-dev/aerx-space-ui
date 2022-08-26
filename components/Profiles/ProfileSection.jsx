import React from "react";
import {
  Box,
  Image,
  Text,
  Heading,
  Flex,

} from "@chakra-ui/react";
import { useDispatch, useSelector } from "../../store/store";
import { getUserState, setImages } from "../../store/slices/imageSlices";
import { nearStore } from "../../store/near";

// type Props = {};

const ProfileSection = (props) => {
  const nearState = nearStore((state) => state);

  const dispatch = useDispatch();
  const {
    ellipse3,
    logoP,
    frameP1,
    frameP2,
  } = useSelector(getUserState);

  return (
    <Flex
      id=""
      bgImage={`url('${nearState.profile.profileImg}')`}
      bgRepeat="no-repeat"
      bgPosition="30 0"
      bgSize="257.56px 297.29px"
      // bgGradient=" linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73))"

      bgColor="#191919"
      w="257.56px"
      height="321.29px"
      top="0"
      // position="absolute"
      zIndex="2"
      className="profileSection"
    >
      {/* <Image src={'../resources/Rectangle 3212.png'} position="absolute" zIndex="-2" /> */}
      <Flex flexDirection="column" gap="10.96px" ml="16.44px" mt="21.92px" cursor="pointer">
        <Box
          bgColor="#6054F0"
          width="27.4px"
          height="27.4px"
          border="2px solid"
          borderColor="#6054F0"
          borderRadius="6.85px"
          onClick={() => props.toggle()}
        >
          <Image
            src="../resources/Frame 14297.png"
            w="18px"
            py="5px"
            px="auto"
            pl="4px"
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
        <Image width="42.47px" height="15.755px" src={logoP} mt="21.92px" />

        <Box mt="176.045px">
          <Heading
            fontSize="21.92px"
            color="#FFFFFF"
            fontFamily="Poppins"
            fontWeight={700}
            fontStyle="normal"
            lineHeight="100%"
          >
            {nearState.profile.fullName}
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
              {nearState.profile.username}
            </Text>

            <Flex>
              <Image src={ellipse3} marginRight={2} w="10.96px" />
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
