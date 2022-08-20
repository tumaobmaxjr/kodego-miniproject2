import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Image,
    List,
    ListItem,
    ListIcon
} from '@chakra-ui/react';
import { MdCheckCircle } from "react-icons/md";
import image from '../image/Picsart_22-08-20_11-51-58-396.png';

function AboutLayout() {
    return (
        <Container maxW='container.xl'>
        <Stack
            align={'center'}
            spacing={{ base: 8, md: 10 }}
            // py={{ base: 20, md: 20 }}
            pt='100px'
            pb='50px'
            direction={{ base: 'column', md: 'row' }}>
            <Stack flex={1} spacing={{ base: 5, md: 10 }}>
                {/* <Heading
                    lineHeight={1.1}
                    fontWeight={600}
                    fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
                    <Text as={'span'}>
                        About
                    </Text>
                </Heading> */}

                <Text>
                    <Text
                        my={'10px'}
                        fontSize={{ base: 'xl', sm: '2xl', lg: '3xl' }}>
                        What is PTable?
                    </Text>
                    <Text color={'gray.500'}>
                        The PTable consolidates and useful information about the chemical elements into a single location. 
                        Click on an element to learn more about its properties, history, name origin, images, and electron shell diagram.
                    </Text>
                </Text>

                <List spacing={3} pl={6}>
                    <ListItem>
                        <ListIcon as={MdCheckCircle} color='teal' />
                            Color-coded table that is visually appealing.
                    </ListItem>
                    <ListItem>
                        <ListIcon as={MdCheckCircle} color='teal' />
                            The design is simple and fluid, with many details.
                    </ListItem>
                    <ListItem>
                        <ListIcon as={MdCheckCircle} color='teal' />
                            Each element has a detailed description.
                    </ListItem>
                    <ListItem>
                        <ListIcon as={MdCheckCircle} color='teal' />
                            View the list of all elements in atomic number order.
                    </ListItem>
                    <ListItem>
                        <ListIcon as={MdCheckCircle} color='teal' />
                            Bhor model diagram for each element.
                    </ListItem>
                    <ListItem>
                        <ListIcon as={MdCheckCircle} color='teal' />
                            Search for elements by name.
                    </ListItem>
                    <ListItem>
                        <ListIcon as={MdCheckCircle} color='teal' />
                            Links to informative websites for further study.
                    </ListItem>
                    <ListItem>
                        <ListIcon as={MdCheckCircle} color='teal' />
                            Added game feature.
                    </ListItem>
                    <ListItem>
                        <ListIcon as={MdCheckCircle} color='teal' />
                            Added daily science articles for you.
                    </ListItem>

                </List>

                <Stack
                    spacing={{ base: 4, sm: 6 }}
                    direction={{ base: 'column', sm: 'row' }}>
                </Stack>
            </Stack>
            
            <Flex
                flex={1}
                justify={'center'}
                align={'center'}
                w={'full'}
                h={'full'}>
                <Box
                    height={'300px'}
                    rounded={'2xl'}
                    boxShadow={'2xl'}
                    width={'full'}
                    h={'full'}
                    overflow={'hidden'}>
                    <Image
                        alt={'Hero Image'}
                        fit={'cover'}
                        align={'center'}
                        w={'100%'}
                        h={'100%'}
                        src={image}
                    ></Image>
                </Box>
            </Flex>
        </Stack>
        </Container>
    );
}

export default AboutLayout;