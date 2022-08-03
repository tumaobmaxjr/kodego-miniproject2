// import {
//     Container,
//     Stack,
//     Flex,
//     Box,
//     Heading,
//     Text,
//     Button,
//     Image,
//     Icon,
//     IconButton,
//     createIcon,
//     useColorModeValue,
// } from '@chakra-ui/react';

// function ContactLayout() {
//     return (
//         <Container maxW='container.xl'>
//         <Stack
//             align={'center'}
//             spacing={{ base: 8, md: 10 }}
//             py={{ base: 20, md: 28 }}
//             direction={{ base: 'column', md: 'row' }}>
//             <Stack flex={1} spacing={{ base: 5, md: 10 }}>
//                 <Heading
//                     lineHeight={1.1}
//                     fontWeight={600}
//                     fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
//                     <Text as={'span'}>
//                         What is
//                     </Text>
//                     <br />
//                     <Text as={'span'} color={'red.400'}>
//                         "Name of the Website"
//                     </Text>
//                 </Heading>
//                 <Text color={'gray.500'}>
//                     Snippy is a rich coding snippets app that lets you create your own
//                     code snippets, categorize them, and even sync them in the cloud so
//                     you can use them anywhere. All that is free!
//                 </Text>
//                 <Stack
//                     spacing={{ base: 4, sm: 6 }}
//                     direction={{ base: 'column', sm: 'row' }}>
//                 </Stack>
//             </Stack>
//             <Flex
//                 flex={1}
//                 justify={'center'}
//                 align={'center'}
//                 w={'full'}>
//                 <Box
//                     height={'300px'}
//                     rounded={'2xl'}
//                     boxShadow={'2xl'}
//                     width={'full'}
//                     overflow={'hidden'}>
//                     <Image
//                         alt={'Hero Image'}
//                         fit={'cover'}
//                         align={'center'}
//                         w={'100%'}
//                         h={'100%'}
//                         src={
//                             'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
//                         }
//                     />
//                 </Box>
//             </Flex>
//         </Stack>
//         </Container>
//     );
// }

// export default ContactLayout
import {
    Container,
    Flex,
    Box,
    Heading,
    Text,
    Image,
    Stack,
    IconButton,
    Button,
    VStack,
    HStack,
    Wrap,
    WrapItem,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
} from "@chakra-ui/react";
import {
    MdPhone,
    MdEmail,
    MdLocationOn,
    MdFacebook,
    MdOutlineEmail,
} from "react-icons/md";
import { BsGithub, BsDiscord, BsPerson } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

export default function ContactLayout() {
    return (
        // <Container maxW="container.xl" mt={0} centerContent>
        // <Flex>
        //     <Box
        //     bg="transparent"
        //     color="black"
        //     borderRadius="lg"
        //     borderColor={'gray'}
        //     m={{ sm: 4, md: 16, lg: 10 }}
        //     p={{ sm: 5, md: 5, lg: 16 }}
        //     >
        //     <Box p={4}>
        //         <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
        //         <WrapItem>
        //             <Box>
        //             <Heading>Contact</Heading>
        //             <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
        //                 Fill up the form to contact
        //             </Text>
        //             <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
        //                 <VStack pl={0} spacing={3} alignItems="flex-start">
        //                 <Button
        //                     size="md"
        //                     height="48px"
        //                     width="200px"
        //                     variant="ghost"
        //                     color="#DCE2FF"
        //                     _hover={{ border: "2px solid #1C6FEB" }}
        //                     leftIcon={<MdPhone color="red.400" size="20px" />}
        //                 >
        //                     +639000000000
        //                 </Button>
        //                 <Button
        //                     size="md"
        //                     height="48px"
        //                     width="200px"
        //                     variant="ghost"
        //                     color="#DCE2FF"
        //                     _hover={{ border: "2px solid #1C6FEB" }}
        //                     leftIcon={<MdEmail color="#1970F1" size="20px" />}
        //                 >
        //                     sample@email.com
        //                 </Button>
        //                 <Button
        //                     size="md"
        //                     height="48px"
        //                     width="200px"
        //                     variant="ghost"
        //                     color="#DCE2FF"
        //                     _hover={{ border: "2px solid #1C6FEB" }}
        //                     leftIcon={<MdLocationOn color="#1970F1" size="20px" />}
        //                 >
        //                     Philippines
        //                 </Button>
        //                 </VStack>
        //             </Box>
        //             <HStack
        //                 mt={{ lg: 10, md: 10 }}
        //                 spacing={5}
        //                 px={5}
        //                 alignItems="flex-start"
        //             >
        //                 <IconButton as="a" href="#" isRound='true' aria-label="Facebook" icon={<FaFacebook fontSize="1.25rem" />}/>
        //                 <IconButton as="a" href="#" isRound='true' aria-label="Instagram" icon={<FaInstagram fontSize="1.25rem" />} />
        //                 <IconButton as="a" href="#" isRound='true' aria-label="Twitter" icon={<FaTwitter fontSize="1.25rem" />} />
        //             </HStack>
        //             </Box>
        //         </WrapItem>
        //         <WrapItem>
        //             <Box bg="gray.100" borderRadius="lg">
        //             <Box m={8} color="#0B0E3F">
        //                 <VStack spacing={5}>
        //                 <FormControl id="name">
        //                     <FormLabel>Your Name</FormLabel>
        //                     <InputGroup borderColor="#E0E1E7">
        //                     <InputLeftElement
        //                         pointerEvents="none"
        //                         children={<BsPerson color="gray.800" />}
        //                     />
        //                     <Input type="text" size="md" />
        //                     </InputGroup>
        //                 </FormControl>
        //                 <FormControl id="name">
        //                     <FormLabel>Mail</FormLabel>
        //                     <InputGroup borderColor="#E0E1E7">
        //                     <InputLeftElement
        //                         pointerEvents="none"
        //                         children={<MdOutlineEmail color="gray.800" />}
        //                     />
        //                     <Input type="text" size="md" />
        //                     </InputGroup>
        //                 </FormControl>
        //                 <FormControl id="name">
        //                     <FormLabel>Message</FormLabel>
        //                     <Textarea
        //                     borderColor="gray.300"
        //                     _hover={{
        //                         borderRadius: "gray.300",
        //                     }}
        //                     placeholder="message"
        //                     />
        //                 </FormControl>
        //                 <FormControl id="name" float="right">
        //                     <Button
        //                         variant="solid"
        //                         bg="#0D74FF"
        //                         color="white"
        //                         _hover={{}}
        //                         >
        //                         Send Message
        //                     </Button>
        //                 </FormControl>
        //                 </VStack>
        //             </Box>
        //             </Box>
        //         </WrapItem>
        //         </Wrap>
        //     </Box>
        //     </Box>
        // </Flex>
        // </Container>
        <Container maxW='container.xl'>
        <Stack
            align={'center'}
            spacing={{ base: 8, md: 10 }}
            // py={{ base: 20, md: 20 }}
            pt='10'
            pb='28'
            direction={{ base: 'column', md: 'row' }}>
            <Stack flex={1} spacing={{ base: 5, md: 10 }}>
                <Heading
                    lineHeight={1.1}
                    fontWeight={600}
                    fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
                    <Text as={'span'}>
                        Contact
                    </Text>
                </Heading>
                <Text color={'gray.500'}>
                    Snippy is a rich coding snippets app that lets you create your own
                    code snippets, categorize them, and even sync them in the cloud so
                    you can use them anywhere. All that is free!
                </Text>
                <Box>
                    <VStack pl={0} spacing={1} alignItems="flex-start">
                    <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdPhone color="#1C6FEB" size="20px" />}>
                        +63 900 000 0000
                    </Button>
                    <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdEmail color="#1C6FEB" size="20px" />}>
                        sample@email.com
                    </Button>
                    <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdLocationOn color="#1C6FEB" size="20px" />}>
                        Manila, Philippines
                    </Button>
                    </VStack>
                </Box>
                <Stack
                    spacing={{ base: 4, sm: 6 }}
                    direction={{ base: 'column', sm: 'row' }}>
                </Stack>
            </Stack>
            <Flex
                flex={1}
                justify={'center'}
                align={'center'}
                w={'full'}>
                
                <Box bg="gray.100" borderRadius="lg">
                    <Box m={8} color="#0B0E3F">
                        <VStack spacing={5}>
                        <FormControl id="name">
                            <FormLabel>Your Name</FormLabel>
                            <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                                pointerEvents="none"
                                children={<BsPerson color="gray.100" />}
                            />
                            <Input type="text" size="md" />
                            </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                            <FormLabel>Mail</FormLabel>
                            <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                                pointerEvents="none"
                                children={<MdOutlineEmail color="gray.100" />}
                            />
                            <Input type="text" size="md" />
                            </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                            <FormLabel>Message</FormLabel>
                            <Textarea
                                borderColor="#E0E1E7"
                                _hover={{
                                    borderRadius: 'gray.100',
                                }}
                                placeholder="message"
                                />
                        </FormControl>
                        <FormControl id="name" float="right">
                            <Button
                                variant="solid"
                                // bg="#0D74FF"
                                bg="#1C6FEB"
                                color="white"
                                _hover={{}}>
                                Send Message
                            </Button>
                        </FormControl>
                        </VStack>
                    </Box>
                </Box>
                {/* <Box
                    height={'300px'}
                    rounded={'2xl'}
                    boxShadow={'2xl'}
                    width={'full'}
                    overflow={'hidden'}> */}
                    {/* <Image
                        alt={'Hero Image'}
                        fit={'cover'}
                        align={'center'}
                        w={'100%'}
                        h={'100%'}
                        src={
                            'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
                        }
                    /> */}
                {/* </Box> */}
            </Flex>
        </Stack>
        </Container>
    );
}