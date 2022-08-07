import React from "react";
import data from './PeriodicTableJSON.json'
import ReactPlayer from 'react-player'
import { useEffect, useState } from "react";
import "./PeriodicTable.css";

// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
// import Container from "@material-ui/core/Container";
// import { makeStyles, withStyles } from "@material-ui/core/styles";

// import Slider from "@material-ui/core/Slider";
// import Tooltip from "@material-ui/core/Tooltip";
// import Grid from "@material-ui/core/Grid";
// import Paper from "@material-ui/core/Paper";
// import VolumeUp from "@material-ui/icons/VolumeUp";
// import VolumeDown from "@material-ui/icons/VolumeDown";
// import VolumeMute from "@material-ui/icons/VolumeOff";
// import FullScreen from "@material-ui/icons/Fullscreen";
// import Popover from "@material-ui/core/Popover";
// import screenful from "screenfull";
// import Controls from "./components/Controls";

import { GridItem, Grid, Flex, Spacer, Center, Box, Button, Input } from "@chakra-ui/react";

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
    });

    const changeSymbolName = (name, summ, vid) => {
        setSymbolName(previousState => {
            return {
                name: name,
                summary: summ,
                video: vid,
            }
        });
        setSearchName('');
    }


    return (
        <>
            <Grid
                templateAreas={`"element-info periodic-video"`}
                gridTemplateColumns={'1fr 1fr'}
                gap='1'
                mx={'10%'}
            >
                <GridItem area={'element-info'} px={'1rem'}>

                    <Flex id="elementChemgroup">
                        <Box>Element Name</Box>
                        <Spacer />
                        <Box>Group Block</Box>
                    </Flex>

                    {/* Button */}
                    <div id="elementsTableData">
                        {data.elements.map((item) => (
                            <Flex my={"2rem"} className="asideContent" key={item.atomicNumber}>
                                <Button
                                    className="listOfElement"
                                    onClick={() => changeSymbolName(item.name, item.summary, item.video)}
                                    style={{
                                        width: tabledataWidth,
                                        height: tabledataHeight,
                                        textAlign: "center",
                                        border: "1px solid black",
                                        color: 'black',
                                        backgroundColor: '#' + item['cpk-hex'],
                                        flexDirection: 'column'
                                    }}
                                >
                                    <p style={{ fontSize: atomicNumberSize }}>{item.atomicNumber}</p>
                                    <p style={{ fontSize: symbolElementSize }}>{item.symbol}</p>
                                </Button>

                                <Box my={"auto"} mx={"1rem"}>
                                    <p style={{ fontSize: elementNameSize }}>{item.name}</p>
                                </Box>

                                <Spacer />

                                <Box my={"auto"}>
                                    <p style={{ fontSize: elementNameSize }}>{item.category}</p>
                                </Box>
                            </Flex>
                        ))}
                    </div>
                </GridItem>

                {/* Video */}
                <GridItem area={'periodic-video'}>
                    <Flex justifyContent={'center'} flexDirection={'column'} textAlign={'center'} id='element-video'>
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
                                return (val.name, val.summary, val.category, val.video)
                            }
                        })).map((symbolName, key) => {
                            return (
                                <Button onClick={() => changeSymbolName
                                    (symbolName.name,
                                        symbolName.summary,
                                        symbolName.video,
                                    )} my={'0.5rem'} textAlign='center'>
                                    <Box key={key.number}>{symbolName.name}</Box>
                                </Button>
                            )
                        }
                        )}

                        <Box width={'40rem'} height={'20rem'} backgroundColor={'pink'} my={'1rem'} mx={'auto'}>
                            <ReactPlayer
                            controls
                            width={'100%'}
                            height={'100%'}
                            url={symbolName.video}/>
                        </Box>
                        <Box my={'1rem'}>
                            <Box>Description about the Element <span id="symbolname">{symbolName.name}</span></Box>
                            <br />
                            {symbolName.summary}
                        </Box>
                        <Button backgroundColor={'green'} ms={'auto'} me={'1rem'} mt={'2rem'}>Go up button message</Button>
                        <Button backgroundColor={'green'} ms={'auto'} me={'1rem'} mt={'2rem'}>message button</Button>
                    </Flex>
                </GridItem>

            </Grid>

        </>
    );
};

export default ElementInfo;
