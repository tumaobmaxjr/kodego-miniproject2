import ElementInfo from "./ElementInfo"
import { Grid, GridItem, Box, Flex, Spacer,  Button, ButtonGroup, Center  } from '@chakra-ui/react'


const PageTwo = () => {
    return (
        <>
            <Center id="page-two-header" my={'2rem'} mx={'20%'} fontSize={'1.5em'} >LIST OF GROUP ELEMENTS WITH CHEMICAL GROUP BLOCK</Center>
            <ElementInfo/>
        </>
    );
}

export default PageTwo;