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
import LowerTag from "./LowerTag"



type Props = {}

const LowerSection = (props: Props) => {
  const dispatch = useDispatch();
  const { groupLp1,ellipse4 } = useSelector(getUserState);
  return (
<div></div>
   
  )
}

export default LowerSection