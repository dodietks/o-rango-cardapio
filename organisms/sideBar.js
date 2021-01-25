import { Box, Text, Flex, Button, Stack } from "@chakra-ui/react";

const SideBar = props => {
    return (
        <Box
            align="center"
            wrap="wrap"
            padding="1.5rem"
            bg="gray.100"
            color="gray.800"
            maxW="sm"
            boxShadow="dark-lg"
            m="5"
            borderRadius="xl"
            {...props}
        >
            <Flex align="center" ml={5}>
                <Text as="h2"
                    size="lg"
                    letterSpacing={"-.0rem"}
                >
                    Opções
                </Text>
            </Flex>

            <Stack direction="row">
                <Box as="button" bg="purple.400" w="56" h="30" borderRadius="xl">
                    Text
                </Box>
            </Stack>

        </ Box>
    );
};

export default SideBar;
