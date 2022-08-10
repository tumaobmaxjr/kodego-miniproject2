// page2 components
import React from "react";
import data from './PeriodicTableJSON.json'
import ReactPlayer from 'react-player'
import { useEffect, useState } from "react";
import "./PeriodicTable.css";

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

const tabledataWidth = "4rem";
const tabledataHeight = "4rem";

const atomicNumberSize = "0.65em";
const symbolElementSize = "1.5em";
const elementNameSize = "1.5em";

const ElementInfo = () => {

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
        video: 'https://youtu.be/cxFb4hmfVT0',
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
                                    <Button onClick={onClose} id='wrapper-button'>
                                        <Button onClick={() => changeSymbolName
                                            (symbolName.name,
                                                symbolName.summary,
                                                symbolName.video,
                                                symbolName.melt,
                                                symbolName.boil,
                                                symbolName.molar_heat,
                                                symbolName.density,
                                                symbolName.period,
                                                symbolName.source,
                                            )} my={'0.5rem'} textAlign='center'>
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
                templateAreas={`"omsim omsim"
                                "element-info periodic-video"
                                "skir skir"`}
                gridTemplateColumns={'1fr 1fr'}
                gap='1'
                mx={'10%'}
            >
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
                                        item.source,)}
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

                        <Box width={'100%'} height={'20rem'} backgroundColor={'pink'} my={'1rem'} mx={'auto'}>
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
                    </Flex>
                </GridItem>

            </Grid>

        </>
    );
};

export default ElementInfo;
