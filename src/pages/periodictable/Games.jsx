import data from './PeriodicTableJSON.json';
import React, { useState, useRef, useEffect } from 'react';
import './PeriodicTable.css'

import {
    Box, Heading,
    Flex, Grid, GridItem, Spacer, HStack,
    Button, ButtonGroup, IconButton,
    Badge, Image,
    List, Text,
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
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Center,
} from "@chakra-ui/react"

import { ChevronDownIcon } from '@chakra-ui/icons'

const Games = () => {

    const [searchName, setSearchName] = useState('');

    const [elementName, setElementName] = useState({
        name: 'Hydrogen',
        symbol: 'H',
        number: 1,
    });

    const changeName = (name, sym, num,) => {
        setElementName(previousState => {
            return {
                name: name,
                symbol: sym,
                number: num,
            }
        });
        // i was amazed that it is possible to add multiple setState in a function
        setSearchName('');
    }

    const [show, setShow] = useState(false);

    const [difficulty, setDifficulty] = useState('Easy');

    const [name, setName] = useState(true);
    const [symbol, setSymbol] = useState(true);
    const [number, setNumber] = useState(true);

    const [viewScore, setViewScore] = useState(false);
    const [viewStop, setViewStop] = useState(false);
    const [viewPlay, setViewPlay] = useState(true);
    const [find, setFind] = useState(false);

    const [score, setScore] = useState(0);

    const [play, setPLay] = useState(false);
    
    const handleScore = () => {
        setTimeout(() => {
            setScore((currentNumber) => currentNumber-1);
        }, 1000);
    }

    useEffect(() => {
        if(play === true){
            setTimeout(() => {
                setScore((currentNumber) => currentNumber-1);
              }, 1000);
        }
      },[score]);

    return (
        <>

            <Grid
                templateAreas={`"controls"
                                "table" `}
                gridTemplateColumns={'2fr'}
            >
                <GridItem area={'controls'} mb={'1rem'} mt={'2rem'} ms={'-6rem'}>

                    <Grid
                        templateAreas={`"left mid right"
                                "left mid right"`}
                        gridTemplateColumns={'1fr 1fr 1fr'}
                        gridTemplateRows={'1fr 1fr 1fr'}
                        w={'70%'}
                        ms={'13%'}
                    >

                        {/* left */}
                        {viewScore &&
                        <GridItem area={'left'} ms={'auto'} my={'auto'} me={'2.5rem'}>
                            <Box fontSize={'1rem'}>Score</Box>
                            <Center>{score}</Center>
                        </GridItem>
                        }

                        <GridItem area={'mid'}>
                            {viewPlay &&
                            <Flex flexDirection={'column'}>

                                <Flex flexDirection={'row'} my={'1rem'}>
                                    {/* for difficulty */}
                                    <Box my={'auto'} me={'0.5rem'} size={'md'} borderRadius={'0'}>Difficulty</Box>

                                    <Flex flexDirection={'column'}>
                                        <Button
                                            size={'md'}
                                            borderRadius={'0'}
                                            width={'10rem'}
                                            onClick={() => { setShow(!show) }}
                                        >
                                            {difficulty}
                                            <ChevronDownIcon ms={'auto'}></ChevronDownIcon>
                                        </Button>

                                        {show &&
                                            <UnorderedList
                                                listStyleType={'none'}
                                                ms={'0'}
                                                mt={'2.5rem'}
                                                bgColor={'teal'}
                                                position={'absolute'}
                                                style={{ zIndex: '10' }}
                                            >
                                                {/* easy */}
                                                <ListItem>
                                                    <Button
                                                        borderRadius={'0'}
                                                        w={'10rem'}
                                                        onClick={() => {
                                                            setShow(!show);
                                                            setNumber(true);
                                                            setSymbol(true);
                                                            setName(true);
                                                            setDifficulty('Easy');
                                                        }}
                                                    >
                                                        <Text
                                                            fontSize={'1rem'}>
                                                            Easy
                                                        </Text>
                                                    </Button>
                                                </ListItem>

                                                {/* medium */}
                                                <ListItem>
                                                    <Button
                                                        borderRadius={'0'}
                                                        w={'10rem'}
                                                        onClick={() => {
                                                            setShow(!show);
                                                            setNumber(false);
                                                            setSymbol(false);
                                                            setName(true);
                                                            setDifficulty('Medium');
                                                        }}
                                                    >
                                                        <Text
                                                            fontSize={'1rem'}>
                                                            Medium
                                                        </Text>
                                                    </Button>
                                                </ListItem>

                                                {/* hard */}
                                                <ListItem>
                                                    <Button
                                                        borderRadius={'0'}
                                                        w={'10rem'}
                                                        onClick={() => {
                                                            setShow(!show);
                                                            setNumber(false);
                                                            setSymbol(false);
                                                            setName(false);
                                                            setDifficulty('Hard');
                                                        }}
                                                    >
                                                        <Text
                                                            fontSize={'1rem'}>
                                                            Hard
                                                        </Text>
                                                    </Button>
                                                </ListItem>
                                            </UnorderedList>}
                                    </Flex>

                                </Flex>
                                {/* play now */}
                                <Button
                                    size={'lg'}
                                    onClick={() => {
                                        if (difficulty === 'Easy') {
                                            setNumber(false);
                                        };
                                        setPLay(true);
                                        handleScore();
                                        setViewScore(true);
                                        setViewStop(true);
                                        setViewPlay(false);
                                        setFind(true);
                                    }}
                                >
                                    PLAY NOW!
                                </Button>
                            </Flex>
                            }
                                
                            {/*Find  */}
                            {find &&
                            <Flex flexDirection={'column'} mt={'1.5rem'}>
                                <Center fontSize={'1rem'}>Find</Center>
                                <Center>
                                    <Center 
                                    w={'10rem'}
                                    h={'4.5rem'}
                                    bgColor={'#aaa'}
                                    color={'black'}
                                    fontWeight={'bold'}
                                    >
                                        Me uWu
                                    </Center>
                                </Center>
                            </Flex>
                            }

                        </GridItem>
                        
                        {/* STOP */}
                        {viewStop &&
                        <GridItem area={'right'} ms={'7rem'} me={'auto'} mt={'1.2rem'}>
                            <Button
                            bgColor={'red.500'}
                            size={'sm'}
                            id={'button-stop'}
                            onClick={() => {
                                setScore(1);
                                setViewScore(false);
                                setViewStop(false);
                                setPLay(false);
                                setViewPlay(true);
                                setFind(false);
                            }}
                            >
                                STOP
                            </Button>
                        </GridItem>
                        }

                    </Grid>

                </GridItem>

                {/* Periodic Table */}
                <GridItem area={'table'} mx={'auto'} my={'1rem'}>
                    <Box className="periodic-table" mt={'-13rem'}>
                        {data.elements.map((element, key) => (
                            <button
                                onClick={() => changeName
                                    (element.name,
                                        element.symbol,
                                        element.number,
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
                                {symbol && <strong id='sym'>{element.symbol}</strong>}

                                <Hide below='lg'>
                                    {number && <small className="number" display>{element.number}</small>}
                                    {name && <small className="name">{element.name}</small>}
                                </Hide>

                            </button>
                        ))}
                    </Box>
                </GridItem>
            </Grid>
        </>
    );
}

export default Games;