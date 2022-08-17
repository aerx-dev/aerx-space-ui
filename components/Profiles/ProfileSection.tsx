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
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "../../store/store";
import { getUserState, setImages } from "../../store/slices/imageSlices";


type Props = {};

const ProfileSection = (props: Props) => {
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
      bgImage="url('../Rectangle 3212.png')"
      bgRepeat="no-repeat"
      bgPosition="0 48px"
      bgColor="#191919"
      w="376px"
    height="495px"
    //  top="0"
    // position="absolute"
    // zIndex={-1}
   

    >
      <Flex flexDirection="column" gap="16px" ml="24px" mt="32px">
        <Image width={10} height={10} src={groupP1} border="2px" />
        <Image
          width={10}
          height={10}
          src={ellipse1}
          border="2px"
          borderColor="gray.200"
          borderRadius="100%"
        />

        <Image width={10} height={10} src={groupP2} border="2px" />
        <Image
          width={10}
          height={10}
          src={ellipse2}
          border="2px"
          borderColor="gray.200"
          borderRadius="100%"
        />
      </Flex>
      {/* end */}
      <Flex flexDirection="column" alignItems="center" mx="auto">
        <Image width={16} height={16} src={logoP} mt="14px" />

        <Box mt="232px">
          <Heading
            fontSize="32px"
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
              fontSize="18px"
              fontFamily="Poppins"
              fontStyle="italic"
              color="#FFFFFFB2"
              fontWeight={400}
              letterSpacing="-0.02em"
              marginTop="8px"
            >
              pashq.aerx
            </Text>

            <Flex>
              <Image src={ellipse3} marginRight={2} />
              <Text
                color="#FFFFFF80"
                fontFamily="Poppins"
                fontWeight="500"
                fontSize="14px"
              >
                Aura: 2k
              </Text>
            </Flex>
          </Flex>
        </Box>
      </Flex>
      {/* end */}

      <Flex flexDirection="column" gap="32px" mr="21px" mt="32px">
        <Image src={frameP1} />
        <Image src={frameP2} />
      </Flex>
    </Flex>
    //    end
  );
};

export default ProfileSection;
