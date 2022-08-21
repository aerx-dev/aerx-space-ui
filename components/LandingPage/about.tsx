import React from 'react'
import {
  Image,
  Heading,
  Center,
  Container,
  Button
} from "@chakra-ui/react";
import WithStar from "./WithStars";
import WithDots from "./WithDots";

import { useDispatch, useSelector } from '../../store/store';
import {  getUserState, setImages } from '../../store/slices/imageSlices';


const About: React.FC = () => {
    const dispatch = useDispatch();
    const { frame,polygon } = useSelector(getUserState);
    return (
            
            
            <Container maxWidth="container.xlg">
                
            <Center>
                <Heading    
                    mt="190.75px"
                     fontSize="64px"
                     lineHeight="96px"
                     fontWeight="600"
                     color="#322E65;"
                     mb="64px">
               {/* About project */}
               <Image src='resources\About project.png' />
                </Heading>  
            </Center>
            <Center>
                <Button margin="auto" position="absolute" bgColor="#8D00FF;
">
                    <Image src={polygon} />
                </Button>
                    <Image src={frame} width="1320px" height="633px"/>
            </Center>
            </Container >
            
            
        
        

    )
}

export default About;