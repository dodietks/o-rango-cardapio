import { ChakraProvider, theme, CSSReset } from "@chakra-ui/react"
import Header from '../organisms/header';
import SideBar from "../organisms/sideBar";

function ORangoApp({ Component, pageProps }) {
  return(
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  ) 
}

export default ORangoApp
