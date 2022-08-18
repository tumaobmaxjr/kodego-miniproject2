//page`1
import data from './PeriodicTableJSON.json'
import React, { useState, useRef, useEffect } from 'react';
import "./PeriodicTable.css";
import { color, Skeleton, SkeletonCircle, SkeletonText, Stack } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { Helmet } from 'react-helmet';
import {
    Box, Heading,
    Flex, Grid, GridItem, Spacer, HStack,
    Button, ButtonGroup, IconButton,
    Badge, Image,
    List,
    ListItem, ListIcon, OrderedList, UnorderedList,
    Input,
    Show, Hide,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Center,
} from "@chakra-ui/react"

const colorMap = {
    "noble gas": "FFBC42",
    "alkaline earth metal": "EC674E",
    "diatomic nonmetal": "D81159",
    "alkali metal": "8F2D56",
    "transition metal": "58586B",
    "post-transition metal": "218380",
    "polyatomic nonmetal": "D812DE",
    "actinide": "4A567B",
    lanthanide: "4AABAF",
    metalloid: "73D2DE",
};

function PeriodicData() {

    const [category, setCategory] = useState('Name')
    const [showCategory, setShowCategory] = useState(false);

    const [loading, setLoading] = useState(true);
    const [content, setContent] = useState(false);

    const [color, setColor] = useState('')

    // const [colorName, setColorName] = useState(true);
    // const [colorCategory, setColorCategory] = useState(false);

    // minus the score continously
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
            setContent(true);
        }, 100);
    }, []);

    const [searchName, setSearchName] = useState('');

    const [elementName, setElementName] = useState({
        name: 'Hydrogen',
        summary: 'Hydrogen is a chemical element with chemical symbol H and atomic number 1. With an atomic weight of 1.00794 u, hydrogen is the lightest element on the periodic table. Its monatomic form (H) is the most abundant chemical substance in the Universe, constituting roughly 75% of all baryonic mass.',

        image: 'https://storage.googleapis.com/search-ar-edu/periodic-table/element_001_hydrogen/element_001_hydrogen_srp_th.png',

        number: 1,
        category: "diatomic nonmetal",
        symbol: 'H',
        phase: "Gas",
        atomic_mass: 1.008,
        density: 0.08988,
        melt: 13.99,
        boil: 20.721,
        discovered_by: 'Henry Cavendish',

        xpos: 1,
        ypos: 1,
    });

    const changeName = (name, summ, img, num, cat, sym, ph, atommass, dens, melting, boiling, discby, x, y,) => {
        setElementName(previousState => {
            return {
                name: name,
                summary: summ,

                image: img,

                number: num,
                category: cat,
                symbol: sym,
                phase: ph,
                atomic_mass: atommass,
                density: dens,
                melt: melting,
                boil: boiling,
                discovered_by: discby,

                xpos: x,
                ypos: y,
            }
        });
        // i was amazed that it is possible to add multiple setState in a function
        setSearchName('');
    }

    // for modal
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [scrollBehavior, setScrollBehavior] = React.useState('inside')

    // for input focus
    // const inputRef = useRef();

    // const clickForFocus = () =>{
    //     inputRef.current.focus();
    // }

    return (

        <>
            <Helmet>
                <title>PTable</title>
            </Helmet>
            {loading &&
                <Stack mx={'10%'} my={{ base: '0.4rem', md: '0.6rem', lg: '0.8rem', xl: '1rem' }}>
                    <Skeleton height='50px' />
                    <Skeleton height='50px' />
                    <Skeleton height='50px' />
                    <Skeleton height='50px' />
                    <Skeleton height='250px'>
                        Please wait.. little einstein
                    </Skeleton>
                    <Skeleton height='50px' />
                </Stack>
            }

            {content &&
                <>
                    <Modal isOpen={isOpen} onClose={onClose} scrollBehavior={scrollBehavior} motionPreset='slideInBottom'>
                        {/* <ModalOverlay /> */}
                        <ModalOverlay
                            backdropFilter='blur(10px) hue-rotate(5deg)'
                            backdropInvert='80%'
                            backdropBlur='2px'
                        />
                        <ModalContent>
                            <ModalHeader>Search Element Name</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody pb={'1rem'}>
                                <Box>
                                    <Input
                                        color='teal'
                                        placeholder='Search Element'
                                        _placeholder={{ color: 'inherit' }}
                                        size='md'
                                        boxShadow='md'

                                        onChange={event => { setSearchName(event.target.value) }}
                                        onClick={event => { setSearchName(event.target.value = '') }}
                                    // ref={inputRef}

                                    />
                                    {data.elements.filter((val => {
                                        //if search name is empty it will retrun nothing
                                        if (searchName === "") {
                                            return ('')
                                        } else if (val.name.toLowerCase().includes(searchName.toLowerCase())) {
                                            return (val.name, val.summary, val.bohr_model_image, val.number, val.category, val.symbol, val.phase, val.atomic_mass, val.density, val.melt, val.boil, val.discovered_by, val.xpos, val.ypos, val['cpk-hex'])
                                        }
                                        
                                    })).map((symbolName, key) => {
                                        return (
                                            //wrapper button
                                            <Button onClick={onClose} id='wrapper-button'>
                                                <Button onClick={() => changeName
                                                    (
                                                        symbolName.name,
                                                        symbolName.summary,
                                                        symbolName.bohr_model_image,
                                                        symbolName.number,
                                                        symbolName.category,
                                                        symbolName.symbol,
                                                        symbolName.phase,
                                                        symbolName.atomic_mass,
                                                        symbolName.dens,
                                                        symbolName.melt,
                                                        symbolName.boil,
                                                        symbolName.discovered_by,
                                                        symbolName.xpos,
                                                        symbolName.ypos,

                                                    )}
                                                    my={'0.5rem'} textAlign='center'>
                                                    <Box key={key.number}>{symbolName.name}</Box>
                                                </Button>
                                            </Button>
                                        )
                                    }
                                    )}
                                </Box>
                            </ModalBody>
                        </ModalContent>
                    </Modal>

                    <Grid
                        templateAreas={`"smalltop smalltop" 
                                "omsim omsim"
                                "topleft topright"
                                "periodic-table periodic-info"
                                "skir skir"`}
                        gridTemplateColumns={'3fr 1fr'}
                        mx={{ base: '0rem', lg: '3rem' }}
                        mt={{ base: '0.5rem', xl: '-2.5rem' }}
                    >

                        {/* search */}
                        <GridItem area={{ base: 'smalltop', xl: 'topright' }}
                            mx={{ base: '3%', md: '4%', lg: '6%' }}
                            mt={{ base: '1rem', xl: '0' }}>
                            <Box mb={"1rem"}>
                                <Input
                                    color='teal'
                                    placeholder='Search Element'
                                    _placeholder={{ color: 'inherit' }}
                                    size='md'
                                    boxShadow='md'

                                    onClick={onOpen}
                                />
                            </Box>
                        </GridItem>

                        {/* Table of elements */}
                        <GridItem area={{ base: 'skir', xl: 'periodic-table' }} mb={'1rem'} mx={'auto'}>
                            <Box className="periodic-table" width={'100%'}>
                                {data.elements.map((element, key) => (
                                    <button
                                        onClick={() => changeName
                                            (
                                                element.name,
                                                element.summary,
                                                element.bohr_model_image,
                                                element.number,
                                                element.category,
                                                element.symbol,
                                                element.phase,
                                                element.atomic_mass,
                                                element.density,
                                                element.melt,
                                                element.boil,
                                                element.discovered_by,
                                                element.xpos,
                                                element.ypos,
                                            )}
                                        className="element"
                                        key={key}

                                        style={{
                                            gridRow: element.ypos,
                                            gridColumn: element.xpos,
                                            borderColor: 'black',
                                            color: 'black',
                                            // backgroundColor: '#' + colorMap[element.category],
                                            backgroundColor: '#' + element['cpk-hex']
                                            // backgroundColor: color,
                                        }}
                                    >
                                        <strong id='sym'>{element.symbol}</strong>

                                        <Hide below='lg'>
                                            <small className="number" display>{element.number}</small>
                                            <small className="name">{element.name}</small>
                                        </Hide>

                                    </button>
                                ))}
                                {/* <Box
                                    mx={'auto'}
                                    my={'auto'}
                                    fontSize={{ base: '0.5rem', sm: '0.65rem', md: '0.85rem', xl: '1rem', }}
                                    style={{
                                        gridRow: 1,
                                        gridColumnStart: 13,
                                        gridColumnEnd: 15,
                                    }}
                                >Display by:
                                </Box>

                                <Flex flexDirection={'column'}
                                style={{
                                    gridRow: 1,
                                    gridColumnStart: 15,
                                    gridColumnEnd: 17,
                                }}>
                                    <Button
                                    mx={'auto'}
                                    my={'auto'}
                                    size={'md'}
                                    borderRadius={'0'}
                                    width={{ base: '3rem', md: '6rem', xl: '10rem', }}
                                    fontSize={{ base: '0.5rem', sm: '0.65rem', md: '0.85rem', xl: '1rem', }}
                                    onClick={() => {
                                        setShowCategory(!showCategory);    
                                    }}
                                    >
                                        {category}
                                        <ChevronDownIcon ms={'auto'}></ChevronDownIcon>
                                    </Button>

                                    {showCategory && 
                                        <UnorderedList
                                            listStyleType={'none'}
                                            ms={'0'}
                                            mt={{ base: '1rem', md: '1.75rem', xl: '2.5rem', }}
                                            bgColor={'teal'}
                                            position={'absolute'}
                                            style={{ zIndex: '10' }}
                                        >
                                        
                                            <ListItem>
                                                <Button
                                                    width={{ base: '4rem', md: '6rem', xl: '10rem', }}
                                                    fontSize={{ base: '0.4rem', sm: '0.5rem', md: '0.75rem', xl: '1rem', }}
                                                    height={{ base: '1rem', md: '1.75rem', xl: '2.5rem', }}
                                                    borderRadius={'0'}
                                                    onClick={() => {
                                                        setShowCategory(!showCategory); 
                                                        setCategory('Name');     
                                                    }}
                                                >
                                                    Name
                                                </Button>
                                            </ListItem>

                                            <ListItem>
                                                <Button
                                                    width={{ base: '4rem', md: '6rem', xl: '10rem', }}
                                                    fontSize={{ base: '0.4rem', sm: '0.5rem', md: '0.75rem', xl: '1rem', }}
                                                    height={{ base: '1rem', md: '1.75rem', xl: '2.5rem', }}
                                                    borderRadius={'0'}
                                                    onClick={() => {
                                                        setShowCategory(!showCategory); 
                                                        setCategory('Category');   
                                                    }}
                                                >
                                                    Category
                                                </Button>
                                            </ListItem>
                                        </UnorderedList>
                                    }
                                </Flex> */}
                            </Box>
                        </GridItem>

                        {/* Elements data side */}
                        <GridItem
                            area={{ base: 'omsim', xl: 'periodic-info' }}
                            mb={'4rem'}>

                            <Box minW={'20rem'} boxShadow='2xl' p={'1rem'} pt={'0rem'}>

                                {/* Element name and short description */}
                                <Badge mt={4} fontSize={{ base: '1em', md: '1.1em', lg: '1.2em' }}>{elementName.name} ({elementName.symbol}) {elementName.number}</Badge>
                                <Box>{elementName.category}</Box>

                                <Box marginY='1.5rem'>{elementName.summary}</Box>

                                {/* Picture and details */}
                                <Center><Image src={elementName.image} alt='Sample' /></Center>
                                <Center><Box mb={'1.4rem'} mt={'.3rem'} fontSize={'12px'} opacity={'60%'}>Bohr Model Image</Box></Center>

                                <Box> Phase:  {elementName.phase}</Box>
                                <Box> Atomic mass:  {elementName.atomic_mass}</Box>
                                <Box> Density:  {elementName.density}</Box>
                                <Box> Melting:  {elementName.melt}</Box>
                                <Box> Boiling:  {elementName.boil}</Box>
                                <Box> Discovered by: {elementName.discovered_by} </Box>

                            </Box>

                        </GridItem>
                    </Grid>
                </>
            }


        </>

    )
}

export default PeriodicData;