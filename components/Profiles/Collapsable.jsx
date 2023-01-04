import React, { useEffect, useState, useCallback } from "react";
import { Box, Image, Text, Center, Flex, Button } from "@chakra-ui/react";
import { useDispatch } from "../../store/store";
import LogOut from "./LogOut";

import { expandChat, expandFlow, expandCollections } from "../../store/slices/modulesSlices";

function collapsable(props) {
  const [hideProfile, setHideProfile] = useState(false);
  const [toggle, setToggle] = useState(true);
  const [isLogout, setLogout] = React.useState(false);

  const logOutUser = () => {
    setLogout((prevState) => !prevState);
  };
  const dispatch = useDispatch();

  let zIndex;
  isLogout ? (zIndex = 1) : (zIndex = 0);

  if (toggle) {
    setInterval(() => {
      setHideProfile(true);
      setToggle(true);
    }, 20000);
  }

  return (
    <Flex>
      <Flex
        h="100%"
        bgColor="#141414"
        position="absolute"
        w="48px"
        borderRight="1px solid #262626"
        flexDirection="column"
        zIndex={props.index}
        justifyContent="space-between"
        alignItems="center"
        display={hideProfile ? "none" : "flex"}
      >
        <Flex
          flexDirection="column"
          h="full"
          gap={2}
          alignItems="center"
          py={3}
        >
          <Image src="../resources/æ.png" mt={5} mb="auto" w="24px" h="17px" />
          <Box
            bgImage="resources/Squircle-side-dark.png"
            h="32px"
            w="32px"
            backdropBlur="10px"
            backdropFilter="10px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            onClick={props.wallet}
            cursor="pointer"
          >
            <Image w="20px" h="20px" src="resources/side-1.png" />
          </Box>
          <Box
            bgImage="resources/Squircle-side-light.png"
            h="32px"
            w="32px"
            backdropBlur="10px"
            backdropFilter="10px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            onClick={() => dispatch(expandFlow())}
            cursor="pointer"
          >
            <Image
              w="20px"
              h="20px"
              color="#717171"
              src="resources/side-2.png"
            />
          </Box>
          <Box
            bgImage="resources/Squircle-side-light.png"
            h="32px"
            w="32px"
            backdropBlur="10px"
            backdropFilter="10px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            onClick={() => dispatch(expandChat())}
            cursor="pointer"
          >
            <Image w="20px" h="20px" src="resources/side-3.png" />
          </Box>
          <Box
            bgImage="resources/Squircle-side-light.png"
            h="32px"
            w="32px"
            backdropBlur="10px"
            backdropFilter="10px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            onClick={() => dispatch(expandCollections())}
            cursor="pointer"
          >
            <Image w="20px" h="20px" src="resources/side-4.png" />
          </Box>
        </Flex>
        {/* <Flex>
          <div
            className=" color-[white]  rounded-[10.275px] cursor-pointer mx-auto  flex items-center bg-[#ffffff16] hover:bg-[#ffffff39] w-[24.66px] h-[77.13px] "
            onClick={props.toggle}
          >
            <Image src="resources/Frame 14290.png" w="8px" h="16px" ml="8px" />
          </div>
        </Flex> */}

        <Flex
          flexDirection="column"
          gap="14px"
          alignItems="center"
          borderTop="1.5px solid rgba(255, 255, 255, 0.05)"
          marginLeft="0"
          px={0.5}
          w="full"
          py={3}
          justifyContent="center"
        >
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Flex
              alignItems="center"
              justifyItems="center"
              position="relative"
              gap={3}
              bgColor=" #0A0A0A"
              w="34px"
              h="67px"
              p={1}
              borderRadius="12px"
              flexDirection="column"
            >
              <Box>
                <Image src="resources/moon-icon.png" />
              </Box>
              <Box>
                <Image src="resources/sun-icon.png" />
              </Box>
            </Flex>
          </Box>

          <Box display="flex" justifyContent="flex-end">
            <Image w="19px" h="20px" src={"resources/Setting.png"} />
          </Box>
          <Box cursor="pointer" onClick={logOutUser} display="flex">
            <Image src="resources/Logout-icon.png" />
          </Box>
        </Flex>
      </Flex>
      <Box
        color="#fff"
        justifyContent="center"
        display={hideProfile ? "none" : "flex"}
        flexDirection="column"
        px={2}
        onClick={() => props.toggle()}
        cursor="pointer"
        ml={hideProfile ? 0 : "2.7em"}
        h="full"
        position="fixed"
        zIndex={-1}
      >
        <Image w="16px" h="16px" src={"resources/open-profile.png"} />
      </Box>
      <Box
        color="#fff"
        justifyContent="center"
        display={hideProfile ? "flex" : "none"}
        flexDirection="column"
        px={2}
        onClick={() => props.toggle()}
        cursor="pointer"
        ml={hideProfile ? 0 : "2.7em"}
        h="full"
        onMouseOver={() => {
          setHideProfile(false);
          setToggle(false);
        }}
      >
        <Image w="16px" h="16px" src={"resources/open-profile.png"} />
      </Box>
      <LogOut zIndex={zIndex} show={isLogout} revert={logOutUser} />
    </Flex>
  );
}

export default collapsable;
