import PeriodicTable from "./periodictable/PeriodicTable";
import PeriodicData from "./periodictable/PeriodicData";
import ElementInfo from "./periodictable/ElementInfo"
import { Grid, GridItem } from '@chakra-ui/react'

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
            <ElementInfo/>
        </>
    );
}

export default Home;