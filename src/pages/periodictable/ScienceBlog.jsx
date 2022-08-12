import "./PeriodicTable.css";

import { Heading, Text, Image, Box } from '@chakra-ui/react'

const ScienceBlog = ({ data, header }) => {
    return (
        <>
            <Box id="Blogs" mx={'15%'}>
                <Heading mb={4}>{header}</Heading>
                {data.articles?.map((datas) => (
                    <Box key={datas.url}  mb={'1rem'} boxShadow='dark-lg' p={'1rem'}>
                        <Text id="BlogTitle">
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
                        <Image
                            mx={'auto'}
                            w={'40rem'}
                            h={'30rem'}
                            objectFit='cover'
                            src={datas.urlToImage}
                            alt='Picture about articles'
                        />
                        <Text>Source: {datas.source.name}</Text>
                        <a href={datas.url}>Read more...</a>
                    </Box>
                ))}
            </Box>
        </>
    );
}

export default ScienceBlog;