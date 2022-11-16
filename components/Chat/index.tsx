import Image from "next/image"
import React, { useEffect, useState } from "react"
import { EMessageType } from "../../enums/EMessageType"
import { nearStore } from "../../store/near"
import {
  selectMessages,
  setDirectMessages,
} from "../../store/slices/messagesSlice"
import { selectModules } from "../../store/slices/modulesSlices"
import { setActiveReceiver } from "../../store/slices/receiverSlice"
import { useDispatch, useSelector } from "../../store/store"
import { Message } from "../../types/Message"
import { Feed, Post } from "../../types/Post"
import SearchInput from "../SearchInput"
import ChatRoom from "./ChatRoom"
import { Box, Flex, Text } from "@chakra-ui/react"
import Big from "big.js"
import { SmoothCorners } from "react-smooth-corners"

export interface IMessageItem {
  accountId: string
  avatar: string
  name: string
  status: "online" | "offline" | "isTyping"
  time: string
  message: string
  isActive?: boolean
  onClick?: () => void
  onClickCapture?: () => void
  onPointerOver?: () => void
  onPointerOverCapture?: () => void
}

const ChatHeader: React.FC<{ onChange: (searchValue: string) => void }> = ({
  onChange,
}) => {
  const [isPersonalActive, setIsPersonalActive] = useState<boolean>(true)
  return (
    <div className="">
      <div className="flex justify-between items-center">
        <label className="font-bold text-white">Chats</label>
        <div className="flex items-center ml-2 gap-2 text-[12px]">
          <div
            onClick={() => setIsPersonalActive(true)}
            className={`${
              isPersonalActive
                ? "bg-primary  text-white px-4 "
                : " text-red-200 "
            }   p-2 rounded-md cursor-pointer`}
          >
            <label
              className={`cursor-pointer ${
                isPersonalActive ? " text-white " : "text-gray-400"
              }`}
            >
              Personal
            </label>
          </div>
          <div
            onClick={() => setIsPersonalActive(false)}
            className={`${
              !isPersonalActive
                ? "bg-primary text-white px-4 "
                : "text-gray-200"
            } p-2 rounded-md cursor-pointer`}
          >
            <label
              className={`cursor-pointer ${
                !isPersonalActive ? " text-white " : "text-gray-400"
              }`}
            >
              Work
            </label>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <SearchInput onChange={onChange} />
      </div>
    </div>
  )
}
const MessageItem: React.FC<IMessageItem> = ({
  avatar,
  name,
  time,
  status,
  message,
  isActive,
  onClick,
  onClickCapture,
  onPointerOver,
  onPointerOverCapture,
}) => {
  useEffect(() => {
    const initBabylon = async () => {
      const BabylonViewer = await import("babylonjs-viewer")
      const babylon = document.getElementById("babylon-element-chat-index")!
      new BabylonViewer.DefaultViewer(babylon, {
        extends: "none",
        templates: {
          main: {
            html: "<loading-screen id='babylon-loading-screen' style='height: 100%;width: 100%; position: absolute;left: 0;opacity: 1;pointer-events: none;display: flex;justify-content: center;align-items: center;-webkit-transition: opacity 1s ease;-moz-transition: opacity 1s ease;transition: opacity 1s ease;'></loading-screen>  <canvas id='my-babylon-canvas' style='height: 100%;width: 100%;flex: 1;touch-action: none;' class='babylonjs-canvas' touch-action='none'></canvas>",
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
          url: `${avatar}`,
          //   scaling: {
          //     x: 3.5,
          //     y: 3,
          //     z: 3,
          //   },
          //   position: {
          //     x: 0,
          //     y: -2,
          //     z: 1
          //   }
        },
      })
    }
    initBabylon().then(() => {})
  }, [])
  return (
    <div
      onClickCapture={onClickCapture}
      onClick={onClick}
      onPointerOver={onPointerOver}
      onPointerOverCapture={onPointerOverCapture}
      className={`mt-2 mr-1 ${
        isActive ? "bg-[#2b2b2b] " : ""
      } pl-2.5 px-2.5 py-3 mb-1 cursor-pointer overflow-x-hidden hover:bg-[#2b2b2b] transition duration-150 ease-in-out rounded-[10px]`}
    >
      <div className="flex items-center gap-1.5  ">
        <div className="w-[25%] ">
          {!avatar.includes(".glb") && (
            <Image
              src={avatar}
              width={36}
              height={36}
              alt="Avatar"
              className="rounded-full"
            />
          )}
          {avatar.includes(".glb") && (
            <Box
              width="33px"
              height="33px"
              // borderRadius="13.7px"
              className="rounded-full "
              borderColor="white"
              border="1px solid"
            >
              {/* <div
                id="babylon-element-chat-index"
                // style={{ width: "100%", height: "100%", margin: "auto" }}
              ></div> */}
            </Box>
          )}
        </div>
        <div className="w-full cursor-pointer ">
          <div className="flex justify-between">
            <label className="text-white cursor-pointer text-bold text-[13px]">
              {name.substring(0, 18)}
              {name.length > 18 && "..."}
            </label>
            {/* {status !== 'isTyping' &&
                            <label className='text-white opacity-[30%] text-[13px]'>{time}</label>
                        } */}
          </div>
          <div className="text-[11px] w-fit">
            {status === "isTyping" && (
              <label className="text-primary">Typing...</label>
            )}
            {status !== "isTyping" && (
              <span className="text-white w-full cursor-pointer opacity-[30%] mt-1">
                {message.substring(0, 20)} ...
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

const Chat: React.FC = () => {
  const dispatch = useDispatch()
  const [chats, setChats] = useState<Array<IMessageItem>>([])
  const [chatsClone, setChatsClone] = useState<Array<IMessageItem>>([])
  const [isSearched, setIsSearched] = useState<boolean>(false)
  const [activeMessage, setActiveMessage] = useState<number>(0)
  const { chat, sidebar } = useSelector(selectModules)
  const nearState: any = nearStore((state) => state)
  const [profilePosts, setProfilePosts] = useState<any>([])
  const [profiles, setProfiles] = useState<Array<Feed>>([])
  const [prevChats, setPrevChats] = useState<string>()
  const [chatReceiver, setChatReceiver] = useState<string>("")
  const { messages } = useSelector(selectMessages)

  useEffect(() => {
    if (nearState.pnftContract) {
      fetchUsers()
    }
  }, [nearState.pnftContract])

  const fetchUsers = async () => {
    const posts = await nearState.pnftContract.get_all_posts({
      user_id: nearState.accountId,
    })
    const profiles = posts.filter((post: any) =>
      post.metadata.title.includes("AERX ProfileNFT for")
    )
    const profilesWithoutSelf = profiles.filter(
      (profile: any) => profile.owner_id !== nearState.accountId
    )
    setProfilePosts(profilesWithoutSelf)
  }

  useEffect(() => {
    if (profilePosts?.length > 0) {
      extractProfiles()
    }
  }, [profilePosts])

  const extractProfiles = async () => {
    let feeds: Array<Feed> = []
    profilePosts.map(async (feed: Feed, index: number) => {
      try {
        const profile = await nearState.pnftContract?.profile_by_id({
          user_id: feed.owner_id,
          user_to_find_id: feed.owner_id,
        })
        let newFeed = { ...feed }
        newFeed.profile = profile
        feeds.push(newFeed)
      } catch (e) {
        console.log("ERROR in usefetchpost")
      }
      if (index + 1 == profilePosts.length) {
        setProfiles(feeds)
      }
    })
  }

  useEffect(() => {
    formMessageItem()
  }, [profiles])

  const formMessageItem = () => {
    const messageItems: Array<IMessageItem> = []
    profiles.map((profile: Feed) => {
      const messageItem: IMessageItem = {
        accountId: profile.owner_id,
        avatar: profile?.metadata?.media || "/assets/images/avatar-1.svg",
        name:
          profile?.profile?.metadata?.extra || profile?.profile?.owner_id || "",
        status: "online",
        time: "12:00",
        message:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
      }
      messageItems.push(messageItem)
    })
    setChats(messageItems)
    setChatsClone(messageItems)
  }

  const AWS = require("aws-sdk")
  const filebase = new AWS.S3({
    endpoint: "https://s3.filebase.com",
    signatureVersion: "v4",
    accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
  })
  const getChat = (caller: string, receiver: string) => {
    const params = {
      Key: `aerx-chat between ${caller},${receiver}`,
      Bucket: "aerx-chats",
    }
    try {
      return filebase.getObject(params, (err: any, data: any) => {
        if (err) {
          const param = {
            Key: `aerx-chat between ${receiver},${caller}`,
            Bucket: "aerx-chats",
          }
          return filebase.getObject(param, (err: any, data: any) => {
            if (err) {
              console.log("Chat does not exist")
            } else {
              const prevChat = Buffer.from(data.Body, "utf8").toString()
              nearState.setPrevChats(prevChat)
              setPrevChats(prevChat)
              nearState.setPrevChats(prevChat)
              return prevChat
            }
          })
        } else {
          const prevChat = Buffer.from(data.Body, "utf8").toString()
          nearState.setPrevChats(prevChat)
          setPrevChats(prevChat)
          return prevChat
        }
      })
    } catch (err) {
      console.error("try caught error: ", err)
    }
  }
  const getRequest = async (caller: any, receiver: string, type: string) => {
    const params = {
      Key: `aerx-${type} between ${caller},${receiver}`,
      Bucket: "aerx-requests",
    }
    try {
      await filebase.getObject(
        params,
        async (
          err: any,
          data: {
            Body:
              | WithImplicitCoercion<string>
              | { [Symbol.toPrimitive](hint: "string"): string }
          }
        ) => {
          if (err) {
            const param = {
              Key: `aerx-${type} between ${receiver},${caller}`,
              Bucket: "aerx-requests",
            }
            await filebase.getObject(
              param,
              (
                err: any,
                data: {
                  Body:
                    | WithImplicitCoercion<string>
                    | { [Symbol.toPrimitive](hint: "string"): string }
                }
              ) => {
                if (err) {
                  console.log("Request does not exist")
                } else {
                  const prevRequest = Buffer.from(data.Body, "utf8").toString()
                  console.log("prev c: ", prevRequest)
                  const requestArray = prevRequest.split("##aerx-request##")
                  let allRequests = []
                  for (let i = 0; i < requestArray.length; i++) {
                    const requestArrayFormatted = requestArray[i].replaceAll(
                      "\n",
                      " "
                    )
                    const json = JSON.parse(requestArrayFormatted)
                    const amountBigN = new Big(json[3] || 0)
                    const formattedAmountBigN = amountBigN
                      .div("10e23")
                      .toFixed(3)
                    console.log(json)
                    console.log("time: ", json[0])
                    console.log("sender: ", json[1])
                    console.log("message: ", json[2])
                    console.log("amount: ", formattedAmountBigN)
                    const _request = {
                      id: Math.random().toString(36).substr(2, 9),
                      sender: {
                        id: json[1],
                        name: json[1],
                      },
                      type: EMessageType.TEXT,
                      content: `Requested ${formattedAmountBigN} AEX with memo: ${json[2]}`,
                      //   amount: json[3],
                      createdAt: json[0],
                    }
                    allRequests.push(_request)
                  }
                  messages.forEach((msg) => {
                    allRequests.push(msg)
                  })
                  dispatch(setDirectMessages(allRequests))
                }
              }
            )
          } else {
            const prevRequest = Buffer.from(data.Body, "utf8").toString()
            console.log("prev c: ", prevRequest)
            const requestArray = prevRequest.split("##aerx-request##")
            let allRequests = []
            for (let i = 0; i < requestArray.length; i++) {
              const requestArrayFormatted = requestArray[i].replaceAll(
                "\n",
                " "
              )
              const json = JSON.parse(requestArrayFormatted)
              const amountBigN = new Big(json[3] || 0)
              const formattedAmountBigN = amountBigN.div("10e23").toFixed(3)
              console.log(json)
              console.log("time: ", json[0])
              console.log("sender: ", json[1])
              console.log("message: ", json[2])
              console.log("amount: ", formattedAmountBigN)
              const _request = {
                id: Math.random().toString(36).substr(2, 9),
                sender: {
                  id: json[1],
                  name: json[1],
                },
                type: EMessageType.TEXT,
                content: `Requested ${formattedAmountBigN} AEX with memo: ${json[2]}`,
                //   amount: json[3],
                createdAt: json[0],
              }
              allRequests.push(_request)
            }
            messages.forEach((msg) => {
              allRequests.push(msg)
            })
            dispatch(setDirectMessages(allRequests))
          }
        }
      )
    } catch (err) {
      console.error("try caught error: ", err)
    }
  }
  //Todo: Move aerx chat keycode to env
  const handleSetActiveMessage = async (index: number) => {
    const params = {
      Key: `aerx-chat between ${nearState.accountId},${chats[index].accountId}`,
      Bucket: "aerx-chats",
    }
    try {
      await filebase.getObject(params, async (err: any, data: any) => {
        if (err) {
          const param = {
            Key: `aerx-chat between ${chats[index].accountId},${nearState.accountId}`,
            Bucket: "aerx-chats",
          }
          await filebase.getObject(param, (err: any, data: any) => {
            if (err) {
              console.log("Chat does not exist")
            } else {
              const prevC = Buffer.from(data.Body, "utf8").toString()
              console.log("prev c: ", prevC)
              const chatArray = prevC.split("##aerx-chat##")
              let messages: Array<Message> = []
              for (let i = 0; i < chatArray.length; i++) {
                const chatArrayFormatted = chatArray[i].replaceAll("\n", " ")
                const json = JSON.parse(chatArrayFormatted)
                console.log(json)
                console.log("time: ", json[0])
                console.log("sender: ", json[1])
                console.log("message: ", json[2])
                const message: Message = {
                  id: Math.random().toString(36).substr(2, 9),
                  sender: {
                    id: json[1],
                    name: json[1],
                  },
                  type: EMessageType.TEXT,
                  content: json[2],
                  createdAt: json[0],
                }
                messages.push(message)
              }
              dispatch(setDirectMessages(messages.reverse()))
            }
          })
        } else {
          const prevC = Buffer.from(data.Body, "utf8").toString()
          console.log("prev c: ", prevC)
          const chatArray = prevC.split("##aerx-chat##")
          let messages: Array<Message> = []
          for (let i = 0; i < chatArray.length; i++) {
            const chatArrayFormatted = chatArray[i].replaceAll("\n", " ")
            const json = JSON.parse(chatArrayFormatted)
            console.log(json)
            console.log("time: ", json[0])
            console.log("sender: ", json[1])
            console.log("message: ", json[2])
            const message: Message = {
              id: Math.random().toString(36).substr(2, 9),
              sender: {
                id: json[1],
                name: json[1],
              },
              type: EMessageType.TEXT,
              content: json[2],
              createdAt: json[0],
            }
            messages.push(message)
          }
          dispatch(setDirectMessages(messages.reverse()))
        }
      })
      await getRequest(
        nearState.accountId,
        chats[index].accountId,
        "CoinRequest"
      )
      await getRequest(nearState.accountId, chats[index].accountId, "CoinDeal")
    } catch (err) {
      console.error("try caught error: ", err)
    }
  }

  const handleCapture = async (index: number) => {
    setActiveMessage(index)
    dispatch(setActiveReceiver(chats[index].accountId))
    dispatch(setDirectMessages([]))
  }

  const handleSearchName = async (searchValue: string) => {
    if (
      searchValue === "" ||
      searchValue === null ||
      searchValue.replace(/\s/g, "").length === 0
    ) {
      return setChatsClone(chats)
    }
    const filteredChats = chatsClone.filter((chat: IMessageItem) =>
      chat.name.toLowerCase().includes(searchValue.toLowerCase())
    )
    setChatsClone(filteredChats)
  }

  return (
    <div className="w-full h-full z-0  bg-black-dark  rounded-[20px]   overflow-x-hidden flex gap-2 ">
      {!chat.minimized && sidebar.collapsed && (
        <SmoothCorners
          corners="32,42"
          borderRadius="20px"
          className="w-[45%] h-full"
        >
          <div
            className="w-full  overflow-x-hidden overflow-y-hidden h-full rounded-[20px] bg-black-light  p-4"
            style={
              {
                // width: (chat.minimized) ? "0%" : ""
              }
            }
          >
            <ChatHeader onChange={handleSearchName} />

            <div className="h-[80%]">
              <div className="flex gap-2 mt-4 ">
                <Image
                  src="/assets/icons/pin-icon.svg"
                  alt="Pin"
                  width={13}
                  height={13}
                />

                <label className="text-[14px] pb-1 relative top-[2px] text-white opacity-[15%]">
                  Pinned
                </label>
              </div>
              <div className="flex gap-2 my-1">
                <Image
                  src="/assets/icons/fill-icon.svg"
                  alt="All"
                  width={13}
                  height={13}
                />
                <label className="text-[14px] pb-1 relative top-[2px] text-white opacity-[15%]">
                  All Chats
                </label>
              </div>
              <div className="h-full gap-1 overflow-y-scroll pb-2.5 w-[105%]">
                {chatsClone.map((message, index) => (
                  <MessageItem
                    onClickCapture={() => handleCapture(index)}
                    key={index}
                    {...message}
                    isActive={activeMessage === index ? true : false}
                    onClick={() => handleSetActiveMessage(index)}
                  />
                ))}
              </div>
            </div>

            {/* <div>
                        <div className='flex gap-2 mt-4'>
                            <Image src="/assets/icons/fill-icon.svg" alt="Pin" width={13} height={13} />
                            <label className='text-[14px] text-white opacity-[15%]'>All Charts</label>
                        </div>
                        <div>
                            {allChats.map((message, index) => (
                                <MessageItem key={index} {...message} isActive={false} />
                            ))
                            }
                        </div>
                    </div> */}
          </div>
        </SmoothCorners>
      )}
      <div
        className="w-full  overflow-y-hidden h-full z-10 overflow-x-hidden"
        style={{
          width: chat.minimized || !sidebar.collapsed ? "100%" : "",
        }}
      >
        <ChatRoom activeMessage={chats[activeMessage]} />
      </div>
    </div>
  )
}

export default Chat
