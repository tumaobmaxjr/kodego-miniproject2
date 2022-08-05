import React from 'react';
import { Outlet } from 'react-router-dom';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  useColorMode,
  Stack,
  Container
} from '@chakra-ui/react';
import { HamburgerIcon, SmallCloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { LinkContainer } from "react-router-bootstrap";
import { Nav } from "react-bootstrap";


export default function NavbarLayout() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Container maxW='100%' px={10} bg={useColorModeValue('gray.100', 'gray.900')} backdropFilter="auto" backdropBlur='10px'>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            icon={isOpen ? <SmallCloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            isRound='true'
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>Logo</Box>
          </HStack>
          <HStack
            as={'nav'}
            spacing={5}
            display={{ base: 'none', md: 'flex' }}>
              <LinkContainer to="/about">
                <Nav.Link>
                  About
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contact">
                <Nav.Link>
                  Contact
                </Nav.Link>
              </LinkContainer>
            <IconButton isRound='true' onClick={toggleColorMode}>
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </IconButton>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box px='0' pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              <LinkContainer to="/about">
                <Nav.Link> About</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contact">
                <Nav.Link>Contact</Nav.Link>
              </LinkContainer>
              <IconButton isRound='true' onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </IconButton>
            </Stack>
          </Box>
        ) : null}
      </Container>
      <Container>
        <Outlet />
      </Container>
    </>
  );
}