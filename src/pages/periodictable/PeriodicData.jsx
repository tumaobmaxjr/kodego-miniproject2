import React, { useState } from 'react';

import{Box,Heading,
		Flex, Grid, GridItem, Spacer, HStack,
		Button, ButtonGroup, IconButton,
        Badge, Image, 
        List,
        ListItem,ListIcon,OrderedList,UnorderedList,} from "@chakra-ui/react"

function PeriodicData() {

    return (
        <Box
        minW={'20rem'}
        boxShadow='lg'
        p={'1rem'}>

            {/* Element name and short description */}
            <Badge fontSize={{ base: '0.7em', lg: '1.2em'}}>Elements</Badge>
            
            <Box
                marginY='1.5rem'
                >
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim aspernatur vero eius, facilis non ut earum, a minus obcaecati ad culpa. Corporis, illum? Cumque impedit, omnis non provident praesentium culpa.
                </p>
            </Box>

            {/* Picture and details */}
            <Grid
                templateAreas={`"picture list"
                "picture list"`}
                //gridTemplateRows={'50px 1fr 30px'}
                gridTemplateColumns={'2fr 1fr'}
                gap={6}>
                    <GridItem area={'picture'}>
                        <Image src='https://bit.ly/dan-abramov' alt='Sample' />
                    </GridItem>

                    <GridItem area={'list'}>
                        <Flex alignItems='center' h='100%'>
                            <UnorderedList>
                                <ListItem >Lorem </ListItem>
                                <ListItem >Consectetur</ListItem>
                                <ListItem >Integer</ListItem>
                                <ListItem >Facilisis</ListItem>
                            </UnorderedList>
                        </Flex>
                    </GridItem>
            </Grid>
            
            {/* Button */}
            <Flex marginTop='1.5rem' justifyContent='center'>
                <Button>Download</Button>
            </Flex>

        </Box>
    )
}

export default PeriodicData;