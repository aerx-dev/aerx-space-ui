import React from 'react'
import {
  Box,
  Button,
  Image,
  Text,
  Heading,
  Container
} from "@chakra-ui/react";
import WithDots from "./WithDots";
import { useDispatch, useSelector } from '../../store/store';
import {  getUserState, setImages } from '../../store/slices/imageSlices';



const SectionOne: React.FC = () => {
    const dispatch = useDispatch();
    const { group2,group3,handWriting,star } = useSelector(getUserState);
    return (
        <Box>
            <Container maxWidth="container.xlg" >
            <WithDots>
            <Box display='flex' alignItems="center" my="30" flexDirection="row" marginRight='95px' marginLeft="95px">
                <Box mr={0} width={585}>
                    <Image  height='237px' src={group2} position='absolute' className='group1-b'/>
                    <Image  height='237px' src={group3} position='absolute' className='group2-b'/>
                    <Image  height='237px' src={handWriting} />
                </Box>
                <Box width={739} className='monetize' marginLeft="125px">
                    <Heading fontSize='6xl' color='#322E65'>
                    Monetize your ideas
                    </Heading>
                    <Box display="flex" flexDirection='row'>
                        <Image  src={star} mr={2}/>
                    <Text 
                    className='easily'
                    >
                       Easily
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
                     color="#322E6580"
                    >
                    In Aerx, makers can easily monetize content and retain their ownership rights.
                    </Text>
                    <Text
                     fontSize='2xl'
                     fontStyle='normal'
                     lineHeight={1.5}
                     fontWeight='300'
                     justifyContent='left'
                     marginRight={13}
                     mt={35}
                     color="#322E6580"
                    >            
        Just publish what you have created: text, video, picture or audio. It doesn't matter if you are a professional artist who just came up with a funny meme, an aspiring musician or an author of interesting texts. Post it and get rewarded if other users like it.

                    </Text>
                </Box>          
            </Box>
            </WithDots>
            </Container >
        </Box>
        
        

    )
}

export default SectionOne;