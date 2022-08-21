import React from 'react'
import {
  Box,
  Button,
  Image,
  Text,
  Heading,
  Container,
  FormControl,
  Input,
  Flex,
} from "@chakra-ui/react";

import WithStar from "./WithStars";
import WithDots from "./WithDots";
import { useDispatch, useSelector } from '../../store/store';
import {  getUserState, setImages } from '../../store/slices/imageSlices';






const NewsLetterForm: React.FC = () => {
    const dispatch = useDispatch();
    const { saly1, saly2, frame1, frame2, frame3, star } = useSelector(getUserState);
    return (
    
    <Box className='form'>
        <Container maxWidth="container.xlg" mt="209px">
        <Flex display='flex' alignItems="center" py="30" flexDirection="row" marginRight='95px' marginLeft="95px"
         
        >
            <Box ml={0} width={615} bgImage="url('../resources/Group 5403.png')"
         bgRepeat="no-repeat"
         bgPosition="center top"
         bgSize="65%"   
         height="100vh">
            </Box>

            <Box width={695}>
                    <Heading fontSize='64px' fontWeight="600" fontFamily="Poppins" lineHeight="96px">
                        <Image src='resources\team2.png'/>
                    {/* Be part of the team */}
                    </Heading>
                    <Box display="flex" flexDirection='row'>
                        {/* <Image  src={star} mr={3}/> */}
                    <Text 
                    className='easily' fontFamily="Poppins" fontStyle="italic" fontWeight="800" fontSize="96px" lineHeight="144px"  color="#8d00ff"
                    >
                        <Image src='resources\Group 5381.png' />
                    </Text>
                    </Box>
                    <Text 
                     fontSize='20px'
                     
                     lineHeight="30px"
                     fontWeight='300'
                     
                     
                     my="48px"
                     
                     color="#322E6580"
                    >
                          <Image src='resources\subscribe.png' />
                    {/* Kindly subscribe to our email news letter to get amazing information. */}

                    </Text>
                    <FormControl>
                        <Input
                        placeholder="Enter your mail"
                        type="text"
                        width='50%'
                        borderRadius='25'
                        py="24px"
                        borderColor="8E8E8E"
                        pl="32px"
                        >
                        
                        </Input>
                        <Button bgColor='#8D00FF' borderRadius='100%' color='white' mt={5} className='inner' marginTop="-5px" marginLeft="-48px">
                            <Image width={3} height={3} src={frame3} />
                        </Button>
                        <Box display='flex' flexDirection='row' mt={35} mb={55}>
                            <Image src={frame1} mr="32px" color="#ebe8fe" w="45px" height="45px" />
                            <Image src={frame2} color="#ebe8fe" w="48px" height="48px "/>
                        </Box>
                    </FormControl>
                </Box>
              
        </Flex>
        </Container>
    </Box>

  )
}
export default NewsLetterForm;