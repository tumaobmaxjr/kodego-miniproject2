import React from 'react';
import { Outlet } from 'react-router-dom';
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  useColorMode,
  Stack,
  Spacer,
  Container
} from '@chakra-ui/react';
import { HamburgerIcon, SmallCloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';

// const Links = ['About', 'Contact', 'Team'];

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

export default function Simple() {
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
            {/* {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))} */}
            <Link as={NavLink} end to="/about">
              About
            </Link>
            <Link as={NavLink} end to="/contact">
              Contact
            </Link>
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
            <Link as={NavLink} to="./pages/about">
              About
            </Link>
            <Link as={NavLink} to="./pages/contact">
              Contact
            </Link>
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