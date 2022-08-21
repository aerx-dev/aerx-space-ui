import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';

export interface ImagesState {
  email: string
  frame:string
  polygon:string
  saly:string
  group1:string
  saly3:string
  saly4:string
  fly1:string
  fly2:string
  fly3:string
  star:string
  group2:string
  group3:string
  handWriting:string
  saly1:string
  saly2:string
  frame1:string
  frame2:string
  frame3:string
  logo:string
  rectangle:string
  groupP1:string
  groupP2:string
  ellipse1:string
  ellipse2:string
  ellipse3:string
  ellipse4:string
  logoP:string
  frameP1:string
  frameP2:string
  groupLp1:string
  groupLp2:string
  rectangleP1:string
  download:string
  upload:string
  framep3:string
  plant:string
  groupLp3:string
  dot:string
  ticketStar:string
  rectangleP2:string
  rectangleP3:string
  rectangleP4:string
  ellipse5:string
}

const initialState: ImagesState = {

// landing page images

  email: 'sulhadin@gmail.com',
  frame:"../resources/Rectangle 3251.png",
  polygon:"../resources/Polygon 4.png",
  saly:'../resources/Saly-1.png',
  group1:'../resources/Group 5394.png',

  saly1:'../resources/Saly-44.png',
  saly2:'../resources/Saly-15.png',
  frame1:'../resources/Frame 5176.svg',
  frame2:'../resources/Vector.png',
  frame3:'../resources/Frame 5171.png',
  

  group2:"../resources/landingPage/Group 5389.png",
  group3:"../resources/landingPage/Group 5388.png",
  handWriting:"../resources/landingPage/Saly-25.png",

  saly3:"../resources/Saly-35.png ",
  saly4:"../resources/Saly-34.png ",
  fly1:"../resources/Fly æ 5.png ",
  fly2:"../resources/Fly æ 4.png",
  fly3:"../resources/Fly æ 3.png ",
  star:"../resources/star.svg ",

// profile page images

  logo:"../resources/aerx_logo-removebg-preview 1 (Traced).svg",

  rectangle:"../resources/Rectangle 3212.png",
  groupP1:"../resources/Group 14133.png",
  groupP2:"../resources/Group 14134.png",
  ellipse1:"../resources/Ellipse 725.png",
  ellipse2:"../resources/Ellipse 724.png",
  ellipse3:"../resources/Ellipse 702.svg",
  logoP:"../resources/aerx_logo-removebg-preview 1 (Traced).svg",
  frameP1:"../resources/Frame 14040.png",
  frameP2:"../resources/Frame 14042.png",
  groupLp1:"../resources/Rectangle 3526.png",
  groupLp2:"../resources/Rectangle 3526.png",
  ellipse4:"../resources/Ellipse 781.png",
  rectangleP1:"../resources/Rectangle 3526.png",
  download:"../resources/Download.png",
  upload:"../resources/Upload.png",
  framep3:"../resources/Frame 5556.png",
  plant:"../resources/plant 1.png",

  groupLp3:"../Group 14262.png",
  dot:"../resources/Rectangle 3396.png",
  ticketStar:"../resources/Ticket Star.png",
  rectangleP2:"../resources/Rectangle 3422.png",
  rectangleP3:"../resources/Rectangle 3421.png",
  rectangleP4:"../resources/Rectangle 3527.png",
  ellipse5:"../resources/Ellipse 782.png",
  





} as const;


export const imageSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    setImages: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState.email>
    ) => {
      state.email = action.payload;
    },
  },
});


export const getUserState = (state: { images: ImagesState }) => state.images;
export const { setImages } = imageSlice.actions;

export default imageSlice.reducer;