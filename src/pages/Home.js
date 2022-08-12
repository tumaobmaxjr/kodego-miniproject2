import PeriodicData from "./periodictable/PeriodicData";
import ElementInfo from "./periodictable/ElementInfo"

import {Center  } from '@chakra-ui/react'
import GetScienceBlogAPI from "./periodictable/GetScienceBlogAPI";

const Home = () => {
    return (
        <>
            {/* <GetScienceBlogAPI/> */}
            <PeriodicData />
            {/* <ElementInfo/> */}
        </>
    );
}

export default Home;