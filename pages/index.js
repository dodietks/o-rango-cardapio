import Head from 'next/head'
import { Box, Center, Code, Container, Flex, Heading, Text } from "@chakra-ui/react";
import HeaderBg from "../molecules/headerBg";

export default function Home() {
  return (
    
    <Flex  w="100%" textAlign="center" bgColor="blue">
        <HeaderBg />

      <Head>
        <title>O Rango</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Center>
        <Heading as="h1" size="2xl" mb="2">
          O Rango
        </Heading>
      </Center>

      <Text fontSize="xl" mt="2">
        Comida de verdade para <Code> todas as necessidades. </Code>
      </Text>
      <Flex flexWrap="wrap" alignItems="center" justifyContent="center" maxW="800px">
        <Box as="a" href="#" p="6" m="4" borderWidth="1px" rounded="lg" flexBasis={['auto', '45%']}>
          <Heading as="h3" size="lg" mb="2">Ganho de massa &rarr;</Heading>
          <Text fontSize="lg">Loren ipsun</Text>
        </Box>

        <Box as="a" href="#" p="6" m="4" borderWidth="1px" rounded="lg" flexBasis={['auto', '45%']}>
          <Heading as="h3" size="lg" mb="2">Sem origem animal &rarr;</Heading>
          <Text fon
            tSize="lg">Loren ipsun</Text>
        </Box>
        <Box as="a" href="#" p="6" m="4" borderWidth="1px" rounded="lg" flexBasis={['auto', '45%']}>
          <Heading as="h3" size="lg" mb="2">Perda de peso &rarr;</Heading>
          <Text fontSize="lg">Loren ipsun</Text>
        </Box>

        <Box as="a" href="#" p="6" m="4" borderWidth="1px" rounded="lg" flexBasis={['auto', '45%']}>
          <Heading as="h3" size="lg" mb="2">Outras restrições &rarr;</Heading>
          <Text fontSize="lg">Loren ipsun</Text>
        </Box>

        <Box as="a" href="#" p="6" m="4" borderWidth="1px" rounded="lg" flexBasis={['auto', '45%']}>
          <Heading as="h3" size="lg" mb="2">Cardápio &rarr;</Heading>
          <Text fontSize="lg">mimimi.</Text>
        </Box>
      </Flex>

      <footer>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" />
        </a>
      </footer>
    </ Flex>
  )
}
