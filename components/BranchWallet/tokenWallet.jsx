import React from "react";
import { Box, Center, Text, Flex, Image } from "@chakra-ui/react";


function tokenWallet(props) {
  return (
    <Box
      w="257.56px"s
      h="739.8px"
      bgColor="#1f1f1f"
      position="absolute"
      top="0"
    >
      <Center cursor="pointer">
      <Flex flexDirection="column" mt="8.22px" gap="2.74px" onClick={() => props.toggleWallet()} >
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
          mt="2.74px"
          borderRadius="6.85px"
          mb="19.18px"
        ></Box>
          </Flex>

      </Center>

      <Center mb="10.96px">
        <Text
          fontFamily="Poppins"
          color="#ffffff"
          fontWeight="700"
          fontSize="16.44px"
          lineHeight="24.66px"
        >
          Wallet
        </Text>
      </Center>

      <Text
        fontWeight="400"
        fontSize="9.59px"
        opacity="0.3"
        fontFamily="Poppins"
        mb="5.48px"
        color="white"
        textAlign="center"
      >
        Total Balance
      </Text>

      <Center mb="16.44px" fontWeight="600">
        <Flex gap="5.48px">
          <Text
            fontFamily="Poppins"
            lineHeight="100%"
            fontSize="21.92px"
            color="#ffffff"
            letterSpacing="-2%"
          >
            12,786
          </Text>
          <Text
            h="21.92px"
            w="21.92px"
            fontFamily="Open Sans"
            lineHeight="100%"
            color="#FFFFFF"
            fontSize="24.66px"
            mt="-2px"
          >
            {" "}
            æ{" "}
          </Text>
        </Flex>
      </Center>

      <Center
        borderRadius="34.935px"
        mb="21.92px"
        bgColor="#FFFFFF0D;
"
        py="5.48px"
        px="10.96px"
        mx="82.2px"
        w="93.16px"
      >
        <Flex fontFamily="Poppins" fontSize="10.96px" fontWeight="500">
          <Text color="white">4,312</Text>
          <Text
            color="#FFFFFF80;
"
          >
            .16 NEAR
          </Text>
        </Flex>
      </Center>

      <Flex
        mb="21.92px"
        gap="5.48px"
        mx="54.8px"
        alignItems="center"
        justifyContent="center"
      >
        <Image
          src={"../resources/Download1.png"}
          bgColor="#FFFFFF0D;"
          py="9.9325px"
          px="9.59px"
          borderRadius="10.275px"
          onClick={() => props.liquidity()}
        />
        <Image
          src={"../resources/Upload1.png"}
          bgColor="#FFFFFF0D;"s
          py="9.9325px"
          px="9.59px"
          borderRadius="10.275px"
          onClick={() => props.upload()}
        />
        <Image
          src={"../resources/Frame 5557.png"}
          bgColor="#FFFFFF0D;"
          py="7.9325px"
          px="7.59px"
          borderRadius="10.275px"
          onClick={() => props.exchange()}
        />
        <Image
          src={"../resources/plant 1.png"}
          bgColor="#FFFFFF0D;"
          py="7.9325px"
          px="7.59px"
          borderRadius="10.275px"
          onClick={() => props.pool()}

        />
      </Flex>
      {/* end */}

      <Center mb="10.96px">
        <Text
          fontFamily="Poppins"
          fontSize="10.96px"
          lineHeight="10.96px"
          color="#FFFFFF"
          fontWeight="500"
        >
          Recent activity
        </Text>
      </Center>
      {/* end */}

      <Box
        mx="16.44px"
        mb="21.92"
        borderRadius="10.275px"
        w="224.68px"
        height="137px"
      >
        <Image
          src={"../resources/chart.png"}
          w="224.68px"
          position="relative"
          top="0"
        />
        <Image
          src="../resources/Group 14275.png"
          w="234.6125px"
          position="relative"
          top="-98.5px"
        /> 
      </Box>
      {/* end */}

      <Center mb="16.44px">
        <Text
          fontFamily="Poppins"
          fontSize="10.96px"
          fontWeight="342.5"
          lineHeight="10.96px"
          color="#FFFFFF"
        >
          My Pools
        </Text>
      </Center>
      {/* end */}

      <Flex
        justifyContent="space-between"
        alignItems="center"
        mb="10.96px"
        ml="27.4px"
        mr="21.92px"
      >
        <Text
          color="#FFFFFF4D"
          fontFamily="Poppins"
          fontStyle="normal"
          fontWeight="274"
          fontSize="9.59px"
          line-height="14.385px"
        >
          Pair
        </Text>
        <Flex justifyContent="space-between" gap="32.88px">
          <Text
            color="#FFFFFF4D"
            fontFamily="Poppins"
            fontStyle="normal"
            fontWeight="274"
            fontSize="9.59px"
            line-height="14.385px"
          >
            Amount
          </Text>
          <Text
            color="#FFFFFF4D"
            fontFamily="Poppins"
            fontStyle="normal"
            fontWeight="274"
            fontSize="9.59px"
            line-height="14.385px"
          >
            Accrued
          </Text>
        </Flex>
      </Flex>

      {/* end */}
      <Flex
        mx="16.44px"
        mb="5.48px"
        gap="8.905px"
        bgColor='#FFFFFF08;'
        borderRadius="10.275px"
        px="10.96px"
        py="11.645px"
        alignContent="center"
      >
        <Flex
          justifyContent="center"
          alignItems="center"
        >
          <Image
            src={"../resources/Group 14031.png"}
            w="16.44px"
            h="16.44px"
            mr="2.74px"
          />
          <Image
            src={"../resources/Group 14030.png"}
            w="16.44px"
            h="16.44px"
            mr="5.48px"
          />
          <Text
            fontSize="9.59px"
            lineHeight="14.385px"
            fontFamily="Poppins"
            fontWeight="274"
            color="#ffffff"
          >
            AEX-NEAR
          </Text>
        </Flex>

        <Flex
          gap="10.96px"
          fontSize="9.59px"
          lineHeight="14.385px"
          fontFamily="Poppins"
          fontWeight="274"
          justifyContent="space-between"
        >
          <Text color="#ffffff">12123,51 AEX</Text>
          <Text color="#ffffff">+0.75%</Text>
        </Flex>
      </Flex>

      <Flex
        mx="16.44px"
        mb="21.92px"
        gap="8.905px"
        bgColor='#FFFFFF08;'
        borderRadius="10.275px"
        px="10.96px"
        py="11.645px"
        alignContent="center"
      >
        <Flex
          justifyContent="center"
          alignItems="center"
        >
          <Image
            src={"../resources/Group 14030.png"}
            w="16.44px"
            h="16.44px"
            mr="2.74px"
          />
          <Image
            src={"../resources/Group 14031.png"}
            w="16.44px"
            h="16.44px"
            mr="5.48px"
          />
          <Text
            fontSize="9.59px"
            lineHeight="14.385px"
            fontFamily="Poppins"
            fontWeight="274"
            color="#ffffff"
          >
            NEAR-AEX
          </Text>
        </Flex>

        <Flex
          gap="10.96px"
          fontSize="9.59px"
          lineHeight="14.385px"
          fontFamily="Poppins"
          fontWeight="274"
          justifyContent="space-between"
        >
          <Text color="#ffffff">12123,51 NEAR</Text>
          <Text color="#ffffff">+0.75%</Text>
        </Flex>
      </Flex>
      
      {/* end */}
      <Center mb="18.495px">
        <Text
          fontFamily="Poppins"
          fontSize="10.96px"
          fontWeight="342.5"
          lineHeight="10.96px"
          color="#FFFFFF"
        >
          History
        </Text>
      </Center>
      {/* end */}



      <Flex alignItem="center" mb="18.495px" mx="16.44px">
        <Image src="../resources/Download.png" border="1px" p="3px" borderColor="#FFFFFF1A" borderRadius="100%" w="24px" mr="10.275px" />
        <Flex flexDirection="column" mr="56.17px">
            <Text
              fontFamily="Poppins"
              fontSize="10.96px"
              fontWeight="342.5px"
              lineHeight="10.96px"
              color="#FFFFFF"
              mb="2.74px"
            >
              Recieved NEAR
            </Text>
            <Text
              fontFamily="Poppins"
              fontSize="9.59px"
              fontWeight="274"
              lineHeight="9.59px"
              color="#FFFFFF4D"
            >
              from @pashq
            </Text>
          </Flex>
          <Flex flexDirection="column">
            <Text
              fontFamily="Poppins"
              fontSize="10.96px"
              fontWeight="342.5px"
              lineHeight="10.96px"
              color="#FFFFFF"
              mb="2.74px"
            >
              +99 NEAR
            </Text>
            <Text
              fontFamily="Poppins"
              fontSize="9.59px"
              fontWeight="274"
              lineHeight="9.59px"
              color="#FFFFFF4D"
              alignSelf="flex-end"
            >
              13.07.22
            </Text>
          </Flex>
        </Flex>
        <Flex alignItem="center" mb="18.495px" mx="16.44px">
        <Image src="../resources/Download.png" border="1px" p="3px" borderColor="#FFFFFF1A" borderRadius="100%" w="24px" mr="10.275px" />
        <Flex flexDirection="column" mr="56.17px">
            <Text
              fontFamily="Poppins"
              fontSize="10.96px"
              fontWeight="342.5px"
              lineHeight="10.96px"
              color="#FFFFFF"
              mb="2.74px"
            >
              Recieved NEAR
            </Text>
            <Text
              fontFamily="Poppins"
              fontSize="9.59px"
              fontWeight="274"
              lineHeight="9.59px"
              color="#FFFFFF4D"
            >
              from @pashq
            </Text>
          </Flex>
          <Flex flexDirection="column">
            <Text
              fontFamily="Poppins"
              fontSize="10.96px"
              fontWeight="342.5px"
              lineHeight="10.96px"
              color="#FFFFFF"
              mb="2.74px"
            >
              +99 NEAR
            </Text>
            <Text
              fontFamily="Poppins"
              fontSize="9.59px"
              fontWeight="274"
              lineHeight="9.59px"
              color="#FFFFFF4D"
              alignSelf="flex-end"
            >
              13.07.22
            </Text>
          </Flex>


        </Flex>
        <Flex alignItem="center" mb="18.495px" mx="16.44px">
        <Image src="../resources/Download.png" border="1px" p="3px" borderColor="#FFFFFF1A" borderRadius="100%" w="24px" mr="10.275px" />
        <Flex flexDirection="column" mr="56.17px">
            <Text
              fontFamily="Poppins"
              fontSize="10.96px"
              fontWeight="342.5px"
              lineHeight="10.96px"
              color="#FFFFFF"
              mb="2.74px"
            >
              Recieved NEAR
            </Text>
            <Text
              fontFamily="Poppins"
              fontSize="9.59px"
              fontWeight="274"
              lineHeight="9.59px"
              color="#FFFFFF4D"
            >
              from @pashq
            </Text>
          </Flex>
          <Flex flexDirection="column">
            <Text
              fontFamily="Poppins"
              fontSize="10.96px"
              fontWeight="342.5px"
              lineHeight="10.96px"
              color="#FFFFFF"
              mb="2.74px"
            >
              +99 NEAR
            </Text>
            <Text
              fontFamily="Poppins"
              fontSize="9.59px"s
              fontWeight="274"
              lineHeight="9.59px"
              color="#FFFFFF4D"
              alignSelf="flex-end"
            >
              13.07.22
            </Text>
          </Flex>


        </Flex>
    </Box>
  );
}

export default tokenWallet;
