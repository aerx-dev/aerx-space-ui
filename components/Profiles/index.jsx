import React from "react";
import ProfileSection from "./ProfileSection";
import { Box, Container, ChakraProvider } from "@chakra-ui/react";
import ImagesCarousel from "./ImagesCarousel";
import Notifications from "./Notification";
import NftValues from "./NftValues";
import Collapse from "./Collapse";
import FlowFeeds from "../Flow/index";
import Circle from "./Circle";
import ChatRoom from "../Chat/ChatRoom";
import Chat from "../Chat/index";
import Space from "../Space/index";
import Wallets from "../BranchWallet/tokenWallet";
import WalletsHead from "./WalletsHead";

import Pools from "../BranchWallet/Pools"
import Exchange from "../BranchWallet/Exchange";
import SendingTokens from "../BranchWallet/SendingTokens";
import AddLiquidity from "../BranchWallet/AddLiquidity";


import { useState } from "react";

// type Props = {
// }
// const [toggle,setToggle] = React.useState<boolean>(false)

function index() {
  const [isToggle, setToggle] = useState(false);
  const [doubleclicked, setDoubleClicked] = useState(false);
  const [isOpenWallet, setOpenWallet] = useState(false);



  const [isUpload, setUpload] = React.useState(false)

  const [isExchange, setExchange] = React.useState(false)

  const [isPool, setPool] = React.useState(false)

  const [isLiquidity, setLiquidity] = React.useState(false)


  const changeUpload = () => {
    setUpload((prevState) => !prevState);
  }
  const changeExchange = () => {
    setExchange((prevState) => !prevState);
  }
  const changePool = () => {
    setPool((prevState) => !prevState);
  }
  const changeLiquidity = () => {
    setLiquidity((prevState) => !prevState);
  }













  // change toggle state
  const toggleClick = () => {
    setToggle((prevState) => !prevState);
    // change toggle state
  };

  const doubleClick = (e) => {
    if (e.detail == 2) {
      setDoubleClicked((prevState) => !prevState);
    }
  };
  const removeCircle = (e) => {
    if (e.detail == 1) {
      setDoubleClicked((prevState) => !prevState);
    }
  };
  const openWallet = () => {
    setOpenWallet((prevState) => !prevState);
    console.log(isOpenWallet);
  };

  const wallet = <Wallets
    upload={changeUpload}
    exchange={changeExchange}
    pool={changePool}
    liquidity={changeLiquidity}
    changeAction={setToggle}
    toggle={isToggle}
    toggleWallet={openWallet}
  />
  return (
    <div id="profile" className=" bg-[black] flex">

      {isToggle && (
        <div>
          {!isOpenWallet ?

            <div>
              <ProfileSection />
              <ImagesCarousel doubleClick={doubleClick} />
              <WalletsHead wallet={openWallet} />
              <NftValues />
              <Notifications />
            </div> :
            <div>
              {wallet}
              {isExchange && <Exchange exchange={changeExchange} />}
              {isUpload && <SendingTokens upload={changeUpload} />}
              {isPool && <Pools pool={changePool} />}
              {isLiquidity && <AddLiquidity liquidity={changeLiquidity} />}
            </div>
          }
        </div>
      )}

      <Collapse toggle={toggleClick} Toggle={isToggle} />

      {/* <div className=" w-[39%] h-[94vh]  overflow-y-scroll poppins ">
        <FlowFeeds />
      </div> */}
      {/* <Circle circle={doubleclicked} removeCircle={removeCircle} />s */}
    </div>
  );
}

export default index;
