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
    Link
} from "@chakra-ui/react";

function ErrorLayout() {
    return (
        <Container maxW='container.xl' mt={'2rem'}>
        <Stack
            align={'center'}
            spacing={{ base: 8, md: 10 }}
            pt='10'
            direction={{ base: 'column', md: 'row' }}>
            <Stack flex={1} align='center'>
                <Heading
                    lineHeight={1.1}
                    fontWeight={600}
                    fontSize='125'>
                    <Text as={'span'}>
                        404
                    </Text>
                </Heading>
                <Text>Page Not Found</Text>
                <Text color={'gray.500'} pb='10'>
                    This page you're looking for does not seem to exist
                </Text>
                <Button
                    my={'1rem'}
                    variant="solid"
                    // bg="#0D74FF"
                    bg="#008080"
                    color="white"
                    _hover={{ backgroundColor: 'teal.400' }}
                    >
                    <Link href='/' style={{ textDecoration: 'none' }}>
                        Go to Home
                    </Link>
                </Button>
            </Stack>
        </Stack>
        </Container>
    );
}

export default ErrorLayout;