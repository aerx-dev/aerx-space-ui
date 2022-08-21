import '../styles/globals.css'
import '../components/profiles/css/index.css'


import type { AppProps } from 'next/app'
import "../components/LandingPage/css/landing.css";
import { ThemeProvider } from "next-themes";
import { ChakraProvider } from "@chakra-ui/react";
import myTheme from "../lib/theme.js";
import { Provider } from 'react-redux';
import { store } from '../store/store';

function MyApp({ Component, pageProps }: AppProps) {

  
  return (
    
    <div className="profile <div  className='w-[39%] h-[100vh] overflow-hidden'>">
    <Provider store={store}>
    <ChakraProvider
                theme={myTheme}
            >
                <ThemeProvider attribute="class">
    <Component {...pageProps} />
    </ThemeProvider>
    </ChakraProvider>
    </Provider>
    </div>
  ) 
}

export default MyApp
