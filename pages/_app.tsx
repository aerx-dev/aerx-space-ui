import '../styles/globals.css'
import type { AppProps } from 'next/app'
import "../components/LandingPage/css/landing.css";
import { ThemeProvider } from "next-themes";
import { ChakraProvider } from "@chakra-ui/react";
import myTheme from "../lib/theme.js";
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { useState, useEffect } from 'react';
import { fetchpostsData } from '../hooks/useFetchPost';
import { getBalance } from '../lib/aexContract';
import { initNearConnection, checkProfile, initPinata } from '../lib/auth';
import { nearStore } from '../store/near';

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);
  const nearState = nearStore((state) => state);
  //1) Initialise near connection and contracts
  useEffect(() => {
    if (isLoading) {
      initNearConnection(nearState);
      //set isLoading to false
      setIsLoading(false);
    }
  }, [isLoading]);

  //Run checks on each contract to confirm they are succesfully loaded and at same time save needed informations to state
  useEffect(() => {
    //2) check profile and set profile to state(if user has registered) 
    if (!isLoading) {
      (async () => {
        await checkProfile(nearState);
      })();
    }
  }, [isLoading, nearState.accountId, nearState.pnftContract]);

  useEffect(() => {
    //3) get balance and set to state
    if (!isLoading) {
      (async () => {
        await getBalance(nearState);
      })();
    }
  }, [isLoading, nearState.accountId, nearState.tokenContract]);

  useEffect(() => {
    //4)fetch posts 
    if (!isLoading) {
      (async () => {
        await fetchpostsData(nearState);
      })();
    }
  }, [isLoading, nearState.accountId, nearState.pnftContract]);

  useEffect(() => {
    // 5) authenticate Pinata
    if (!isLoading) {
      (async () => {
        await initPinata(nearState)
      })();
    }
  }, [isLoading, nearState.accountId, nearState.pnftContract]);

  //Todo: add more contracts functions and set state for all needed informations


  return (
    <Provider store={store}>
      <ChakraProvider
        theme={myTheme}
      >
        <ThemeProvider attribute="class">
          <Component {...pageProps} />
        </ThemeProvider>
      </ChakraProvider>
    </Provider>
  )
}

export default MyApp

