import "./PeriodicTable.css";
import { Heading, Text, Image, Box, Center, CloseButton, Flex } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { useEffect, useState } from "react";
import { ArrowUpIcon } from '@chakra-ui/icons';
import ScrollToTop from "react-scroll-to-top";

const ScienceBlog = ({ data, header }) => {

    // try to fetch it, on get science blog FILE PAGE
    const [image, setImage] = useState(null);
    const [showImage, setShowImage] = useState(false);

    const handleImage = (APImage) => {
        setImage(APImage)
        console.log(APImage);
        console.log('got it');
    }

    return (
        <>
            {showImage &&
                <Box
                    mt={'3rem'}
                    position={'fixed'}
                    w={'100vw'}
                    h={'100vh'}
                    top={'0vh'}
                    left={'0vw'}
                    bg='blackAlpha.300'
                    backdropFilter='blur(20px) hue-rotate(40deg)'
                    backdropInvert='80%'
                    backdropBlur='2px'
                >
                    <Flex
                        justifyContent={'end'}
                    >
                        <CloseButton
                            backgroundColor={'teal.300'}
                            color={'black'}
                            _hover={{ backgroundColor: 'teal.200' }}
                            w='2.5rem'
                            h={'2.5rem'}
                            mt={{base:'3vh' , md:'2.5vh'}}
                            mx={'2.5vw'}
                            onClick={() => {
                                setShowImage(false);
                            }}
                        />
                    </Flex>
                    <Image
                        w={'auto'}
                        h={'80vh'}
                        mx={'auto'}
                        my={'auto'}
                        objectFit='contain'
                        src={image}
                        alt='Sorry, no image available'
                    />
                </Box>
            }

            <Box id="Blogs" mx={{ base: '3%', md: '4%', lg: '6%' }}>
                <Center
                    id="page-two-header"
                    pb={{ base: '0.5em', md: '0' }}
                    mb={'1rem'}
                    mx={{ base: '20%', md: '25%' }}
                    my={'1rem'}
                    fontSize={{ base: '1.5em', md: '1.8em' }}
                    fontWeight={'bold'}>
                    {header}
                </Center>
                {data.articles?.map((datas) => {
                    // handleImage(datas.urlToImage);
                    return (
                        <Box key={datas.url}
                            mx={{ base: '5%', md: '10%', lg: '15%', xl: '20%' }}
                            mb={'1rem'}
                            boxShadow='lg'
                            p={'1rem'}>
                            <Text id="BlogTitle" fontSize={{ base: '1rem', xl: '1.2rem' }}>
                                {datas.title}
                            </Text>
                            <br />
                            <Text>
                                {datas.description}
                            </Text>
                            <br />
                            <Text>
                                {datas.content}
                            </Text>

                            <Box my={'1rem'}>
                                <Link color='teal.500' href={datas.url} isExternal>
                                    Read more... <ExternalLinkIcon mx='2px' />
                                </Link>
                            </Box>

                            <Image
                                mx={'auto'}
                                w={'auto'}
                                h={'auto'}
                                objectFit='contain'
                                src={datas.urlToImage}
                                alt='Sorry, no image available'
                                onClick={() => {
                                    handleImage(datas.urlToImage);
                                    setShowImage(true);
                                }}
                            />
                            <Text my={'2'}>Source: {datas.source.name}</Text>
                        </Box>
                        
                    )
                })}
                <ScrollToTop smooth top={50} width={'2rem'} height={'2rem'} component={<p style={{ color: "teal" }}><ArrowUpIcon /></p>} />
            </Box>
        </>
    );
}

export default ScienceBlog;