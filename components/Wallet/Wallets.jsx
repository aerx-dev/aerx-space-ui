import React from 'react'
import {Box, Center, Text, Flex,Image} from '@chakra-ui/react'


function Wallets() {
  return (
    <Box w="257.56px" h="739.8px" bgColor="#1f1f1f" position="absolute" left="" top="0">
         <Center>
          <Box
            w="21.92px"
            bgColor="rgba(255, 255, 255, 0.3);"
            height="2px"
            mt="8.22px"
            borderRadius="6.85px"
          ></Box>
        </Center>
        <Center>
          <Box
            w="21.92px"
            bgColor="rgba(255, 255, 255, 0.3);"
            height="2px"
            mt="2.74px"
            borderRadius="6.85px"
            mb="19.18px"
          ></Box>
        </Center>

        <Center mb="10.96px">
            <Text fontFamily="Poppins" color="#ffffff" fontWeight="700" fontSize="16.44px" lineHeight="24.66px">Wallet</Text>
        </Center>

        <Text fontWeight="400" fontSize="9.59px" opacity="0.3" fontFamily="Poppins" mb="5.48px" color="white" textAlign="center">Total Balance</Text>

        <Center mb="16.44px" 
        fontWeight='600'
        >
            <Flex gap="5.48px">
            <Text fontFamily="Poppins" lineHeight="100%" fontSize="21.92px" color="#ffffff" letterSpacing="-2%" >12,786</Text>
            <Text h="21.92px" w="21.92px" fontFamily="Open Sans" lineHeight="100%" color='#FFFFFF' fontSize="24.66px" mt="-2px"> æ </Text>
            </Flex>
        </Center>
        

        <Center borderRadius="34.935px" mb="21.92px" bgColor="#FFFFFF0D;
"  py="5.48px" px="10.96px" mx="82.2px" w="93.16px">
        <Flex fontFamily="Poppins"  fontSize="10.96px" fontWeight="500" >
            <Text color="white">4,312</Text>
            <Text color="#FFFFFF80;
">.16 NEAR</Text>
        </Flex>
        </Center>

        <Flex mb="21.92px" gap="5.48px" mx="54.8px">
            <Box borderRadius="10.275px" py="9.9325px" px="9.59px" bgColor="#FFFFFF0D;">  
            <Image src={"../resources/Download1.png"} w="16.44px" h="16.44px" />
            </Box>
            <Box borderRadius="10.275px" py="9.9325px" px="9.59px" bgColor="#FFFFFF0D;">
            <Image src={"../resources/Upload1.png"} w="16.44px" h="16.44px"  />
            </Box>
            <Box borderRadius="10.275px" py="9.9325px" px="9.59px" bgColor="#FFFFFF0D;">
            <Image src={"../resources/Frame 5557.png"} w="16.44px" h="16.44px"  />
            </Box>
            <Box borderRadius="10.275px" py="9.9325px" px="9.59px" bgColor="#FFFFFF0D;">
            <Image src={"../resources/plant 1.png"} w="16.44px" h="16.44px"  />
            </Box>
        </Flex>
        {/* end */}


        <Center mb="10.96px">
            <Text
            fontFamily="Poppins"
            fontSize= "15.44px"
            fontWeight= "342.5px"
            lineHeight="10.96px"
            color="#FFFFFF"

            
            >Recent activity</Text>
        </Center>
        {/* end */}
        <Box mx="16.44px" mb="21.92">
            <Image src='../resources/Mask group.png' w="224.68px" h="137px" />
        </Box>
        {/* end */}
        <Center mb="16.44px">
            <Text
         fontFamily= "Poppins"
         fontSize= "10.96px"
         fontWeight= "342.5"
         lineHeight= "10.96px"
         color= "#FFFFFF"


            
            >My Pools</Text>
        </Center>
        {/* end */}
        <Flex justifyContent="space-around" alignItems="center" mb="22.605">
          <Text 
          color="#FFFFFF4D"
          fontFamily= 'Poppins'
          fontStyle= "normal"
          fontWeight= "274"
          fontSize= "9.59px"
          line-height= "14.385px"
          
          > pair</Text>
          <Flex justifyContent="space-between" gap="32.88px" >
            <Text
               color="#FFFFFF4D"
               fontFamily= 'Poppins'
               fontStyle= "normal"
               fontWeight= "274"
               fontSize= "9.59px"
               line-height= "14.385px"
            >
                  Amount
            </Text>
            <Text
               color="#FFFFFF4D"
               fontFamily= 'Poppins'
               fontStyle= "normal"
               fontWeight= "274"
               fontSize= "9.59px"
               line-height= "14.385px"
            >
                  Accrued
            </Text>
          </Flex>
        </Flex>
        {/* end */}
        <Flex
        ml="16.44" mb="29.455px"
        >
          <Flex mr="20.975px" pl="9.59px" alignItems="center" >
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
            gap="10.96px"
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
          <Text color="#ffffff">$3.46</Text>
       
        </Flex>
        </Flex>
        <Flex
        ml="16.44" mb="34.25px"
        >
          <Flex mr="20.975px" pl="9.59px" alignItems="center" >
          <Image
            src={"../resources/Group 14030.png"}
            w="16.44px"
            h="16.44px"
            mr="5.48px"
          />
          <Image
            src={"../resources/Group 14031.png"}
            w="16.44px"
            h="16.44px"
            mr="2.74px"
          />
         
          <Text
            gap="10.96px"
            fontSize="9.59px"
            lineHeight="14.385px"
            fontFamily="Poppins"
            fontWeight="274"
            color="#ffffff"

          
          >
            NEAR-AERX
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
          <Text color="#ffffff">$3.46</Text>
       
        </Flex>
        </Flex>
        {/* end */}
        <Center mb="18.495px">
          <Text
          fontFamily= "Poppins"
          fontSize= "10.96px"
          fontWeight= "342.5"
          lineHeight= "10.96px"
          color= "#FFFFFF"
          >
            History
          </Text>
        </Center>
        {/* end */}
        <Flex flexDirection="column" alignItem="center" mb="20.55px">
          
          <Flex justifyContent="space-evenly" alignItems="center" >
            <Box>
              <Image src='../resources/Download 6.png' w="13.7px"h="13.75px" />
            </Box>
            <Flex flexDirection="column">
                <Text 
                       fontFamily="Poppins"
                       fontSize="10.96px"
                       fontWeight="342.5px"
                       lineHeight="10.96px"
                       color= "#FFFFFF"
                       mb="2.74px"
                >Recieve Near</Text>
               <Text 
               fontFamily="Poppins"
               fontSize="9.59px"
               fontWeight="274"
               lineHeight="9.59px"
               color= "#FFFFFF4D"

               >from @pashq</Text>
            </Flex>
              <Flex flexDirection="column">
              <Text
                fontFamily="Poppins"
                fontSize="10.96px"
                fontWeight="342.5px"
                lineHeight="10.96px"
                color= "#FFFFFF"
                mb="2.74px"
              >
                +99 NEAR
              </Text>
              <Text
               fontFamily="Poppins"
               fontSize="9.59px"
               fontWeight="274"
               lineHeight="9.59px"
               color= "#FFFFFF4D"
              >
                  13.07
              </Text>
              </Flex>
          </Flex>


        </Flex>
        <Flex flexDirection="column" alignItem="center" mb="20.55px">
          
          <Flex justifyContent="space-evenly" alignItems="center" >
            <Box>
              <Image src='../resources/Download 6.png' w="13.7px"h="13.75px" />
            </Box>
            <Flex flexDirection="column">
                <Text 
                       fontFamily="Poppins"
                       fontSize="10.96px"
                       fontWeight="342.5px"
                       lineHeight="10.96px"
                       color= "#FFFFFF"
                       mb="2.74px"
                >Recieve Near</Text>
               <Text 
               fontFamily="Poppins"
               fontSize="9.59px"
               fontWeight="274"
               lineHeight="9.59px"
               color= "#FFFFFF4D"

               >from @pashq</Text>
            </Flex>
              <Flex flexDirection="column">
              <Text
                fontFamily="Poppins"
                fontSize="10.96px"
                fontWeight="342.5px"
                lineHeight="10.96px"
                color= "#FFFFFF"
                mb="2.74px"
              >
                +99 NEAR
              </Text>
              <Text
               fontFamily="Poppins"
               fontSize="9.59px"
               fontWeight="274"
               lineHeight="9.59px"
               color= "#FFFFFF4D"
              >
                  13.07
              </Text>
              </Flex>
          </Flex>


        </Flex>
        <Flex flexDirection="column" alignItem="center" mb="20.55px">
          
          <Flex justifyContent="space-evenly" alignItems="center" >
            <Box>
              <Image src='../resources/Download 6.png' w="13.7px"h="13.75px" />
            </Box>
            <Flex flexDirection="column">
                <Text 
                       fontFamily="Poppins"
                       fontSize="10.96px"
                       fontWeight="342.5px"
                       lineHeight="10.96px"
                       color= "#FFFFFF"
                       mb="2.74px"
                >Recieve Near</Text>
               <Text 
               fontFamily="Poppins"
               fontSize="9.59px"
               fontWeight="274"
               lineHeight="9.59px"
               color= "#FFFFFF4D"

               >from @pashq</Text>
            </Flex>
              <Flex flexDirection="column">
              <Text
                fontFamily="Poppins"
                fontSize="10.96px"
                fontWeight="342.5px"
                lineHeight="10.96px"
                color= "#FFFFFF"
                mb="2.74px"
              >
                +99 NEAR
              </Text>
              <Text
               fontFamily="Poppins"
               fontSize="9.59px"
               fontWeight="274"
               lineHeight="9.59px"
               color= "#FFFFFF4D"
              >
                  13.07
              </Text>
              </Flex>
          </Flex>


        </Flex>
        {/* end */}

    </Box>
  )
}

export default Wallets;