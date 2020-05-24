import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import ScrollAnimation from 'react-animate-on-scroll';

import { Element } from 'react-scroll';

import { colors } from '../../constants';
import AboutMe from '../AboutMe';
import Projects from '../Projects';
import Contact from '../Contact';
import { Navigation, HomeScreen } from './components';

const useStyles = makeStyles((theme) => ({
    firstScreen: {
        background: colors.gradient,
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    secondScreen: {
        height: '100vh',
        width: '100vw',
        backgroundColor: theme.palette.white,
        [theme.breakpoints.down('xs')]: {
            height: '190vh',
        }
    },
    thirdScreen: {
        height: '200vh',
        width: '100vw',
        backgroundColor: theme.palette.background.default,
        [theme.breakpoints.down('sm')]: {
            height: '160vh',
        },
        [theme.breakpoints.down('xs')]: {
            height: '280vh',
        }
    },
    firthScreen: {
        height: '100vh',
        width: '100vw',
        backgroundColor: theme.palette.white,
        [theme.breakpoints.down('xs')]: {
            height: '120vh',
        }
    },
}));       
 
const Home = (props) => {
    const classes = useStyles();

    return (
        <Box>
            <Navigation />
            <Element name="screen1" className="element" >
                <Box className={classes.firstScreen}>
                 <HomeScreen />
                </Box>
            </Element>
            <Element name="screen2" className="element">
                <ScrollAnimation animateIn="fadeIn">
                    <Box className={classes.secondScreen}>
                        <AboutMe  />
                    </Box>
                </ScrollAnimation>
            </Element>
            <Element name="screen3" className="element">
                <ScrollAnimation animateIn="fadeIn">
                    <Box className={classes.thirdScreen}>
                        <Projects />
                    </Box>
                </ScrollAnimation>
            </Element>  
            <Element name="screen4" className="element">
                <ScrollAnimation animateIn="fadeIn">
                    <Box className={classes.firthScreen}>
                        <Contact />
                    </Box>
                </ScrollAnimation>
            </Element>              
        </Box>
    )
};

export default Home;
