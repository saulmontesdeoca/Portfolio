import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabPanels from '../TabPanels';
import { Container, Row, Col } from 'react-bootstrap';

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
    style: {textTransform: 'lowercase', fontFamily: 'Courier'}
  };
}

export default function VerticalTabs({size}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, display: 'flex', height: 'auto'}}
    >
        <Container fluid>
            <Row className='justify-content-center'>
                <Col sm={12} md={2} lg={2}>
                    <Tabs
                        orientation={ size === "sm" ? "horizontal" : "vertical"}
                        textColor="inherit"
                        indicatorColor="primary"
                        value={value}
                        onChange={handleChange}
                        aria-label="Vertical tabs example"
                        sx={{ borderRight: 1, borderColor: 'divider'}}
                        tabItemContainerStyle={{ height: '300px' }}
                    >
                        <Tab label="tesla" {...a11yProps(0)} tabItemContainerStyle={{ height: '300px' }}/>
                        <Tab label="oracle" {...a11yProps(1)} />
                        <Tab label="mlh" {...a11yProps(2)} />
                    </Tabs>
                </Col>
                <Col sm={12} md={10} lg={8} className='p-0'>
                  <TabPanels value={value} size={size}/>
                </Col>
            </Row>
        </Container>
    </Box>
  );
}