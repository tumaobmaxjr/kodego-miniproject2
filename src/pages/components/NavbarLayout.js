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
  Container,
} from '@chakra-ui/react';
import { HamburgerIcon, SmallCloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { LinkContainer } from "react-router-bootstrap";
import { Nav } from "react-bootstrap";
import "../periodictable/PeriodicTable.css";

export default function NavbarLayout() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Container maxW='100%' bg={useColorModeValue('gray.100', 'gray.900')} backdropFilter="auto" backdropBlur='10px' position={'fixed'} left='0' top='0' zIndex={'10'}> 
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            icon={isOpen ? <SmallCloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            isRound='true'
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack ml={5} alignItems={'center'}>
          {/* <img src="/logo.png" alt="logo" width="5%"/> */}
            {/* <Box> Logo</Box> */}
            <LinkContainer to="/">
              <Nav.Link>
                <img src="/logo.png" alt="logo" width="50px"/>
              </Nav.Link>
            </LinkContainer>
            {/* <link rel="icon" href="./public/logo.png" /> */}
          </HStack>
          
          <HStack
            as={'nav'}
            spacing={5}
            display={{ base: 'none', md: 'flex' }}
            >
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

      <Outlet />
    </>
  );
}