import '../styles/globals.css'
import { ChakraProvider, theme, CSSReset } from "@chakra-ui/react"

function ORangoApp({ Component, pageProps }) {
  return(
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Component {...pageProps} />
    </ChakraProvider>
  ) 
}

export default ORangoApp
