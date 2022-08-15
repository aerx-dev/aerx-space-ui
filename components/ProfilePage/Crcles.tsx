import React from "react";
import {
  Box,
  Image,
  Text,
  SimpleGrid,
  Center,
  WrapItem

} from "@chakra-ui/react";
import { Provider } from "chakra-ui-carousel";

import { useDispatch, useSelector } from "../../store/store";
import { getUserState, setImages } from "../../store/slices/imageSlices";
import Carousel from 'carousel-react-rcdev'

type Props = {}

const LowerSection = (props: Props) => {
  const dispatch = useDispatch();
  const { groupLp1,ellipse4 } = useSelector(getUserState);
  return (
    <SimpleGrid bgColor="black"  width="376px" height="646px">
      <Box className="LowerSection" borderRadius={32} backgroundColor="#1F1F1F">
  
          <Center mt={2} >
              <Image src={groupLp1} my={2} />
          </Center>
          <Center >
              <Image src={groupLp1} mb={2} />
          </Center>
          <Box>
        <Text color="#FFFFFF80">Circles</Text>
        <Box mt={6} mx="auto" alignItems="center">
       
        </Box>


      </Box>

      </Box>
     
    </SimpleGrid>
  )
}

export default LowerSection