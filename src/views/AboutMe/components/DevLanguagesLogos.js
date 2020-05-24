import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import ScrollAnimation from 'react-animate-on-scroll';

import C from '../../../assets/images/c.png';
import CSS from '../../../assets/images/css.png';
import ES6 from '../../../assets/images/es6.png';
import HTML from '../../../assets/images/html5.png';
import JAVA from '../../../assets/images/java.png';
import JS from '../../../assets/images/js.png';
import TS from '../../../assets/images/ts.png';
import NODE from '../../../assets/images/node.png';
import POSTGRESQL from '../../../assets/images/postgresql.png';
import REACT from '../../../assets/images/react.png';
import SASS from '../../../assets/images/sass.png';
import TRAVIS from '../../../assets/images/travis.png';
import CYPRESS from '../../../assets/images/cypress.png';

const useStyle = makeStyles((theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
    },
    logosContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        marginLeft: '5%',
        width: '90%'
    }
}));

const DevLanguagesLogos = (props) => {
    const classes = useStyle();
    const logos = [HTML, CSS, JS, REACT, NODE, POSTGRESQL, SASS, TS, ES6, CYPRESS, TRAVIS, JAVA, C];
    const INITIAL_DELAY = 500;

    return (
        <Box className={classes.container}>
            <Box className={classes.logosContainer}>
                {logos.map((logo, index) => 
                    <ScrollAnimation 
                        animateIn='fadeInUp'
                        delay={INITIAL_DELAY + index * 120}
                        initiallyVisible={false}
                        animateOnce={true}
                    >
                        <Box key={logo.concat(index)} 
                            style={{ 
                                backgroundImage: `url(${logo})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                width: 80,
                                height: 80,
                                margin: 2
                            }} 
                        />
                    </ScrollAnimation>
                )}
            </Box>
        </Box>
    )
};

export default DevLanguagesLogos;
