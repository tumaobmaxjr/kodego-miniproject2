import PeriodicTable from "./periodictable/PeriodicTable";
import PeriodicData from "./periodictable/PeriodicData";
import PageTwo from "./periodictable/PageTwo";
import { Grid, GridItem, Box } from '@chakra-ui/react'

const Home = () => {
    return (
        <>
            <Grid
                templateAreas={`"periodic-table periodic-info"`}
                gridTemplateColumns={'3fr 1fr'}
                mx={'3rem'}
                mt={'1.5rem'}
            >
                <GridItem area={'periodic-table'} mx={'auto'} mt={'3.5rem'}>
                    <PeriodicTable />
                </GridItem>
                <GridItem area={'periodic-info'}>
                    <PeriodicData />
                </GridItem>
            </Grid>
            <Box id="page-two-header" my={'2rem'} fontSize={'1.5em'} >LIST OF GROUP ELEMENTS WITH CHEMICAL GROUP BLOCK</Box>
            <PageTwo />
        </>
    );
}

export default Home;