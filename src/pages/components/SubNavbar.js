import React from 'react';
import { Outlet } from 'react-router-dom';
import {
  Box,
  Grid, GridItem,
  Tabs, TabList, Tab,
} from '@chakra-ui/react';
import { LinkContainer } from "react-router-bootstrap";
import { Nav } from "react-bootstrap";
import "../periodictable/PeriodicTable.css";

export default function SubNavbar() {

  return (
    <>
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
                <LinkContainer to="/home/periodicdata" id="links">
                  <Nav.Link>
                    <Tab>
                      Table
                    </Tab>
                  </Nav.Link>
                </LinkContainer>

                <LinkContainer to="/home/elementinfo" id="links">
                  <Nav.Link>
                    <Tab>
                      List with properties
                    </Tab>
                  </Nav.Link>
                </LinkContainer>

                <LinkContainer to="/home/scienceblog" id="links">
                  <Nav.Link>
                    <Tab>
                      Blogs
                    </Tab>
                  </Nav.Link>
                </LinkContainer>

                <LinkContainer to="/home/games" id="links">
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
    
    <Outlet />

    </>
  );
}