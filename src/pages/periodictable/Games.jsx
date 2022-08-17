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
import { Skeleton, SkeletonCircle, SkeletonText, Stack } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

const Games = () => {

    const [loading, setLoading] = useState(true);
    const [content, setContent] = useState(false);

    // minus the score continously
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
            setContent(true);
        }, 1000);
    }, []);

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

    // for game controls
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
    const [highestScore, setHighestScore] = useState(0);

    const [play, setPLay] = useState(false);


    // I had to put this useEffect before other functions because, its causing an error when I put it after all other functions
    // maybe because i have other useEffect functions that renders after 1 seconds idk, but that is my theory lol
    // or it really needs to put it first, so the guess could get values immediately
    useEffect(() => {
        setGuess(data.elements);
    }, []);

    const [guess, setGuess] = useState([{}]);


    // score
    const handleScore = () => {
        setTimeout(() => {
            setScore((currentNumber) => currentNumber - 1);
        }, 1000);
    }

    // minus the score continously
    useEffect(() => {
        if (play === true) {
            handleScore();
        }
    }, [score]);

    // const correctAnswer = () => {
    //     if(element.symbol === guess[num].symbol){
    //         setScore((currentNumber) => currentNumber+plus+10);
    //     }
    // }

    // gettting random number
    const [num, setNum] = useState(0);

    function randomNumberInRange(min, max) {
        // 👇️ get number between min (inclusive) and max (inclusive)
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const handleClick = () => {
        setNum(randomNumberInRange(0, 118));
    };

    return (
        <>
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
                <Grid
                    templateAreas={`"controls"
                                "table" `}
                    gridTemplateColumns={'2fr'}
                >

                    {/* Periodic Table */}
                    <GridItem area={'table'} mx={'auto'} my={'1rem'}>
                        <Box className="periodic-table">
                            {data.elements.map((element, key) => (
                                <button
                                    onClick={() => {

                                        if (element.symbol === guess[num].symbol) {
                                            setScore((currentNumber) => currentNumber + 25);
                                            handleClick();
                                        } else {
                                            setScore((currentNumber) => currentNumber - 10);
                                        }

                                        changeName(
                                            element.name,
                                            element.symbol,
                                            element.number,
                                        );
                                    }}
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

                            {/* left */}
                            {viewScore &&
                                <div id='score' style={{
                                    gridRowStart: 1,
                                    gridRowEnd: 3,
                                    gridColumnStart: 4,
                                    gridColumnEnd: 5,
                                    justifyContent: 'center',
                                    alignContent: 'center',
                                    marginBottom: 'auto',
                                    marginTop: 'auto',
                                }}>
                                    <Box fontSize={{ base: '0.4rem', sm: '0.5rem', md: '0.75rem', xl: '1rem', }}>Score</Box>
                                    <Center fontSize={{ base: '1rem', md: '1.5rem', xl: '2rem', }}>{score}</Center>
                                </div>
                            }
                            {/* high score */}
                            {!viewScore &&
                                <div id='score' style={{
                                    gridRowStart: 1,
                                    gridRowEnd: 3,
                                    gridColumnStart: 4,
                                    gridColumnEnd: 5,
                                    marginBottom: 'auto',
                                    marginTop: 'auto',
                                }}>
                                    <Box fontSize={{ base: '0.4rem', sm: '0.5rem', md: '0.75rem', xl: '1rem', }}>Score</Box>
                                    <Center fontSize={{ base: '1rem', md: '1.5rem', xl: '2rem', }}>{highestScore}</Center>
                                </div>
                            }

                            {viewStop &&
                                <div style={{
                                    gridRow: 1,
                                    gridColumnStart: 13,
                                    gridColumnEnd: 16,
                                    padding: '1rem'
                                }}>
                                    <Flex flexDirection={'row'}>
                                        <Button
                                            fontSize={{ base: '0.4rem', sm: '0.5rem', md: '0.75rem', xl: '1rem', }}
                                            bgColor={'orange.500'}
                                            id={'button-stop'}
                                            size={'sm'}
                                            mx={'0.5rem'}
                                            onClick={() => {
                                                setScore((currentNumber) => currentNumber - 10);
                                                handleClick();
                                            }}
                                        >
                                            PASS
                                        </Button>
                                        <Button
                                            fontSize={{ base: '0.4rem', sm: '0.5rem', md: '0.75rem', xl: '1rem', }}
                                            bgColor={'red.500'}
                                            size={'sm'}
                                            id={'button-stop'}
                                            onClick={() => {
                                                setHighestScore(score);
                                                setScore((currentNumber) => currentNumber = 1);
                                                setViewScore(false);
                                                setViewStop(false);
                                                setPLay(false);
                                                setViewPlay(true);
                                                setFind(false);
                                            }}
                                        >
                                            STOP
                                        </Button>
                                    </Flex>
                                </div>
                            }


                            {viewPlay &&
                                <Flex style={{
                                    gridRowStart: 1,
                                    gridRowEnd: 4,
                                    gridColumnStart: 6,
                                    gridColumnEnd: 12,
                                    padding: '1rem'
                                }} flexDirection={'column'}>

                                    <Flex flexDirection={'row'} my={{ base: '0.2rem', sm: '0.5rem', md: '0.65rem', xl: '1rem', }} mx={'auto'} >
                                        {/* for difficulty */}
                                        <Box my={'auto'} me={'0.5rem'} fontSize={{ base: '0.4rem', sm: '0.5rem', md: '0.75rem', xl: '1rem', }} borderRadius={'0'}>Difficulty</Box>

                                        <Flex flexDirection={'column'}>
                                            <Button
                                                size={'md'}
                                                borderRadius={'0'}
                                                width={{ base: '4rem', md: '6rem', xl: '10rem', }}
                                                fontSize={{ base: '0.4rem', sm: '0.5rem', md: '0.75rem', xl: '1rem', }}
                                                height={{ base: '1rem', md: '1.75rem', xl: '2.5rem', }}
                                                onClick={() => { setShow(!show) }}
                                            >
                                                {difficulty}
                                                <ChevronDownIcon ms={'auto'}></ChevronDownIcon>
                                            </Button>

                                            {show &&
                                                <UnorderedList
                                                    listStyleType={'none'}
                                                    ms={'0'}
                                                    mt={{ base: '1rem', md: '1.75rem', xl: '2.5rem', }}
                                                    bgColor={'teal'}
                                                    position={'absolute'}
                                                    style={{ zIndex: '10' }}
                                                >
                                                    {/* easy */}
                                                    <ListItem>
                                                        <Button
                                                            width={{ base: '4rem', md: '6rem', xl: '10rem', }}
                                                            fontSize={{ base: '0.4rem', sm: '0.5rem', md: '0.75rem', xl: '1rem', }}
                                                            height={{ base: '1rem', md: '1.75rem', xl: '2.5rem', }}
                                                            borderRadius={'0'}
                                                            onClick={() => {
                                                                setShow(!show);
                                                                setNumber(true);
                                                                setSymbol(true);
                                                                setName(true);
                                                                setDifficulty('Easy');
                                                            }}
                                                        >
                                                            Easy
                                                        </Button>
                                                    </ListItem>

                                                    {/* medium */}
                                                    <ListItem>
                                                        <Button
                                                            width={{ base: '4rem', md: '6rem', xl: '10rem', }}
                                                            fontSize={{ base: '0.4rem', sm: '0.5rem', md: '0.75rem', xl: '1rem', }}
                                                            height={{ base: '1rem', md: '1.75rem', xl: '2.5rem', }}
                                                            borderRadius={'0'}
                                                            onClick={() => {
                                                                setShow(!show);
                                                                setNumber(false);
                                                                setSymbol(false);
                                                                setName(true);
                                                                setDifficulty('Medium');
                                                            }}
                                                        >
                                                            Medium
                                                        </Button>
                                                    </ListItem>

                                                    {/* hard */}
                                                    <ListItem>
                                                        <Button
                                                            width={{ base: '4rem', md: '6rem', xl: '10rem', }}
                                                            fontSize={{ base: '0.4rem', sm: '0.5rem', md: '0.75rem', xl: '1rem', }}
                                                            height={{ base: '1rem', md: '1.75rem', xl: '2.5rem', }}
                                                            borderRadius={'0'}
                                                            onClick={() => {
                                                                setShow(!show);
                                                                setNumber(false);
                                                                setSymbol(false);
                                                                setName(false);
                                                                setDifficulty('Hard');
                                                            }}
                                                        >
                                                            Hard
                                                        </Button>
                                                    </ListItem>
                                                </UnorderedList>}
                                        </Flex>

                                    </Flex>
                                    {/* play now */}
                                    <Button
                                        size={'lg'}
                                        fontSize={{ base: '0.65rem', sm: '0.75rem', md: '0.85rem', xl: '1rem', }}
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
                                            handleClick();
                                            setScore(1);
                                        }}
                                    >
                                        PLAY NOW!
                                    </Button>
                                </Flex>
                            }
                            {/*Find  */}
                            {find &&
                                <div style={{
                                    gridRowStart: 2,
                                    gridRowEnd: 3,
                                    gridColumnStart: 7,
                                    gridColumnEnd: 10,
                                    justifyContent: 'center',
                                    alignContent: 'center',
                                }}>
                                    <Flex flexDirection={'column'} mt={{ base: '-0.5rem', sm: '-1rem', md: '-1.5rem', xl: '-2rem', }}>
                                        <Center fontSize={{ base: '0.65rem', sm: '0.75rem', md: '0.85rem', xl: '1rem', }}>Find</Center>
                                        <Center>
                                            <Center
                                                w={'10rem'}
                                                h={{ base: '2rem', sm: '2.5rem', md: '3.75rem', xl: '4.5rem', }}
                                                bgColor={'#aaa'}
                                                color={'black'}
                                                fontWeight={'bold'}
                                                fontSize={'2rem'}
                                            >
                                                {guess[num].symbol}
                                            </Center>
                                        </Center>
                                    </Flex>
                                </div>
                            }
                        </Box>
                    </GridItem>
                </Grid>
            }
        </>
    );
}

export default Games;