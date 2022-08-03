import React from 'react';
import { Outlet } from 'react-router-dom';
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  useColorModeValue,
  useColorMode,
  Stack,
  Container
} from '@chakra-ui/react';
import { HamburgerIcon, SmallCloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav} from "react-bootstrap";


const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

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
            
            {/* <div>
              {links.map(link => (<Link className={link.className} activeClassName={link.activeClassName} to={link.to}>{link.name}</Link> ))}
            </div> */}
            {/* {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))} */}
              <LinkContainer to="/about">
                <Nav.Link> About</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contact">
                <Nav.Link>Contact</Nav.Link>
              </LinkContainer>

            {/* <Link as={NavLink} end to="my-path" _hover={{textDecoration: 'none'}} _focus={{outline:'none'}} _activeLink={{color:'#666'}} >
              {({ isActive }) => (
                <Flex justifyContent="space-between">
                  <Text>{children}</Text>
                  {isActive && <Icon as={FiChevronRight} marginLeft={2} />}
                </Flex> 
              )}
            </Link> */}

            <IconButton isRound='true' onClick={toggleColorMode}>
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </IconButton>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box px='0' pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {/* {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))} */}
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