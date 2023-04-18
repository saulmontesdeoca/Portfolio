import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Row, Col } from 'react-bootstrap';

function TabPanel(props) {
    const { children, value, index, size, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ pt: 2, pl: 2, pr: 0}}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
TabPanel.propTypes = {
children: PropTypes.node,
index: PropTypes.number.isRequired,
value: PropTypes.number.isRequired,
};

  
const TabPanels = ({value, size}) => {
    return (
        <div style={{fontFamily: 'Calibre'}}>
            <TabPanel value={value} index={0} size={size}>
                <Row>
                    <Col style={{fontFamily: 'Calibre'}}>
                        <h3>
                            software engineer <span className='light-color'>
                                @ <a target='_blank' rel="noreferrer" href='https://tesla.com' className='text-decoration-none'>tesla</a>
                                </span>
                        </h3>
                    </Col>
                </Row>
                <Row className='light-color-grey'>
                    <Col style={{fontFamily: 'Courier', color: 'rgb(138, 147, 173)', fontSize: '13px'}}><p>may 2023 - present</p></Col>
                </Row>
                <Row className='light-color-grey'>
                    <Col style={{fontFamily: 'Calibre', color: 'rgb(138, 147, 173)', fontSize: '18px'}}>
                        <ul>
                            <li>
                                team: tesla datalab team.
                            </li>
                            <li>
                                utilize dash/plotly to create intuitive and visually appealing data visualization dashboards, improving data analysis and decision-making capabilities. 
                            </li>
                            <li>
                                collaborate with teams to gather requirements and implement advanced features to enhance user experience and provide actionable insights.
                            </li>
                        </ul>
                    </Col>
                </Row>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Row>
                    <Col style={{fontFamily: 'Calibre'}}>
                        <h3>
                            software developer I <span className='light-color'>
                                @ <a target='_blank' rel="noreferrer" href='https://oracle.com' className='text-decoration-none'>oracle</a>
                                </span>
                        </h3>
                    </Col>
                </Row>
                <Row className='light-color-grey'>
                    <Col style={{fontFamily: 'Courier', color: 'rgb(138, 147, 173)', fontSize: '13px'}}><p>aug 2022 - jan 2023</p></Col>
                </Row>
                <Row className='light-color-grey'>
                    <Col style={{fontFamily: 'Calibre', color: 'rgb(138, 147, 173)', fontSize: '18px', width: '316px'}}>
                        <ul>
                            <li>
                                team: oracle cloud infrastructure dbm team.
                            </li>
                            <li>
                                designed and developed user-friendly, robust and scalable frontend components for oracle cloud database 
                                management services, improving overall user experience. 
                            </li>
                            <li>
                                implemented advanced features such as utility components that allow cross interaction with the operation insights and 
                                identity & access management services of the oci.
                            </li>
                            <li>
                                collaborated with cross-functional teams, including developers, designers, and product managers, to identify and 
                                prioritize product requirements.
                            </li>
                        </ul>
                    </Col>
                </Row>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Row>
                    <Col style={{fontFamily: 'Calibre'}}>
                        <h3>
                            production engineer fellowship <span className='light-color'>
                                @ <a target='_blank' rel="noreferrer" href='https://mlh.io' className='text-decoration-none'>mlh</a>
                                </span>
                        </h3>
                    </Col>
                </Row>
                <Row className='light-color-grey'>
                    <Col style={{fontFamily: 'Courier', color: 'rgb(138, 147, 173)', fontSize: '13px'}}><p>summer '21</p></Col>
                </Row>
                <Row className='light-color-grey'>
                    <Col style={{fontFamily: 'Calibre', color: 'rgb(138, 147, 173)', fontSize: '18px', width: '316px'}}>
                        <ul>
                            <li>
                                implemented deployment to aws centos machines, services, monitoring, containers, ci/cd, and 
                                testing in two projects. my team's final project was awarded as the best implementation of production 
                                engineering within my pod.
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row className='mt-2'>
                    <Col style={{fontFamily: 'Calibre'}}>
                        <h3>
                            software engineer fellowship <span className='light-color'>
                                @ <a target='_blank' rel="noreferrer" href='https://mlh.io' className='text-decoration-none'>mlh</a>
                                </span>
                        </h3>
                    </Col>
                </Row>
                <Row className='light-color-grey'>
                    <Col style={{fontFamily: 'Courier', color: 'rgb(138, 147, 173)', fontSize: '13px'}}><p>fall '20</p></Col>
                </Row>
                <Row className='light-color-grey'>
                    <Col style={{fontFamily: 'Calibre', color: 'rgb(138, 147, 173)', fontSize: '18px', width: '316px'}}>
                        <ul>
                            <li>
                                worked on the full-stack development of a total of 4 projects, varying from game development to machine learning,
                                from which 3 of them were winners in the inner internship hackathons.
                            </li>
                        </ul>
                    </Col>
                </Row>
            </TabPanel>
        </div>
    );
};

export default TabPanels;