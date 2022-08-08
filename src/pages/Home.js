import PeriodicData from "./periodictable/PeriodicData";
import ElementInfo from "./periodictable/ElementInfo"

import {Center  } from '@chakra-ui/react'

const Home = () => {
    return (
        <>
            <PeriodicData />
            <Center id="page-two-header" my={'2rem'} pb={{ base: '0.7em', md: '0' }} mx={{ base: '10%', md: '20%' }} fontSize={{ base: '1em', md: '1.5em' }} >LIST OF GROUP ELEMENTS WITH CHEMICAL GROUP BLOCK</Center>
            <ElementInfo/>
        </>
    );
}

export default Home;