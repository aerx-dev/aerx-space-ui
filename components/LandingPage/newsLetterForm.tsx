import React from 'react'
import {
  Box,
  Button,
  Image,
  Text,
  Heading,
  Container,
  FormControl,
  Input
} from "@chakra-ui/react";

import WithStar from "./WithStars";
import WithDots from "./WithDots";
import { useDispatch, useSelector } from '../../store/store';
import {  getUserState, setImages } from '../../store/slices/imageSlices';






const NewsLetterForm: React.FC = () => {
    const dispatch = useDispatch();
    const { saly1, saly2, frame1, frame2, frame3, star } = useSelector(getUserState);
    return (
    <WithStar>
        <WithDots>
    <Box className='form'>
        <Image width='185px' src={saly2} className='saly2-b'/>
        <Container maxWidth="container.xlg">
        <Box display='flex' alignItems="center" py="30" flexDirection="row" marginRight='95px' marginLeft="95px">
            <Box ml={0} width={615} mr={4} >
                <Image width='285px' src={saly1} className='saly1-b'/>
            </Box>

            <Box width={695}>
                    <Heading fontSize='6xl' color='#322E65'>
                    Be part of the team
                    </Heading>
                    <Box display="flex" flexDirection='row'>
                        <Image  src={star} mr={2}/>
                    <Text 
                    className='easily'
                    >
                       Right now
                    </Text>
                    </Box>
                    <Text 
                     fontSize='2xl'
                     fontStyle='normal'
                     lineHeight={1.5}
                     fontWeight='300'
                     justifyContent='left'
                     marginRight={13}
                     mt={35}
                     mb={35}
                     color="#322E6580"
                    >
                    Kindly subscribe to our email news letter to get amazing information.

                    </Text>
                    <FormControl>
                        <Input
                        placeholder="Enter your mail"
                        type="text"
                        width='50%'
                        borderRadius='25'
                        py={6}
                        borderColor="8E8E8E"
                        >
                        
                        </Input>
                        <Button bgColor='#8D00FF' borderRadius='100%' color='white' mt={5} className='inner' marginTop="-5px" marginLeft="-48px">
                            <Image width={3} height={3} src={frame3} />
                        </Button>
                        <Box display='flex' flexDirection='row' mt={35} mb={55}>
                            <Image src={frame1} mr={6}/>
                            <Image src={frame2}/>
                        </Box>
                    </FormControl>
                </Box>
              
        </Box>
        </Container>
    </Box>
    </WithDots>
    </WithStar>
  )
}
export default NewsLetterForm;