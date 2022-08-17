import React from 'react'
import {
  Box,
  Image,
  Text,
  Heading,
  Container,
  Flex,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from '../../store/store';
import {  getUserState, setImages } from '../../store/slices/imageSlices';



const SectionTwo: React.FC = () => {
    const dispatch = useDispatch();
    const { saly3,saly4,fly1,fly2,fly3,star } = useSelector(getUserState);
    return (
        <Box>
            <Container maxWidth="container.xlg">
            <Flex  marginRight='95px' marginLeft="95px" bgImage="url('../Group 5396.png ')"
             bgRepeat="no-repeat"
             bgPosition="top right"
             bgSize="45%"      
             height="80vh">

                <Box width={739} className='earn-more'>
                    <Heading fontSize='64px' fontWeight="600" lineHeight="96px" color='#322E65'>
                    Earn more
                    </Heading>
                    <Box display="flex" flexDirection='row'>
                        <Image  src={star} mr={2}/>
                    <Text 
                    fontWeight="800" fontSize="96px" lineHeight="114px" fontFamily="Poppins" color="#8d00ff" fontStyle="italic"
                    
                    >
                       Together
                    </Text>
                    </Box>
                    <Text  fontStyle="italic"
                     fontSize="20px"
                     lineHeight="30px"
                     fontWeight='300'
                     mt="48px"
                     color="#322E6580">
                    You can create combined posts with other authors and earn money on it together
                    </Text>
                    <Text
                         
                         fontSize="20px"
                         lineHeight="30px"
                         fontWeight='300'
                         mt="32px"
                         color="#322E6580"
                    >
                    Some blogger decides to use for his post a picture that another user drew, and is ready to pay him a little for it.
It turns out a win = a
                    </Text>
                </Box>
                <Box ml={0} width={585} mr={4} position='relative'>
                    {/* <Image width={185} src={fly1} position='absolute' className='fly1'/>
                    <Image  src={fly2} position='absolute' className='fly2'/>
                    <Image width={92} src={fly3} position='absolute' className='fly3'/>
                    <Image width={285} src={saly3} position='absolute' className='saly1'/>
                    <Image width={285} src={saly4} position='absolute' className='saly2'/> */}
                </Box>
                
            </Flex>
            </Container >
        </Box>
        
        

    )
}

export default SectionTwo;