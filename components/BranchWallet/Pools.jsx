import React from "react";
import {
  Box,
  Center,
  Flex,
  Image,
  Text,
  FormControl,
  Input,
} from "@chakra-ui/react";
import Collapse from "../Profiles/Collapse";
import Newpools from "./NewPool"
import { MinusIcon } from '@chakra-ui/icons'


function Pools(props) {

  const [isNewPool, setNewPool] = React.useState(false);

  const newPools =() => {
    setNewPool((prevState) => !prevState);
  }

  return (
    <>
    {
      isNewPool ? <Newpools newPool={newPools} /> :
      <Box w="257.56px" h="739.8px" bgColor="#1F1F1F" position="absolute" top="0">
        <Center>
      <div
        className="m cursor-pointer  hover:bg-[#ffffff39]  flex flex-col
        background-#1F1F1F
        gap-0.5
        mb-[26.825px]
        mt-2
        "
        onClick={props.toggleWallet}
      >
        <MinusIcon
            w="21.92px"
            bgColor="rgba(255, 255, 255, 0.3);"
            height="2px"
          />
          <MinusIcon
            w="21.92px"
            bgColor="rgba(255, 255, 255, 0.3);"
            height="2px"
          />
      </div>
      </Center>
        <Flex mt="27.4px" ml="16.44px" gap="76.72px" alignItems="center" cursor="pointer">
          <Image src={"../resources/Frame 14277.png"} w="16.44px"  onClick={() => props.pool()} />
          <Text
            fontFamily="Poppins"
            fontWeight="700"
            fontSize="16.44"
            lineHeight="24.66px"
            color="white"
          >
            Pools
          </Text>
        </Flex>
        <FormControl
          mx="16.44px"
          w="224.68px"
          mb="21.92px"
          mt="10.96px"
          fontFamily="Poppins"
          bgColor="#191A1B;"
          borderRadius="10.275px"
        >
         <Flex>
         <Image src={'../resources/Frame 13915.png'} ml="8px" top="10px" w="16.44px" h="16.44px" position="relative" zIndex="2"/>
          <Input
            position="relative"
            py="13.7px"
            placeholder="Search"
            fontSize="10.96px"
            lineHeight="10.96px"
            fontWeight="400"
            borderStyle="none"
            bgColor="#191A1B;"
            color="#ffffff"
            type="search"
          />
         </Flex>
        </FormControl>

        <Text
          mb="16.44px"
          textAlign="center"
          color="white"
          fontSize="10.96px"
          lineHeight="10.96px"
          fontFamily="Poppins"
          fontWeight="500"
        >
          My Pools
        </Text>
        <Flex
          ml="27.4px"
          mb="10.96px"
          fontFamily="Poppins"
          fontWeight="400"
          fontSize="9.59px"
          lineHeight="14.385px"
          gap="97.16px"
        >
          <Text color="#FFFFFF4D;">Pair</Text>
          <Flex gap="15.12px">
            <Text
              color="#FFFFFF4D;
"
            >
              Fee
            </Text>
            <Text
              color="#FFFFFF4D;
"
            >
              TVL
            </Text>
            <Text
              color="#FFFFFF4D;
"
            >
              Pools
            </Text>
          </Flex>
        </Flex>

        <Flex
          py="15.07px"
          mx="16.44px"
          alignItems="center"
          bgColor="#FFFFFF08;"
          borderRadius="10.275px"
          mb="5.48px"
        >
          <Flex mr="20.975px" pl="9.59px" alignItems="center">
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
              fontFamily="Poppins"
              fontWeight="200"
              fontSize="10.96px"
              lineHeight="14.385px"
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
          >
            <Text color="#ffffff">0.3%</Text>
            <Text color="#ffffff">$3.46</Text>
            <Text color="#ffffff">197</Text>
          </Flex>
        </Flex>

        <Flex
          py="15.07px"
          mx="16.44px"
          alignItems="center"
          bgColor="#FFFFFF08;"
          borderRadius="10.275px"
          mb="5.48px"
        >
          <Flex mr="20.975px" pl="9.59px" alignItems="center">
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
              fontFamily="Poppins"
              fontWeight="200"
              fontSize="10.96px"
              lineHeight="14.385px"
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
          >
            <Text color="#ffffff">0.3%</Text>
            <Text color="#ffffff">$3.46</Text>
            <Text color="#ffffff">197</Text>
          </Flex>
        </Flex>

        <Flex
          py="15.07px"
          mx="16.44px"
          alignItems="center"
          bgColor="#FFFFFF08;"
          borderRadius="10.275px"
          mb="21.92px"
          justifyContent="center"
          onClick = {() => newPools()}
        >
          <Text
            fontFamily="Poppins"
            fontWeight="342.5"
            fontSize="10.96px"
            lineHeight="10.96px"
            color="#FFFFFF4D"
          >
            + New Pool
          </Text>
        </Flex>

        <Text
          mb="16.44px"
          textAlign="center"
          color="white"
          fontSize="10.96px"
          lineHeight="10.96px"
          fontFamily="Poppins"
          fontWeight="500"
        >
          Top Pools
        </Text>

        <Flex
          ml="27.4px"
          mb="10.96px"
          fontFamily="Poppins"
          fontWeight="400"
          fontSize="9.59px"
          lineHeight="14.385px"
          gap="97.16px"
        >
          <Text color="#FFFFFF4D;">Pair</Text>
          <Flex gap="15.12px">
            <Text
              color="#FFFFFF4D;
"
            >
              Fee
            </Text>
            <Text
              color="#FFFFFF4D;
"
            >
              TVL
            </Text>
            <Text
              color="#FFFFFF4D;
"
            >
              Pools
            </Text>
          </Flex>
        </Flex>

        <Flex ml="16.44" mb="23.975px">
        <Flex mr="20.975px" pl="9.59px" alignItems="center">
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
            fontFamily="Poppins"
            fontWeight="200"
            fontSize="10.96px"
            lineHeight="14.385px"
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
        >
          <Text color="#ffffff">0.3%</Text>
          <Text color="#ffffff">$3.46</Text>
          <Text color="#ffffff">197</Text>
        </Flex>
        </Flex>

        <Flex ml="16.44" mb="23.975px">
        <Flex mr="20.975px" pl="9.59px" alignItems="center">
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
            fontFamily="Poppins"
            fontWeight="200"
            fontSize="10.96px"
            lineHeight="14.385px"
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
        >
          <Text color="#ffffff">0.3%</Text>
          <Text color="#ffffff">$3.46</Text>
          <Text color="#ffffff">197</Text>
        </Flex>
        </Flex>

        <Flex ml="16.44" mb="23.975px">
        <Flex mr="20.975px" pl="9.59px" alignItems="center">
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
            fontFamily="Poppins"
            fontWeight="200"
            fontSize="10.96px"
            lineHeight="14.385px"
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
        >
          <Text color="#ffffff">0.3%</Text>
          <Text color="#ffffff">$3.46</Text>
          <Text color="#ffffff">197</Text>
        </Flex>
        </Flex>

        <Flex ml="16.44" mb="23.975px">
        <Flex mr="20.975px" pl="9.59px" alignItems="center">
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
            fontFamily="Poppins"
            fontWeight="200"
            fontSize="10.96px"
            lineHeight="14.385px"
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
        >
          <Text color="#ffffff">0.3%</Text>
          <Text color="#ffffff">$3.46</Text>
          <Text color="#ffffff">197</Text>
        </Flex>
        </Flex>

        <Flex ml="16.44" mb="23.975px">
        <Flex mr="20.975px" pl="9.59px" alignItems="center">
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
            fontFamily="Poppins"
            fontWeight="200"
            fontSize="10.96px"
            lineHeight="14.385px"
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
        >
          <Text color="#ffffff">0.3%</Text>
          <Text color="#ffffff">$3.46</Text>
          <Text color="#ffffff">197</Text>
        </Flex>
        </Flex>

        <Flex ml="16.44" mb="23.975px">
        <Flex mr="20.975px" pl="9.59px" alignItems="center">
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
            fontFamily="Poppins"
            fontWeight="200"
            fontSize="10.96px"
            lineHeight="14.385px"
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
        >
          <Text color="#ffffff">0.3%</Text>
          <Text color="#ffffff">$3.46</Text>
          <Text color="#ffffff">197</Text>
        </Flex>
        </Flex>

        <Flex ml="16.44" mb="23.975px">
        <Flex mr="20.975px" pl="9.59px" alignItems="center">
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
            fontFamily="Poppins"
            fontWeight="200"
            fontSize="10.96px"
            lineHeight="14.385px"
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
        >
          <Text color="#ffffff">0.3%</Text>
          <Text color="#ffffff">$3.46</Text>
          <Text color="#ffffff">197</Text>
        </Flex>
        </Flex>

        <Flex ml="16.44" mb="23.975px">
        <Flex mr="20.975px" pl="9.59px" alignItems="center">
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
            fontFamily="Poppins"
            fontWeight="200"
            fontSize="10.96px"
            lineHeight="14.385px"
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
        >
          <Text color="#ffffff">0.3%</Text>
          <Text color="#ffffff">$3.46</Text>
          <Text color="#ffffff">197</Text>
        </Flex>
        </Flex>
      </Box>
   
    }
    </>
  );
}

export default Pools;
