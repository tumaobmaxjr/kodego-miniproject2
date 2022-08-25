import { useEffect, useState } from "react";
import ScienceBlog from "./ScienceBlog";
import {
    Skeleton, SkeletonCircle, SkeletonText, Stack,
    Box,
    Grid, GridItem,
    Tabs, TabList, Tab,
} from '@chakra-ui/react'
import { LinkContainer } from "react-router-bootstrap";
import { Nav } from "react-bootstrap";
import { Helmet } from 'react-helmet';

const GetScienceBlogAPI = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     fetch('https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=fca0df5545064e5f8fe42a84aea93e6d')
    //         .then(response => {
    //             return response.json()
    //         })
    //         .then(result => {
    //             console.log(result)
    //             setData(result);
    //             setLoading(false);
    //         })
    //         .catch(error => console.log('error', error));
    // }, []);

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'f774088c21mshc0ca572c42f93a5p1cd783jsn9fc33d0b8fd3',
                'X-RapidAPI-Host': 'planets-info-by-newbapi.p.rapidapi.com'
            }
        };
        
        fetch('https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planet/list', options)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                setData(response);
                setLoading(false);
            })
            
            .catch(err => console.error(err));
    }, []);


    return (
        <>
            <Helmet>
                <title>Science Article - PTable</title>
            </Helmet>
            <ScienceBlog data={data} header={"Articles for you"} />
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
        </>
    );
}

export default GetScienceBlogAPI;