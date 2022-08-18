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
    Textarea,
    ButtonGroup,
    IconButton,
    Divider,
    RequiredIndicator
} from "@chakra-ui/react";
import {
    MdPhone,
    MdEmail,
    MdLocationOn,
} from "react-icons/md";
import "../periodictable/PeriodicTable.css";
import { FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactLayout() {
    
    const [emailSent, setEmailSent] = useState(false);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_p6ey2wf', 'template_m14tbfg', form.current, 'p5RqdtU-D5pgYAT16')
            .then((result) => {
                console.log(result.text);
                setEmailSent(true);
            }, (error) => {
                console.log(error.text);
            });
            
            e.target.reset();
            
    };

    //hide succesful messages
    setTimeout(() => {
        setEmailSent(false);
    }, 5000);

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
                        Feel free to contact us via email or direct message on any of our social media channels, 
                        and don't forget to follow us!
                    </Text>
                    <Box>
                        <VStack pl={0} spacing={1} alignItems="flex-start">
                            <Button
                                size="md"
                                height="48px"
                                width="200px"
                                variant="ghost"
                                _hover={{ border: '1px solid #008080' }}
                                leftIcon={<MdPhone color="#008080" size="20px" />}>
                                +63 900 000 0000
                            </Button>
                            <Button
                                size="md"
                                height="48px"
                                width="200px"
                                variant="ghost"
                                _hover={{ border: '1px solid #008080' }}
                                leftIcon={<MdEmail color="#008080" size="20px" />}>
                                ptable@email.com
                            </Button>
                            <Button
                                size="md"
                                height="48px"
                                width="200px"
                                variant="ghost"
                                _hover={{ border: '1px solid #008080' }}
                                leftIcon={<MdLocationOn color="#008080" size="20px" />}>
                                Manila, Philippines
                            </Button>
                            <Divider py={'5px'}/>
                            <ButtonGroup variant="ghost" spacing={6} pt={'15px'}>
                                <IconButton as="a" href="https://github.com/tumaobmaxjr/kodego-miniproject2" isRound='true' aria-label="Github" icon={<FaGithub fontSize="30px" />}/>
                                <IconButton as="a" href="#" isRound='true' aria-label="Twitter" icon={<FaTwitter fontSize="30px" />} />
                                <IconButton as="a" href="#" isRound='true' aria-label="Instagram" icon={<FaInstagram fontSize="30px" />} />
                            </ButtonGroup>
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

                    <Box bg="gray.100" borderRadius="lg" pb={'2rem'}>
                        <Box m={8} color="#0B0E3F">
                            <VStack spacing={5}>
                                <form ref={form} onSubmit={sendEmail}>
                                    <FormControl id="name" isRequired>
                                        <FormLabel htmlFor="fname" requiredIndicator=''>Name</FormLabel>
                                        <Input mb={'1rem'} borderColor="gray.400" type="text" size="md" name="fullname" _hover={{ border: '1px solid #008080' }} />

                                        <FormLabel requiredIndicator=''>Email</FormLabel>
                                        <Input mb={'1rem'} borderColor="gray.400" type="email" size="md" name="email" _hover={{ border: '1px solid #008080' }}/>

                                        <FormLabel requiredIndicator=''>Message</FormLabel>
                                        <Textarea
                                            mb={'1rem'}
                                            borderColor="gray.400"
                                            name="message"
                                            _hover={{ border: '1px solid #008080' }}
                                        />
                                        <Button
                                            type="submit"
                                            value="Send"
                                            my={'1rem'}
                                            variant="solid"
                                            // bg="#0D74FF"
                                            bg="#008080"
                                            color="white"
                                            _hover={{ backgroundColor: 'teal.400' }}
                                            // onClick={() => { 
                                            //     if(Textarea.length > 1){
                                            //         setEmailSent(true)
                                            //     }
                                            // }}
                                            >
                                            Send Message
                                        </Button>
                                    </FormControl>
                                </form>
                            </VStack>
                            {emailSent && 
                            <Box position={'fixed'}>Your message has been sent!</Box> 
                            }
                        </Box>
                    </Box>
                </Flex>
            </Stack>
        </Container>
    );
}