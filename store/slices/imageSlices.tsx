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
  frame:"../Rectangle 3251.png",
  polygon:"../Polygon 4.png",
  saly:'../Saly-1.png',
  group1:'../Group 5394.png',

  saly1:'../Saly-44.png',
  saly2:'../Saly-15.png',
  frame1:'../Frame 5176.svg',
  frame2:'../Vector.png',
  frame3:'../frame 5171.png',

  group2:"../landingPage/Group 5389.png",
  group3:"../landingPage/Group 5388.png",
  handWriting:"../landingPage/Saly-25.png",

  saly3:"../Saly-35.png ",
  saly4:"../Saly-34.png ",
  fly1:"../Fly æ 5.png ",
  fly2:"../Fly æ 4.png",
  fly3:"../Fly æ 3.png ",
  star:"../star.svg ",

// profile page images

  logo:"../landingPage/aerx_logo-removebg-preview 1 (Traced).svg",

  rectangle:"../Rectangle 3212.png",
  groupP1:"../Group 14133.png",
  groupP2:"../Group 14134.png",
  ellipse1:"Ellipse 725.png",
  ellipse2:"Ellipse 724.png",
  ellipse3:"Ellipse 702.svg",
  logoP:"../aerx_logo-removebg-preview 1 (Traced).svg",
  frameP1:"../Frame 14040.png",
  frameP2:"../Frame 14042.png",
  groupLp1:"../Rectangle 3526.png",
  groupLp2:"../Rectangle 3526.png",
  ellipse4:"../Ellipse 781.png",
  rectangleP1:"../Rectangle 3526.png",
  download:"../Download.png",
  upload:"../Upload.png",
  framep3:"../Frame 5556.png",
  plant:"../plant 1.png",

  groupLp3:"../Group 14262.png",
  dot:"Rectangle 3396.png",
  ticketStar:"Ticket Star.png",
  rectangleP2:"../Rectangle 3422.png",
  rectangleP3:"../Rectangle 3421.png",
  rectangleP4:"../Rectangle 3527.png",
  ellipse5:"../Ellipse 782.png",
  





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