import React from 'react';
import Navbar from '../../components/Nav';
import Intro from '../../sections/Intro';
import About from '../../sections/About';
import Experience from '../../sections/Experience';
import Projects from '../../sections/Projects';
import Contact from '../../sections/Contact';
import Footer from '../../components/Footer';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <div className='main'>
                <Intro/>
                <Intro/>
                <Intro/>
                <About/>
                <Experience/>
                <Projects/>
                <Contact/>
            </div>
            <Footer/>
        </div>
    );
};

export default Home;