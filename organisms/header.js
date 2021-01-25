import { Heading, Flex } from "@chakra-ui/react";

const Header = props => {
    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            padding="1rem"
            bgGradient="linear(to-r, purple.400, purple.500)"
            color="gray.100"
            boxShadow="2xl"
            m="5" 
            borderRadius="full"

            {...props}
        >
            <Flex align="center" mr={5}>
                <Heading
                    as="h1"
                    size="lg"
                    letterSpacing={"-.1rem"}
                    textShadow="1px 1px 2px #FFF"
                    mx="1.5rem"
                    mt="0.6rem"
                    mb="1rem"
                >
                    O Rango
          </Heading>
            </Flex>
        </ Flex>
    );
};

export default Header;
