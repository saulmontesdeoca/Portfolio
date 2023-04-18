import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Chip from '@mui/material/Chip';

const About = () => {
    return (
        <section id='about'>
            <Container className='py-100'>
                <Row>
                    <Col sm={12} md={6}>
                        <Row>
                            <h2 className='section-subtitle'>about</h2>
                        </Row>
                    </Col>
                    <Col sm={12} md={6} />
                </Row>
                <Row>
                    <Col sm={12} md={12} lg={6}>
                        <Row>
                            <p className='text-wrap f-20 mt-4' style={{color: 'rgb(138, 147, 173)'}}>
                                hey! my name is Saul and i'm a <span className='light-color'>software engineer</span> based
                                in the vibrant city of <span className='light-color'>berlin. </span> 
                                My coding journey kicked off in 2017, with a focus on web development, 
                                and I've been on an epic quest for code excellence ever since.
                            </p>
                            <p className='text-wrap f-20 mt-4' style={{color: 'rgb(138, 147, 173)'}}>
                                during my college days, i had the thrill of scoring two internships at  <span className='light-color'>mlh</span> - one 
                                as a software engineer and another as a site reliability engineer - which 
                                fueled my passion for creating reliable and cutting-edge software. after graduating, 
                                i embarked on an exciting adventure at <span className='light-color'>oracle</span>, where i honed my skills even further. 
                                but the real thrill came when i joined the electrifying team at <span className='light-color'>tesla</span>, 
                                where I'm currently writing code that powers the next generation of electric vehicles.
                            </p>
                            <p className='text-wrap f-20 mt-4' style={{color: 'rgb(138, 147, 173)'}}> 
                                my code-maestro's baton and orchestra for composing software symphonies:
                            </p> 
                        </Row>
                        <Row>
                            <Col>
                                <Chip className='m-1' label="👾 javascript" color='primary' variant="outlined" style={{fontFamily: 'Courier'}} onClick={()=>{}}/>
                                <Chip className='m-1' label="🐍 python" color='primary' variant="outlined" style={{fontFamily: 'Courier'}} onClick={()=>{}}/>
                                <Chip className='m-1' label="⚛️ react" color='primary' variant="outlined" style={{fontFamily: 'Courier'}} onClick={()=>{}}/>
                                <Chip className='m-1' label="🚀 flask" color='primary' variant="outlined" style={{fontFamily: 'Courier'}} onClick={()=>{}}/>
                                <Chip className='m-1' label="📊 dash" color='primary' variant="outlined" style={{fontFamily: 'Courier'}} onClick={()=>{}}/>
                                <Chip className='m-1' label="🐳 docker" color='primary' variant="outlined" style={{fontFamily: 'Courier'}} onClick={()=>{}}/>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={12} md={12} lg={6} className='d-flex justify-content-around'>
                        <div className='wrapper mt-5'>
                            <div className='img'>
                                <img style={{height: 'inherit'}} alt='profile pic' src='profilepic.jpeg'/>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;