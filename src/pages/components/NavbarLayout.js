import React from 'react';
import { Outlet } from 'react-router-dom';
import {
  Box,
  Flex, Grid, GridItem,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  useColorMode,
  Stack,
  Container,
  Tabs, TabList, TabPanels, Tab, TabPanel
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

      <Grid
        templateAreas={`"head head"
                                "left right"`}
        gridTemplateColumns={'3fr 1fr'}
        mt={'1.5rem'}
        mx={{ base: '3%', md: '5%', lg: '6%' }}
      >
        <GridItem area={{ base: 'head', lg: 'left' }}>
          <Box>
            <Tabs colorScheme='teal' w={'auto'}>
              <TabList borderBottom={'0px'}>
                <LinkContainer to="/" id="links">
                  <Nav.Link>
                    <Tab>
                      Table
                    </Tab>
                  </Nav.Link>
                </LinkContainer>

                <LinkContainer to="/elementinfo" id="links">
                  <Nav.Link>
                    <Tab>
                      List with properties
                    </Tab>
                  </Nav.Link>
                </LinkContainer>

                <LinkContainer to="/scienceblog" id="links">
                  <Nav.Link>
                    <Tab>
                      Blogs
                    </Tab>
                  </Nav.Link>
                </LinkContainer>

                <LinkContainer to="/games" id="links">
                  <Nav.Link>
                    <Tab>
                      Games
                    </Tab>
                  </Nav.Link>
                </LinkContainer>

              </TabList>
            </Tabs>
          </Box>
        </GridItem>
      </Grid>

      <Container>
        <Outlet />
      </Container>
    </>
  );
}