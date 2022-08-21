import React from 'react'
import {
  Box,
  Button,
  Image,
  Text,
  Heading,
  Container,
  Flex
} from "@chakra-ui/react";
import WithDots from "./WithDots";
import { useDispatch, useSelector } from '../../store/store';
import {  getUserState, setImages } from '../../store/slices/imageSlices';



const SectionOne: React.FC = () => {
    const dispatch = useDispatch();
    const { group2,group3,handWriting,star } = useSelector(getUserState);
    return (
        <Box>
            {/* <Container maxWidth="container.xlg"  > */}
            
            <Flex   marginTop="239px" 
             bgImage="url('../resources/Group 5392.png')"
             bgRepeat="no-repeat"
             bgPosition="center left"
             bgSize="80%"
             gap='51px'
             
             height="100vh"
            >
                 <Box mr={0} width={585}>
                </Box> 
                <Box width={739} className='monetize' marginLeft="125px">
                    <Heading   fontStyle="italic"
                     fontSize="20px"
                     lineHeight="30px"
                     fontWeight='300'
                     mt="32px"
                     color="#322E6580">
                      
                        <Image  src="../resources\Monetize11.png" mr={2}/>

                    {/* Monetize your ideas */}
                    </Heading>
                    <Box display="flex" flexDirection='row'>
                        {/* <Image  src={star} mr={2}/> */}
                    {/* <Text 
                    className='easily' fontWeight="800" fontSize="96px" lineHeight="114px" fontFamily="Poppins" color="#8d00ff" fontStyle="italic" letterSpacing="-0.03em"
                    > */}
                        <Image  src="../resources\Group 5380.png" mr={2} mb="48px"/>
                       
                    {/* </Text> */}
                    </Box>
                        <Image  src="../resources/in aerx.png
                        
                        "/>

                    {/* <Text
                     fontSize='20px'
                     lineHeight="30px"
                     fontWeight='300'
                    //  justifyContent='left'
                     
                     mt="48px"
                     color="#322E6580"
                    >
                    In Aerx, makers can easily monetize content and retain their ownership rights.<br/>
                    </Text>
                    <Text
                     fontSize='20px'
                     lineHeight="30px"
                     fontWeight='300'
                    
                     color="#322E6580"
                    >            
        Just publish what you have created: text, video, picture or audio. It doesn't matter if you are a professional artist who just came up with a funny meme, an aspiring musician or an author of interesting texts. Post it and get rewarded if other users like it.

                    </Text> */}
                </Box>          
            </Flex>
        
            {/* </Container > */}
        </Box>
        

    )
}

export default SectionOne;