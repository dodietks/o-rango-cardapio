import {Img, Box } from '@chakra-ui/react'

const HeaderBg = props => {
    return (
        <Box 
        minW="100%"
        minH="100%"
        >
            <Img objectFit="cover" 
            src="pages/images/HeaderBg.png" alt="O Rango"/>
        </Box>
    );
};
export default HeaderBg;
