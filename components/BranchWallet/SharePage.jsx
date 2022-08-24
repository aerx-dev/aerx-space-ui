import React from "react";
import {
  Box,
  Text,
  Center,
  Flex,
  Image,
  FormControl,
  Input,
  Select,
  Button,
  FormLabel,
  Checkbox,
} from "@chakra-ui/react";

function SharePage() {
  return (
    <Box
      w="308.25px"
      h="350.72px"
      position="absolute"
      top="0"
      bgColor="#1F1F1F"
      borderRadius="13.7px"
    >
      <Image
        src={"../resources/Frame 13923.png"}
        w="16.44px"
        mb="2px"
        mt="10.96px"
        ml="280.85px"
      />

      <Text
        mb="10.96px"
        textAlign="center"
        color="white"
        fontSize="12.33px"
        fontFamily="Poppins"
        fontWeight="600"
      >
        Share
      </Text>

      {/* search bar */}
      <FormControl
        mx="16.44px"
        w="264.41px"
        heigh="38.36px"
        mb="21.92px"
        mt="10.96px"
        fontFamily="Poppins"
        bgColor="#191A1B;"
        borderRadius="10.275px"
      >
        <Flex>
          <Image
            src={"../resources/Frame 13915.png"}
            ml="8px"
            top="10px"
            w="16.44px"
            h="16.44px"
            position="relative"
            zIndex="2"
          />
          <Input
            position="relative"
            py="13.7px"
            placeholder="Search contact"
            fontSize="10.96px"
            lineHeight="10.96px"
            fontWeight="400"
            borderStyle="none"
            bgColor="#191A1B;"
            color="#ffffff4d"
            type="search"
          />
        </Flex>
      </FormControl>

      <FormControl
        fontFamily="Poppins"
        mx="21.92px"
        // mb="10.96px"
        alignItems="center"
      >
        <Flex gap="131.055px" alignItems="center">
          <FormLabel>
            <Flex gap="10.96px" alignItems="center">
              <Image
                src={"../resources/Ellipse 683.png"}
                borderRadius="100%"
                w="32.88px"
                h="32.88px"
                bgColor="#ffffff0d"
              />
              <Flex flexDirection="column">
                <Text
                  color="#ffffff"
                  fontWeight="600"
                  letterSpacing="1.37px"
                  fontSize="9.59px"
                >
                  Nickname
                </Text>
                <Text
                  color="#ffffff4d"
                  fontWeight="400"
                  letterSpacing="1.37px"
                  fontSize="9.59px"
                >
                  Name
                </Text>
              </Flex>
            </Flex>
          </FormLabel>
          <Checkbox borderColor="#FFFFFF4D"  borderRadius="3.425px" size="sm"></Checkbox>
        </Flex>
      </FormControl>

      <FormControl
        fontFamily="Poppins"
        mx="21.92px"
        // mb="10.96px"
        alignItems="center"
      >
        <Flex gap="131.055px" alignItems="center">
          <FormLabel>
            <Flex gap="10.96px" alignItems="center">
              <Image
                src={"../resources/Ellipse 683.png"}
                borderRadius="100%"
                w="32.88px"
                h="32.88px"
                bgColor="#ffffff0d"
              />
              <Flex flexDirection="column">
                <Text
                  color="#ffffff"
                  fontWeight="600"
                  letterSpacing="1.37px"
                  fontSize="9.59px"
                >
                  Nickname
                </Text>
                <Text
                  color="#ffffff4d"
                  fontWeight="400"
                  letterSpacing="1.37px"
                  fontSize="9.59px"
                >
                  Name
                </Text>
              </Flex>
            </Flex>
          </FormLabel>
          <Checkbox borderColor="#FFFFFF4D" borderRadius="3.425px" size="sm"></Checkbox>
        </Flex>


      </FormControl>


      <FormControl
        fontFamily="Poppins"
        mx="21.92px"
        // mb="10.96px"
        alignItems="center"
      >
        <Flex gap="131.055px" alignItems="center">
          <FormLabel>
            <Flex gap="10.96px" alignItems="center">
              <Image
                src={"../resources/Ellipse 683.png"}
                borderRadius="100%"
                w="32.88px"
                h="32.88px"
                bgColor="#ffffff0d"
              />
              <Flex flexDirection="column">
                <Text
                  color="#ffffff"
                  fontWeight="600"
                  letterSpacing="1.37px"
                  fontSize="9.59px"
                >
                  Nickname
                </Text>
                <Text
                  color="#ffffff4d"
                  fontWeight="400"
                  letterSpacing="1.37px"
                  fontSize="9.59px"
                >
                  Name
                </Text>
              </Flex>
            </Flex>
          </FormLabel>
          <Checkbox borderColor="#FFFFFF4D" borderRadius="3.425px" size="sm"></Checkbox>
        </Flex>
      </FormControl>

      <FormControl
        fontFamily="Poppins"
        mx="21.92px"
        mb="14.44px"
        alignItems="center"
      >
        <Flex gap="131.055px" alignItems="center">
          <FormLabel>
            <Flex gap="10.96px" alignItems="center">
              <Image
                src={"../resources/Ellipse 683.png"}
                borderRadius="100%"
                w="32.88px"
                h="32.88px"
                bgColor="#ffffff0d"
              />
              <Flex flexDirection="column">
                <Text
                  color="#ffffff"
                  fontWeight="600"
                  letterSpacing="1.37px"
                  fontSize="9.59px"
                >
                  Nickname
                </Text>
                <Text
                  color="#ffffff4d"
                  fontWeight="400"
                  letterSpacing="1.37px"
                  fontSize="9.59px"
                >
                  Name
                </Text>
              </Flex>
            </Flex>
          </FormLabel>
          <Checkbox borderColor="#FFFFFF4D" radius="3.425px" size="sm"></Checkbox>
        </Flex>
      </FormControl>

      {/* Button */}
      <Center>
        <Button
          fontFamily="Poppins"
          fontSize="10.96px"
          color="#ffffff"
          fontWeight="600"
          bgColor="#6054F0;"
          w="264.41px"
          h="38.36px"
        >
          Send
        </Button>
      </Center>
    </Box>
  );
}

export default SharePage;
