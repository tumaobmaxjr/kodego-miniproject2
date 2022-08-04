import PeriodicTable from "./periodictable/PeriodicTable";
import PeriodicData from "./periodictable/PeriodicData";
import PageTwo from "./periodictable/PageTwo";
// import P2eriodicData from "./periodictable/P2eriodicData"

import { Grid, GridItem, Box } from '@chakra-ui/react'

const Home = () => {
    return (
        <>
            <Grid
                templateAreas={`"periodic-table periodic-info"`}
                gridTemplateColumns={'3fr 1fr'}
                mx={'3rem'}
            >
                <GridItem area={'periodic-table'} mx={'auto'}>
                    <PeriodicTable />
                </GridItem>
                <GridItem area={'periodic-info'}>
                    <PeriodicData />
                </GridItem>
            </Grid>
            <Box id="page-two-header" my={'2rem'} fontSize={'1.5em'} >LIST OF GROUP ELEMENTS WITH CHEMICAL GROUP BLOCK</Box>
            <PageTwo />
            {/* <P2eriodicData /> */}
        </>
    );
}

export default Home;