//page`1
import data from './PeriodicTableJSON.json'
import React, { useState } from 'react';
import "./PeriodicTable.css";

import {
    Box, Heading,
    Flex, Grid, GridItem, Spacer, HStack,
    Button, ButtonGroup, IconButton,
    Badge, Image,
    List,
    ListItem, ListIcon, OrderedList, UnorderedList,
    Input,
    Show, Hide,
} from "@chakra-ui/react"

const colorMap = {
    "noble gas": "#FFBC42",
    "alkaline earth metal": "#EC674E",
    "diatomic nonmetal": "#D81159",
    "alkali metal": "#8F2D56",
    "transition metal": "#58586B",
    "post-transition metal": "#218380",
    lanthanide: "#4AABAF",
    metalloid: "#73D2DE",
};

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

        xpos: 1,
        ypos: 1,
        category: "diatomic nonmetal",
    });

    const changeName = (name, summ, img, sym, discby, num, ph, x, y, cat) => {
        setElementName(previousState => {
            return {
                name: name,
                summary: summ,

                image: img,

                symbol: sym,
                discovered_by: discby,
                number: num,
                phase: ph,

                xpos: x,
                ypos: y,
                category: cat,
            }
        });
        // i was amazed that it is possible to add multiple setState in a function
        setSearchName('');
    }

    return (

        <>
            <Grid
                templateAreas={`"omsim omsim"
                                "periodic-table periodic-info"
                                "skir skir"`}
                gridTemplateColumns={'3fr 1fr'}
                mx={{ base: '0rem', lg: '3rem' }}
                mt={'1.5rem'}
            >
                <GridItem area={{ base: 'skir', xl: 'periodic-table' }} mx={'auto'} mt={'3.5rem'}>
                    <Box className="periodic-table" width={'100%'}>
                        {data.elements.map((element, key) => (
                            <button
                                onClick={() => changeName
                                    (element.name,
                                        element.summary,
                                        element.spectral_img,
                                        element.symbol,
                                        element.discovered_by,
                                        element.number,
                                        element.phase,
                                        element.xpos,
                                        element.ypos,
                                        element.category,
                                    )}
                                className="element"
                                key={key}

                                style={{
                                    gridRow: element.ypos,
                                    gridColumn: element.xpos,
                                    borderColor: 'black',
                                    color: 'black',
                                    backgroundColor: '#' + element['cpk-hex']
                                }}
                            >
                                <strong id='sym'>{element.symbol}</strong>

                                <Hide below='md'>
                                    <small className="number" display>{element.number}</small>
                                    <small className="name">{element.name}</small>
                                </Hide>

                            </button>
                        ))}
                    </Box>
                </GridItem>

                <GridItem area={{ base: 'omsim', xl: 'periodic-info' }}>
                    <Box m={"0.5rem"}>
                        <Input
                            color='teal'
                            placeholder='Search Element'
                            _placeholder={{ color: 'inherit' }}
                            size='md'
                            boxShadow='md'

                            onChange={event => { setSearchName(event.target.value) }}
                            onClick={event => { setSearchName(event.target.value = '') }}
                        />
                        {data.elements.filter((val => {
                            //if search name is empty it will retrun nothing
                            if (searchName == "") {
                                return ('')
                            } else if (val.name.toLowerCase().includes(searchName.toLowerCase())) {
                                return (val.name, val.summary, val.spectral_img, val.symbol, val.discovered_by, val.number, val.phase, val.xpos, val.ypos, val.category, val['cpk-hex'])
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
                                        symbolName.xpos,
                                        symbolName.ypos,
                                        symbolName.category,
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

                </GridItem>
            </Grid>



        </>

    )
}

export default PeriodicData;