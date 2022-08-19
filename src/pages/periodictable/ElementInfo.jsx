// page2 components
import React from "react";
import data from './PeriodicTableJSON.json'
import ReactPlayer from 'react-player'
import { useEffect, useState, useRef } from "react";
import "./PeriodicTable.css";
import { Skeleton, SkeletonCircle, SkeletonText, Stack } from '@chakra-ui/react'
import { Helmet } from 'react-helmet';
import {
    GridItem, Grid,
    Flex, Spacer,
    Center, Box, Button,
    Input,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from "@chakra-ui/react";

import ScrollToTop from "react-scroll-to-top";

const tabledataWidth = "3.5rem";
const tabledataHeight = "3.5rem";

const atomicNumberSize = "0.65em";
const symbolElementSize = "1.5em";
const elementNameSize = "1.3em";

const ElementInfo = () => {

    const [loading, setLoading] = useState(true);
    const [content, setContent] = useState(false);

    // minus the score continously
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
            setContent(true);
        }, 100);
    }, []);

    const [searchName, setSearchName] = useState('');

    const [symbol, setSymbol] = useState([]);

    //fetch data
    const fetchElements = async () => {
        try {
            const response = await fetch(
                "https://periodic-table-elements-info.herokuapp.com/elements"
            );
            const data = await response.json();

            //update data
            setSymbol(data);
        } catch (error) {
            console.log(error);
        }
    };

    //loads api data
    useEffect(() => {
        fetchElements();
    }, []);

    const [symbolName, setSymbolName] = useState({
        name: 'Hydrogen',
        summary: 'Hydrogen is a chemical element with chemical symbol H and atomic number 1. With an atomic weight of 1.00794 u, hydrogen is the lightest element on the periodic table. Its monatomic form (H) is the most abundant chemical substance in the Universe, constituting roughly 75% of all baryonic mass.',
        category: "diatomic nonmetal",
        video: 'https://youtu.be/6rdmpx39PRk',
        melt: '13.99',
        boilingpoint: '20.271',
        molarheat: '28.836',
        density: '0.08988',
        period: '1',
        source: 'https://en.wikipedia.org/wiki/Hydrogen'
    });

    const changeSymbolName = (name, summ, vid, melt, boint, mheat, dens, per, sauce) => {
        setSymbolName(previousState => {
            return {
                name: name,
                summary: summ,
                video: vid,
                melt: melt,
                boilingpoint: boint,
                molarheat: mheat,
                density: dens,
                period: per,
                source: sauce,
            }
        });
        setSearchName('');
    }

    // for modal
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [scrollBehavior, setScrollBehavior] = React.useState('inside')

    return (
        <>
            <Helmet>
                <title>List with properties - PTable</title>
            </Helmet>
            {loading &&
                <Stack mx={{ base: '5%', md: '10%', lg: '15%', xl: '20%' }} my={{ base: '0.4rem', md: '0.6rem', lg: '0.8rem', xl: '1rem' }}>
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
                <Modal
                    top={'70%'}
                    isOpen={isOpen}
                    onClose={onClose}
                    scrollBehavior={scrollBehavior}
                    motionPreset='slideInBottom'>
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
                                <Input color='teal'
                                    placeholder='Search Element'
                                    _placeholder={{ color: 'inherit' }}
                                    size='md'
                                    boxShadow='md'

                                    onChange={event => { setSearchName(event.target.value) }}
                                    onClick={event => { setSearchName(event.target.value = '') }}
                                    autoFocus
                                />
                                {data.elements.filter((val => {
                                    //if search name is empty it will retrun nothing
                                    if (searchName == "") {
                                        return ('')
                                    } else if (val.name.toLowerCase().includes(searchName.toLowerCase())) {
                                        return (
                                            val.name,
                                            val.summary,
                                            val.category,
                                            val.video,
                                            val.melt,
                                            val.boil,
                                            val.molar_heat,
                                            val.density,
                                            val.period,
                                            val.source)
                                    }
                                })).map((symbolName, key) => {
                                    return (
                                        // <Button onClick={onClose} id='wrapper-button'>
                                            <Button onClick={() => {changeSymbolName
                                                (symbolName.name,
                                                    symbolName.summary,
                                                    symbolName.video,
                                                    symbolName.melt,
                                                    symbolName.boil,
                                                    symbolName.molar_heat,
                                                    symbolName.density,
                                                    symbolName.period,
                                                    symbolName.source,
                                                );
                                                onClose(onClose);
                                                }} my={'0.25rem'} mx={'0.25rem'} textAlign='center'>
                                                <Box key={key.number}>{symbolName.name}</Box>
                                            </Button>
                                        //  </Button> 
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
                                "element-info periodic-video"
                                "skir skir"`}
                    gridTemplateColumns={'1fr 1fr'}
                    gap='1'
                    mx={'10%'}
                >
                    <GridItem area={{ base: 'smalltop', lg: 'smalltop' }} px={'1rem'}>

                        <Center
                            id="page-two-header"
                            my={'1rem'}
                            pb={{ base: '0.7em', md: '0' }}
                            mx={{ base: '2%', md: '20%' }}
                            fontSize={{ base: '1.3em', md: '1.5em' }}
                            fontWeight={'bold'} >LIST OF GROUP ELEMENTS WITH CHEMICAL GROUP BLOCK
                        </Center>

                    </GridItem>

                    <GridItem area={{ base: 'skir', lg: 'element-info' }} px={'1rem'}>

                        <Flex id="elementChemgroup">
                            <Box fontWeight={'semibold'}>Element Name</Box>
                            <Spacer />
                            <Box fontWeight={'semibold'}>Group Block</Box>
                        </Flex>

                        {/* Button */}
                        <div id="elementsTableData">
                            {data.elements.map((item) => (
                                <Flex my={"2rem"} className="asideContent" key={item.atomicNumber}>
                                    <Button
                                        className="listOfElement"
                                        onClick={() => changeSymbolName(
                                            item.name,
                                            item.summary,
                                            item.video,
                                            item.melt,
                                            item.boil,
                                            item.molar_heat,
                                            item.density,
                                            item.period,
                                            item.source)}
                                        width={{ base: '2.5rem', md: tabledataWidth }}
                                        height={{ base: '2.5rem', md: tabledataHeight }}
                                        style={{
                                            // width: tabledataWidth,
                                            // height: tabledataHeight,
                                            textAlign: "center",
                                            border: "1px solid black",
                                            color: 'black',
                                            backgroundColor: '#' + item['cpk-hex'],
                                            flexDirection: 'column'
                                        }}
                                    >
                                        <Box fontSize={atomicNumberSize}>{item.number}</Box>
                                        <Box fontSize={{ base: '1em', md: symbolElementSize }}>{item.symbol}</Box>
                                    </Button>

                                    <Box my={"auto"} mx={"1rem"}>
                                        <Box fontSize={{ base: '1em', md: elementNameSize }}>{item.name}</Box>
                                    </Box>

                                    <Spacer />

                                    <Box my={"auto"}>
                                        <Box style={{ textAlign: 'right' }} fontSize={{ base: '1em', md: elementNameSize }}>{item.category}</Box>
                                    </Box>
                                </Flex>
                            ))}
                        </div>
                    </GridItem>

                    {/* Video */}
                    <GridItem area={{ base: 'omsim', lg: 'periodic-video' }}>
                        <Flex justifyContent={'center'} flexDirection={'column'} textAlign={'center'} id='element-video'>

                            <Input
                                color='teal'
                                placeholder='Search Element'
                                _placeholder={{ color: 'inherit' }}
                                size='md'
                                boxShadow='md'

                                onClick={onOpen}
                            />

                            <Box width={'100%'} height={'20rem'} backgroundColor={'gray.200'} my={'1rem'} mx={'auto'}>
                                <ReactPlayer
                                    controls
                                    width={'100%'}
                                    height={'100%'}
                                    url={symbolName.video} />
                            </Box>
                            {/* Description */}
                            <Box my={'1rem'}>
                                <Box>Description about the Element <span id="symbolname"><a href={symbolName.source} target="_blank">{symbolName.name}</a></span></Box>
                                <br />
                                {symbolName.summary}
                            </Box>
                            {/* Table */}
                            <TableContainer>
                                <Table variant='striped'>
                                    <Thead>
                                        <Tr>
                                            <Th>Melting Point</Th>
                                            <Th>Boiling Point</Th>
                                            <Th>Molar Heat</Th>
                                            <Th>Density</Th>
                                            <Th>Period</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        <Tr>
                                            <Td>{symbolName.melt}</Td>
                                            <Td>{symbolName.boilingpoint}</Td>
                                            <Td>{symbolName.molarheat}</Td>
                                            <Td>{symbolName.density}</Td>
                                            <Td>{symbolName.period}</Td>
                                        </Tr>
                                    </Tbody>
                                </Table>
                                <a href={symbolName.source} target="_blank">
                                    <Button mx={'auto'} mt={'1em'}>Learn more</Button>
                                </a>
                            </TableContainer>
                            <ScrollToTop smooth top={50} width={'2rem'} height={'2rem'} component={<p style={{ color: "teal" }}>UP</p>} />
                        </Flex>
                    </GridItem>

                </Grid>
            </>}

        </>
    );
};

export default ElementInfo;
