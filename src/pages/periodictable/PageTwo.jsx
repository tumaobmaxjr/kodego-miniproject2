import ElementInfo from "./ElementInfo"
import { Grid, GridItem, Box, Flex, Spacer,  Button, ButtonGroup  } from '@chakra-ui/react'


const PageTwo = () => {
    return (
        <Grid
            templateAreas={`"element-info periodic-video"`}
            gridTemplateColumns={'1fr 1fr'}
            gap='1'
        >
            <GridItem area={'element-info'} px={'1rem'}>
                <Flex>
                    <Box>Element</Box>
                    <Spacer/>
                    <Box>Chemical Group</Box>
                </Flex>
                <ElementInfo/>
            </GridItem>

            <GridItem area={'periodic-video'}>
                <Flex justifyContent ={'center'} flexDirection={'column'} textAlign={'center'} id='element-video'>
                    <Box my={'1rem'} backgroundColor={'yellow'} mx={'auto'} px={'1em'}> Search Element </Box>
                    <Box width={'40rem'} height={'20rem'} backgroundColor={'pink'} my={'1rem'} mx={'auto'}> 
                        Video About Element
                    </Box>
                    <Box my={'1rem'}>
                        Short Description about the Element
                        <br/>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde cum illo optio ab possimus. Ullam.
                        sit amet consectetur adipisicing elit. Quo dolor maxime reiciendis quam voluptatem, 
                        possimus similique non! Excepturi perspiciatis perferendis quae vero dolore, eius eos distinctio rerum, id, dolor aut.
                    </Box>
                    <Button colorScheme={'yellow'} mx={'auto'}>Button</Button>
                    <Button backgroundColor={'green'} ms={'auto'} me={'1rem'} mt={'2rem'}>Go up button message</Button>
                    <Button backgroundColor={'green'} ms={'auto'} me={'1rem'} mt={'2rem'}>message button</Button>
                </Flex>
            </GridItem>

        </Grid>
    );
}

export default PageTwo;