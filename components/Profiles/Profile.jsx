import React, { useEffect } from "react";
import {
  Box,
  Image,
  Text,
  Heading,
  Flex,
  Button,
  Center,
  useColorModeValue,
  useMediaQuery,
  Grid,
  GridItem,
  Wrap,
  WrapItem,
  Avatar,
} from "@chakra-ui/react";
import { nearStore } from "../../store/near";
import { MinusIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "../../store/store";
import { getUserState, setImages } from "../../store/slices/imageSlices";
import LogOut from "./LogOut";
import CircleList from "./CircleList";
import Circle from "./Circle";
import { expandChat, expandFlow } from "../../store/slices/modulesSlices";
import dynamic from "next/dynamic";

const ThreeDModel = dynamic(() => import("../3DModel"), { ssr: false });

function Profile(props) {
  const nearState = nearStore((state) => state);
  const dispatch = useDispatch();
  const { ellipse4, ellipse5, ellipse3, logoP, frameP1, frameP2 } =
    useSelector(getUserState);
  const [isLogout, setLogout] = React.useState(false);
  const logOutUser = () => {
    setLogout((prevState) => !prevState);
  };
  const [isLargerThan656] = useMediaQuery("(max-height: 656px)");
  const bgGradient = useColorModeValue(
    // "linear(#edf2f700, #edf2f720 15%, gray.100 90%)",
    "linear(180deg, rgba(25, 25, 25, 0) 0%,, #191919 100%)"
  );

  let zIndex;
  let backdrop;
  isLogout ? (zIndex = 1) : (zIndex = -8);
  isLogout ? (backdrop = 1) : (backdrop = -1);
  const [circ, setCirc] = React.useState(false);
  const remCirc = () => {
    setCirc((prevState) => !prevState);
    console.log("done", circ);
  };
  let disabled;
  let opacity;

  props.shadow ? (disabled = true) : (disabled = false);
  //   props.shadow ? opacity=`` : opacity="none"
  const mouseDown = (e) => {
    return <Circle />;
  };
  if (nearState.profile.profileImg.includes(".glb")) {
    useEffect(() => {
      const initBabylon = async () => {
        const BabylonViewer = await import("babylonjs-viewer");
        const babylon = document.getElementById("babylon-element-profile");
        let viewer = new BabylonViewer.DefaultViewer(babylon, {
          extends: "none",
          templates: {
            main: {
              html: "<loading-screen id='babylon-loading-screen' style='height: 100%;width: 100%; position: absolute;left: 0;z-index: 100;opacity: 1;pointer-events: none;display: flex;justify-content: center;align-items: center;-webkit-transition: opacity 1s ease;-moz-transition: opacity 1s ease;transition: opacity 1s ease;'></loading-screen>  <canvas id='my-babylon-canvas' style='height: 100%;width: 100%;flex: 1;touch-action: none;' class='babylonjs-canvas' touch-action='none'></canvas>",
              params: {
                ["no-escape"]: true,
                ["babylon-font"]: `https://viewer.babylonjs.com/babylon.woff`,
              },
            },
            ["loadingScreen"]: {
              html: "<img id='loading-image' style='height: 2rem;width: 2rem;' src='{{loadingImage}}' >",
              params: {
                ["backgroundColor"]: "#0000004d",
                ["loadingImage"]:
                  "https://cdn.discordapp.com/attachments/922880841238065176/1024013739395141682/Loader.png",
              },
            },
          },
          scene: {
            clearColor: {
              r: 0,
              g: 0,
              b: 0,
              a: 0,
            },
          },
          engine: {
            antialiasing: true,
            hdEnabled: true,
            adaptiveQuality: true,
          },
          optimizer: true,
          model: {
            url: `${nearState.profile.profileImg}`,
            scaling: {
              x: 0.9,
              y: 0.5,
              z: 0.8,
            },
            position: {
              x: 0,
              y: -1,
              z: 1,
            },
          },
        });
      };
      initBabylon().then(() => {});
    }, []);
  }

  return circ ? (
    <CircleList remove={remCirc} />
  ) : (
    <Grid
      templateRows={isLargerThan656 ? "240px 1fr" :  "1fr"}
      // templateRows=" repeat( auto-fit, minmax(100%, 100vh) )"
      bg="#1F1F1F"
      w="320px"
      height="100vh"
      overflowX="hidden"
      overflowY="hidden"
      style={{ padding: "0!important" }}
    >
      <GridItem
        bgColor={
          !nearState.profile.profileImg.includes(".glb")
            ? "#191919"
            : "#191919"
        }
        bgImage={
          !nearState.profile.profileImg.includes(".glb")
            ? `url('${nearState.profile.profileImg}')`
            : "none"
        }
        // bgImage="https://cdn.dribbble.com/users/383277/screenshots/18055765/media/e5fc935b60035305099554810357012a.png?compress=1&resize=400x300"
        bgRepeat="no-repeat"
        bgSize="cover"
        bgPos="center"
        w="inherit"
      >
        <Flex
          w="320px"
          width="100%"
          // onDoubleClick={props.circleClick}
          gap="17%"
          bgGradient={
            !nearState.profile.profileImg.includes(".glb") ? bgGradient : "none"
          }
          h="100%"
          // justifycontent="space-evenly"
        >
          <Flex flexDirection="column" w="full">
            <Flex justifyContent="space-between" mb="auto" marginInline="15px">
              <Flex
                flexDirection="column"
                gap="10.96px"
                flexBasis="42px"
                mt="21.92px"
                cursor="pointer"
              >
                <Box
                  color="#6054F0"
                  width="27.4px"
                  height="27.4px"
                  border="2px solid"
                  bgColor="#FFFFFF"
                  borderColor="#FFFFFF"
                  borderRadius="6.85px"
                  onClick={() => props.toggle()}
                >
                  <Image
                    src="../resources/Frame 14290.svg"
                    w="18px"
                    py="5px"
                    px="auto"
                    pl="4px"
                  />
                </Box>
              </Flex>

              <Flex
                flexDirection="column"
                alignItems="center"
                flexBasis="100px"
                mt="21.92px"
                // gap="65%"
                justifyContent="space-between"
                // zIndex={6}
                // onMouseLeave={props.leaveClick}
              >
                <Image width="42.47px" height="15.755px" src={logoP} />
              </Flex>
              <Flex flexDirection="column" gap="10.96px" mt="21.92px">
                {/* first */}
                <Box cursor="pointer" onClick={() => dispatch(expandFlow())}>
                  <Image src="../resources/Group 14948.png" w="42px" />
                </Box>
                {/* second */}
                <Box cursor={"pointer"} onClick={() => dispatch(expandChat())}>
                  <Image src="../resources/Group 14949.png" w="42px" />
                </Box>
                {/* third*/}
                <Box cursor={"pointer"}>
                  <Image src="../resources/Group 14950.png" w="42px"></Image>
                </Box>
              </Flex>
            </Flex>

            <Box
              h="auto"
              mb={4}
              // zIndex={6}
            >
              <Heading
                fontSize="21.92px"
                color="#FFFFFF"
                fontFamily="Poppins"
                fontWeight="700"
                fontStyle="normal"
                lineHeight="100%"
                textAlign="center"
                // letterSpacing="-0.02em"
                // mt="21px"
                justifyContent="center"
                textTransform="capitalize"
                // zIndex="-1"
              >
                {nearState.profile.fullName}
              </Heading>

              <Flex
                alignItems="center"
                justifyContent="center"
                gap="16px"
                // mt="55px"
              >
                <Text
                  fontSize="12.33px"
                  fontFamily="Poppins"
                  fontStyle="italic"
                  color="#FFFFFFB2"
                  fontWeight="400"
                  letterSpacing="-0.02em"
                  marginTop="5.48px"
                  mb="11.645px"
                  mt="12px"
                  lineHeight=" 100%"
                  /* identical to box height, or 18px */
                >
                  {nearState.profile.username}
                </Text>

                <Flex
                // boxShadow = "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
                // boxShadow = "rgba(0, 0, 0, 0.25) 30px 154px 155px,  10px -212px 130px, rgba(0, 0, 0, 0.12) 10px 24px 6px, rgba(0, 0, 0, 0.17) 12px 12px 13px, rgba(0, 0, 0, 0.09) 10px -13px 65px"
                >
                  <Image src={ellipse3} marginRight={2} w="10.96px" />
                  <Text
                    color="#FFFFFF80"
                    fontFamily="Poppins"
                    fontWeight="500"
                    fontSize="9.59px"
                    lineHeight="100%"
                    /* identical to box height, or 14px */

                    letterSpacing="-0.02em"
                  >
                    Aura: 2k
                  </Text>
                </Flex>
                <Box
                  // bgGradient="linear(to-b, #1f1f1f 0%, #191919 100%)"
                  w="261.56px"
                  position="absolute"
                  top="295px"
                  h="34px"
                >
                  .
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Flex>
      </GridItem>
      <GridItem bgColor="#191919">
        <Box
          px="10px"
          bgColor=" #1F1F1F"
          w="320px"
          height="165px"
          marginLeft="0"
          borderTopRadius="34.25px"
        >
          <Center borderRadius="50px 50px 0px 0px">
            <Button
              onClick={remCirc}
              cursor="pointer"
              background="none"
              w="21.92px"
              bgColor="rgba(255, 255, 255, 0.3);"
              height="12px"
              mt="2"
              px="0"
              flexDirection="column"
              gap="2px"
              backgroundColor="#1F1F1F"
            >
              <MinusIcon
                w="21.92px"
                bgColor="rgba(255, 255, 255, 0.3);"
                height="2px"
              />
              <MinusIcon
                w="21.92px"
                bgColor="rgba(255, 255, 255, 0.3);"
                height="2px"
              />
            </Button>
          </Center>
          <Flex flexDirection="column">
            <Heading
              letterSpacing="-0.02em"
              fontWeight="500"
              fontSize="16px"
              lineHeight="100%"
              textTransform="capitalize"
              color="rgba(255, 255, 255, 0.3)"
              fontFamily="Poppins"
              mt="10px"
            >
              Circles
            </Heading>{" "}
            <Wrap my={4} overflowX="hidden" w="350px" ml={-2}>
              <WrapItem
                flexWrap="nowrap"
                display="flex"
                flexDirection="column"
                alignItems="center"
                flex="1"
              >
                <Avatar
                  mb={1.5}
                  name="Dan Abrahmov"
                  src="https://bit.ly/dan-abramov"
                />

                <Text
                  fontSize="10.96px"
                  fontFamily="Poppins"
                  h="32.88px"
                  fontWeight="400"
                  color="#ffffff"
                >
                  Work
                </Text>
              </WrapItem>
              <WrapItem
                flexWrap="nowrap"
                display="flex"
                flexDirection="column"
                alignItems="center"
                flex="1"
              >
                <Avatar
                  mb={1.5}
                  name="Dan Abrahmov"
                  src="https://bit.ly/dan-abramov"
                />

                <Text
                  fontSize="10.96px"
                  fontFamily="Poppins"
                  h="32.88px"
                  fontWeight="400"
                  color="#ffffff"
                >
                  Family
                </Text>
              </WrapItem>
              <WrapItem
                flexWrap="nowrap"
                display="flex"
                flexDirection="column"
                alignItems="center"
                flex="1"
              >
                <Avatar
                  mb={1.5}
                  name="Dan Abrahmov"
                  src="https://bit.ly/dan-abramov"
                />

                <Text
                  fontSize="10.96px"
                  fontFamily="Poppins"
                  h="32.88px"
                  fontWeight="400"
                  color="#ffffff"
                >
                  Friends
                </Text>
              </WrapItem>
              <WrapItem
                flexWrap="nowrap"
                display="flex"
                flexDirection="column"
                alignItems="center"
                flex="1"
              >
                <Avatar
                  mb={1.5}
                  name="Dan Abrahmov"
                  src="https://bit.ly/dan-abramov"
                />

                <Text
                  fontSize="10.96px"
                  fontFamily="Poppins"
                  h="32.88px"
                  fontWeight="400"
                  color="#ffffff"
                >
                  Followers
                </Text>
              </WrapItem>
              <WrapItem
                flexWrap="nowrap"
                display="flex"
                flexDirection="column"
                alignItems="center"
                flex="1"
              >
                <Avatar
                  mb={1.5}
                  name="Dan Abrahmov"
                  src="https://bit.ly/dan-abramov"
                />

                <Text
                  fontSize="10.96px"
                  fontFamily="Poppins"
                  h="32.88px"
                  fontWeight="400"
                  color="#ffffff"
                >
                  Following
                </Text>
              </WrapItem>
            </Wrap>
          </Flex>
        </Box>
        <Box bgColor="rgb(36, 36, 36)">
          <Box bgColor="#1F1F1F">
            <Box
              px="10px"
              bgColor="#242424"
              w="320px"
              marginLeft="0"
              borderTopRadius="34.25px"
              marginTop="-1.5rem"
            >
              <Center borderRadius="50px 50px 0px 0px">
                <Button
                  onClick={props.wallet}
                  cursor="pointer"
                  background="none"
                  w="21.92px"
                  bgColor="rgba(255, 255, 255, 0.3);"
                  height="12px"
                  mt="2"
                  px="0"
                  flexDirection="column"
                  gap="2px"
                  backgroundColor="#242424"
                >
                  <MinusIcon
                    w="21.92px"
                    bgColor="rgba(255, 255, 255, 0.3);"
                    height="2px"
                  />
                  <MinusIcon
                    w="21.92px"
                    bgColor="rgba(255, 255, 255, 0.3);"
                    height="2px"
                  />
                </Button>
              </Center>
              <Box>
                <Heading
                  letterSpacing="-0.02em"
                  fontWeight="500"
                  fontSize="16px"
                  lineHeight="100%"
                  textTransform="capitalize"
                  fontFamily="Poppins"
                  color="rgba(255, 255, 255, 0.3)"
                  mt="10px"
                >
                  Wallet
                </Heading>
                <Flex my={2}>
                  <Text
                    flexBasis="200px"
                    fontSize="16.44px"
                    fontWeight="700"
                    color="#ffffff"
                    fontFamily="Poppins"
                  >
                    {" "}
                    {nearState.aexBalance} AEX
                  </Text>
                  <Flex>
                    <div
                      className="cursor-pointer  hover:bg-[#ffffff39]
    background-#1F1F1F
    w-[16.44px]
    h-[16.44px]
    mr-[10.275px]

   "
                    >
                      <Image
                        src={"resources/Download.png"}
                        alt="download"
                        w="16.44px"
                        h="16.44px"
                      />
                    </div>
                    <div
                      className="cursor-pointer  hover:bg-[#ffffff39]
    background-#1F1F1F
    w-[16.44px]
    h-[16.44px]
    mr-[10.275px]

   "
                      onClick={props.wallet}
                    >
                      <Image
                        src={"resources/Upload.png"}
                        alt="upload"
                        w="16.44px"
                        h="16.44px"
                        mr="10.275px"
                      />
                    </div>
                    <div
                      className="cursor-pointer  hover:bg-[#ffffff39]
    background-#1F1F1F
    w-[16.44px]
    h-[16.44px]
    mr-[10.275px]

   "
                      onClick={props.wallet}
                    >
                      <Image
                        src={"resources/Frame 5556.png"}
                        alt="upload"
                        w="16.44px"
                        h="16.44px"
                        mr="10.275px"
                      />
                    </div>
                    <div
                      className="cursor-pointer  hover:bg-[#ffffff39]
    background-#1F1F1F
    w-[16.44px]
    h-[16.44px]
    mr-[10.275px]

   "
                      onClick={props.wallet}
                    >
                      <Image
                        src={"resources/plant 1.png"}
                        alt="upload"
                        w="16.44px"
                        h="16.44px"
                        mr="10.275px"
                      />
                    </div>
                  </Flex>
                </Flex>
                <Flex gap={3} w="420px" h="120px">
                  <Box h="120px" w="120px" border="none">
                    <Box
                      my={0}
                      h="100%"
                      w="100%"
                      borderWidth="1px"
                      borderRadius="15px"
                      bgImage="https://cdn.dribbble.com/users/383277/screenshots/18055765/media/e5fc935b60035305099554810357012a.png?compress=1&resize=400x300"
                      bgRepeat="no-repeat"
                      bgSize="cover"
                      bgPos="center"
                      border="none"
                    >
                      <Box
                        bgColor="rgba(0, 0, 0, 0.5)"
                        h="100%"
                        borderRadius="15px"
                      >
                        <Flex
                          px={2}
                          py={2}
                          h="100%"
                          flexDirection="column"
                          justifyContent="center"
                          alignItems="center"
                        >
                          <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            px={3}
                            my={1}
                          >
                            <Box mr={1} alignSelf="center">
                              <Image
                                src={"resources/Ticket Star.png"}
                                alt="star"
                              />
                            </Box>
                            <Text
                              h="14px"
                              w="34px"
                              fontSize="14px"
                              fontWeight="500"
                              fontStyle="normal"
                              lineHeight="100%"
                              mx={1}
                              alignSelf="center"
                              color="#fff"
                            >
                              Art
                            </Text>
                          </Box>
                          <Box>
                            <Text
                              fontSize="16px"
                              fontWeight="900"
                              fontStyle="normal"
                              lineHeight="18px"
                              letterSpacing="-2"
                              my={3}
                              color="#fff"
                              alignSelf="center"
                            >
                              NFT Name
                            </Text>
                            <Text
                              fontSize="16px"
                              fontWeight="400"
                              fontStyle="normal"
                              lineHeight="100%"
                              letterSpacing="-0.02em"
                              textAlign="center"
                              color="#fff"
                            >
                              24,6 aex
                            </Text>
                          </Box>
                        </Flex>
                      </Box>
                    </Box>
                  </Box>
                  <Box h="120px" w="120px" border="none">
                    <Box
                      my={0}
                      h="100%"
                      w="100%"
                      borderWidth="1px"
                      borderRadius="15px"
                      bgImage="https://cdn.dribbble.com/users/383277/screenshots/18055765/media/e5fc935b60035305099554810357012a.png?compress=1&resize=400x300"
                      bgRepeat="no-repeat"
                      bgSize="cover"
                      bgPos="center"
                      border="none"
                    >
                      <Box
                        bgColor="rgba(0, 0, 0, 0.5)"
                        h="100%"
                        borderRadius="15px"
                      >
                        <Flex
                          px={2}
                          py={2}
                          h="100%"
                          flexDirection="column"
                          justifyContent="center"
                          alignItems="center"
                        >
                          <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            px={3}
                            my={1}
                          >
                            <Box mr={1} alignSelf="center">
                              <Image src={"resources/Fill 1.png"} alt="Fill" />
                            </Box>
                            <Text
                              h="14px"
                              w="34px"
                              fontSize="14px"
                              fontWeight="500"
                              fontStyle="normal"
                              lineHeight="100%"
                              mx={1}
                              alignSelf="center"
                              color="#fff"
                            >
                              Art
                            </Text>
                          </Box>
                          <Box>
                            <Text
                              fontSize="16px"
                              fontWeight="900"
                              fontStyle="normal"
                              lineHeight="18px"
                              letterSpacing="-2"
                              my={3}
                              alignSelf="center"
                              color="#fff"
                            >
                              NFT Name
                            </Text>
                            <Text
                              fontSize="16px"
                              fontWeight="400"
                              fontStyle="normal"
                              lineHeight="100%"
                              letterSpacing="-0.02em"
                              textAlign="center"
                              color="#fff"
                            >
                              24,6 aex
                            </Text>
                          </Box>
                        </Flex>
                      </Box>
                    </Box>
                  </Box>
                  <Box h="120px" w="120px" border="none">
                    <Box
                      my={0}
                      h="100%"
                      w="100%"
                      borderWidth="1px"
                      borderRadius="15px"
                      bgImage="https://cdn.dribbble.com/users/383277/screenshots/18055765/media/e5fc935b60035305099554810357012a.png?compress=1&resize=400x300"
                      bgRepeat="no-repeat"
                      bgSize="cover"
                      bgPos="center"
                      border="none"
                    >
                      <Box
                        bgColor="rgba(0, 0, 0, 0.5)"
                        h="100%"
                        borderRadius="15px"
                      >
                        <Flex
                          px={2}
                          py={2}
                          h="100%"
                          flexDirection="column"
                          justifyContent="center"
                          alignItems="center"
                        >
                          <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            px={3}
                            my={1}
                          >
                            <Box mr={1} alignSelf="center">
                              <Image
                                src={"resources/Ticket Star.png"}
                                alt="Star"
                              />
                            </Box>
                            <Text
                              h="14px"
                              w="34px"
                              fontSize="14px"
                              fontWeight="500"
                              fontStyle="normal"
                              lineHeight="100%"
                              mx={1}
                              alignSelf="center"
                              color="#fff"
                            >
                              Art
                            </Text>
                          </Box>
                          <Box>
                            <Text
                              fontSize="16px"
                              fontWeight="900"
                              fontStyle="normal"
                              lineHeight="18px"
                              letterSpacing="-2"
                              my={3}
                              alignSelf="center"
                              color="#fff"
                            >
                              NFT Name
                            </Text>
                            <Text
                              fontSize="16px"
                              fontWeight="400"
                              fontStyle="normal"
                              lineHeight="100%"
                              letterSpacing="-0.02em"
                              textAlign="center"
                              color="#fff"
                            >
                              24,6 aex
                            </Text>
                          </Box>
                        </Flex>
                      </Box>
                    </Box>
                  </Box>
                </Flex>
              </Box>
            </Box>
          </Box>
          <Box>
            <Box
              // position="fixed"
              bgColor="#303030;"
              width="320px"
              marginLeft="0"
              borderTopRadius="34.25px"
              h="60px"
              // mt="-3rem"
              // bottom="0"
              // top="92%"
            >
              <Center
                display="flex"
                marginTop="8.22px"
                // mb="5px"
                gap="21.92px"
                ml="28px"
                pt="4px"
                h="full"
              >
                <Box
                  border="1px"
                  borderColor="rgba(255, 255, 255, 0.1);"
                  borderRadius="100%"
                  padding="3.8px"
                >
                  <Flex
                    alignItems="center"
                    justifyItems="center"
                    position="relative"
                  >
                    <Text
                      color="#ffffff"
                      marginTop={-4}
                      marginLeft={3}
                      position="absolute"
                      backgroundColor="red"
                      px="3.5px"
                      borderRadius="100%"
                      fontFamily="Poppins"
                      fontWeight="500"
                      fontSize="9.59px"
                    >
                      3
                    </Text>
                    <Image
                      src={"resources/Notification.png"}
                      w="19.52895px"
                      h="21.26895px"
                    />
                  </Flex>
                </Box>
                <Box
                  border="1px"
                  borderColor="rgba(255, 255, 255, 0.1);"
                  borderRadius="100%"
                  padding="5px"
                  cursor="pointer"
                  onClick={logOutUser}
                >
                  <Image
                    src={nearState.profile.profileImg}
                    w="21.92px"
                    h="21.92px"
                    borderRadius="100%"
                  />
                </Box>
                <Box
                  border="1px"
                  borderColor="rgba(255, 255, 255, 0.1);"
                  marginRight="32px"
                  borderRadius="100%"
                  padding="5px"
                >
                  <Image src={"resources/Setting.png"} w="17.35105px" />
                </Box>
              </Center>
            </Box>
          </Box>
        </Box>
      </GridItem>
    </Grid>
  );
}

export default Profile;
