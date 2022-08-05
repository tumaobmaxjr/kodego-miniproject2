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
        <Container maxW='container.xl'>
        <Stack
            align={'center'}
            spacing={{ base: 8, md: 10 }}
            pt='10'
            pb='225'
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
                <Text color={'gray.500'} pb='100'>
                    This page you're looking for does not seem to exist
                </Text>
                <Button
                    variant="solid"
                    // bg="#0D74FF"
                    bg="#1C6FEB"
                    color="white"
                    _hover={{}}>
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