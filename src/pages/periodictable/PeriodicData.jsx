import data from './PeriodicTableJSON.json'
import React, { useState } from 'react';

import {
    Box, Heading,
    Flex, Grid, GridItem, Spacer, HStack,
    Button, ButtonGroup, IconButton,
    Badge, Image,
    List,
    ListItem, ListIcon, OrderedList, UnorderedList,
    Input
} from "@chakra-ui/react"

function PeriodicData() {

    const [searchName, setSearchName] = useState('');

    const [elementName, setElementName] = useState({
        name: 'Hydrogen',
        summary: 'Hydrogen is a chemical element with chemical symbol H and atomic number 1. With an atomic weight of 1.00794 u, hydrogen is the lightest element on the periodic table. Its monatomic form (H) is the most abundant chemical substance in the Universe, constituting roughly 75% of all baryonic mass.',

        image: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Hydrogen_Spectra.jpg',

        symbol: 'H',
        discovered_by: 'Henry Cavendish',
        number: 1,
        phase: "Gas",
    });

    const changeName = (name, summ, img, sym, discby, num, ph,) => {
        setElementName(previousState => {
            return {
                name: name,
                summary: summ,

                image: img,

                symbol: sym,
                discovered_by: discby,
                number: num,
                phase: ph,
            }
        });
    }

    return (

        <>
            <Box m={"0.5rem"}>
                <Input
                    color='teal'
                    placeholder='Search Element'
                    _placeholder={{ color: 'inherit' }}
                    size='md'
                    boxShadow='md'

                    onChange={event => { setSearchName(event.target.value) }}
                />
                {data.elements.filter((val => {
                    //if search name is empty it will retrun nothing
                    if (searchName == "") {
                        return ('')
                    } else if (val.name.toLowerCase().includes(searchName.toLowerCase())) {
                        return (val.name, val.summary, val.spectral_img, val.symbol, val.discovered_by, val.number, val.phase)
                    }
                })).map((symbolName, key) => {
                    return (
                        <Button onClick={() => changeName
                            (symbolName.name,
                                symbolName.summary,
                                symbolName.spectral_img,
                                symbolName.symbol,
                                symbolName.discovered_by,
                                symbolName.number,
                                symbolName.phase,
                            )} my={'0.5rem'} textAlign='center'>
                            <Box key={key.number}>{symbolName.name}</Box>
                        </Button>
                    )
                }
                )}
            </Box>

            <Box minW={'20rem'} boxShadow='2xl' p={'1rem'}>

                {/* Element name and short description */}
                <Badge fontSize={{ base: '0.7em', lg: '1.2em' }}>{elementName.name}</Badge>

                <Box marginY='1.5rem'>{elementName.summary}</Box>

                {/* Picture and details */}

                <Box mb={'0.5rem'}>Spectral Image</Box>

                <Image src={elementName.image} alt='Sample' />
                <br />
                <Box> Discovered by:  {elementName.discovered_by}</Box>
                <Box> Number:  {elementName.number}</Box>
                <Box> Symbol:  {elementName.symbol}</Box>
                <Box> Phase:  {elementName.phase}</Box>

            </Box>
        </>

    )
}

export default PeriodicData;