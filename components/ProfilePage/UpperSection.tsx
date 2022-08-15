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
} from "@chakra-ui/react";

import { useDispatch, useSelector } from "../../store/store";
import { getUserState, setImages } from "../../store/slices/imageSlices";

type Props = {};

const UpperSection = (props: Props) => {
  const dispatch = useDispatch();
  const { rectangle, groupP1,groupP2,ellipse1,ellipse2, ellipse3, logoP, frameP1,frameP2 } = useSelector(getUserState);
  const theme = extendTheme({
    textStyles: {
      h1: {
        // you can also use responsive styles
        fontSize: ['48px', '72px'],
        fontWeight: 'bold',
        lineHeight: '110%',
        letterSpacing: '-2%',
      },
      h2: {
        fontSize: ['36px', '48px'],
        fontWeight: 'semibold',
        lineHeight: '110%',
        letterSpacing: '-1%',
      },
    },
  })

  return (
    <SimpleGrid>
      <Box className="image" width="376px" height="434px" borderTopLeftRadius="80px 80px">

        <Image src={rectangle} bgColor="black" zIndex="-1" position="absolute"/>
      <Box >
          <Center mt={8}>
          <Image width={16} height={16} src={logoP} position="absolute" />

          </Center>
          <Flex>
          <Box  display="flex" flexDirection="column"  px={2}>
          <Image width={10} height={10} src={groupP1} border='2px'  />
          <Image width={10} height={10} src={ellipse1} border='2px'  borderColor='gray.200' borderRadius="100%" my={2}/>
          <Image width={10} height={10} src={groupP2} border='2px'  />
          <Image width={10} height={10} src={ellipse2} border='2px'  borderColor='gray.200' borderRadius="100%"  my={2}/>
          </Box>
          <Spacer/>
          <Box>
            <Center marginTop={280}>
              <Heading  fontSize='4xl' color='#FFFFFF' fontFamily="Poppins" fontWeight={700}>
              Pavel Dantsev
              </Heading>
            </Center>
              <Center>
              <Text fontSize="2xl" fontStyle="italic" color="#FFFFFFB2" fontWeight={400}>
              pashq.aerx
              </Text>
            </Center>
            <Center>
              <Image  src={ellipse3} marginRight={2}/>                
            <Text color="#FFFFFF80">Aura: 2k</Text>
            </Center>
          </Box>
          <Spacer/>
          <Box display="flex" flexDirection="column"  px={2} >
          <Image src={frameP1} />
          <Image src={frameP2} />
          {/* <Image width={10} height={10} src={groupP2} border='2px'  />
          <Image width={10} height={10} src={ellipse2} border='2px'  borderColor='gray.200' borderRadius="100%"  my={2}/> */}
          </Box>
          </Flex>
       
      </Box>

      </Box>

    </SimpleGrid>
  );
};

export default UpperSection;
