import "./PeriodicTable.css";

import { Heading, Text, Image, Box, Center } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const ScienceBlog = ({ data, header }) => {
    return (
        <>
            <Box id="Blogs" mx={{ base: '3%', md: '4%', lg: '6%' }}>
                <Center
                    id="page-two-header"
                    pb={{ base: '0.5em', md: '0' }}
                    my={'1rem'}
                    mx={{ base: '20%', md: '25%' }}
                    fontSize={{ base: '1.5em', md: '1.8em' }}
                    fontWeight={'bold'}>
                    {header}
                </Center>
                {data.articles?.map((datas) => (
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
                            w={'40rem'}
                            h={'30rem'}
                            objectFit='cover'
                            src={datas.urlToImage}
                            alt='Picture about articles'
                        />
                        <Text my={'1rem'}>Source: {datas.source.name}</Text>
                    </Box>
                ))}
            </Box>
        </>
    );
}

export default ScienceBlog;