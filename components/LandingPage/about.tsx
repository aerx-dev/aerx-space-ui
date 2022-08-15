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
            <WithStar>
            <WithDots>
            <Container maxWidth="container.xlg">
                
            <Center py={30}>
                <Heading  color='#322E65' fontSize='6xl' fontWeight='600px' >
               About project
                </Heading>  
            </Center>
            <Center>
                <Button margin="auto" position="absolute" bgColor="#8D00FF;
">
                    <Image width={12} src={polygon} />
                </Button>
                    <Image src={frame}/>
            </Center>
            </Container >
            </WithDots>
            </WithStar>
        
        

    )
}

export default About;