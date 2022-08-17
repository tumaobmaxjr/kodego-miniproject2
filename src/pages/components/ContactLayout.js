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
    Stack,
    Button,
    VStack,
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
    MdOutlineEmail,
} from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactLayout() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_p6ey2wf', 'template_m14tbfg', form.current, 'p5RqdtU-D5pgYAT16')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <Container maxW='container.xl'>
            <Stack
                align={'center'}
                spacing={{ base: 8, md: 10 }}
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
                                <form
                                 ref={form} onSubmit={sendEmail}
                                >
                                    <FormControl id="name">

                                        <FormLabel>Name</FormLabel>
                                        <Input type="text" size="md" name="fullname" />

                                        <FormLabel>Email</FormLabel>
                                        <Input type="email" size="md" name="email" />

                                        <FormLabel>Message</FormLabel>
                                        <Textarea
                                            borderColor="#E0E1E7"
                                            _hover={{
                                                borderRadius: 'gray.100',
                                            }}
                                            placeholder="message"
                                            name="message"
                                        />
                                        <Button
                                            type="submit"
                                            value="Send"
                                            my={'1rem'}
                                            variant="solid"
                                            // bg="#0D74FF"
                                            bg="#1C6FEB"
                                            color="white"
                                            _hover={{}}>
                                            Send Message
                                        </Button>

                                    </FormControl>
                                </form>
                            </VStack>
                        </Box>
                    </Box>
                </Flex>
            </Stack>
        </Container>
    );
}