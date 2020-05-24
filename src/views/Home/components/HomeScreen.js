import React from 'react';
import { Box, Typography, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import ScrollAnimation from 'react-animate-on-scroll';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from 'react-scroll';

import yael from '../../../assets/images/me1.jpg';

const useStyle = makeStyles((theme) => ({
    content: {
        marginTop: '20vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    me: {
        width: 150,
        height: 150,
        marginBottom: '5vh',
        [theme.breakpoints.down('xs')]: {
            width: 100,
            height: 100
        }
    },
    mainHeader: {
        color: theme.palette.white,
        fontFamily: theme.typography.h6.fontFamily,
        [theme.breakpoints.between('sm', 'xl')]: {
            fontSize: '78px',
            fontWeight: theme.typography.h1.fontWeight
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '40px',
        }
    },
    whoAmIContainer: {
        display: 'flex',
        alignItems: 'center',
        marginTop: '8%',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column'
        }
    },
    whoAmI: {
        whiteSpace: 'pre-wrap',
        color: theme.palette.white,
        fontWeight: theme.typography.subtitle2.fontWeight,
        fontFamily: theme.typography.h6.fontFamily,
        [theme.breakpoints.between('sm', 'xl')]: {
            fontSize: '22px',
            
        },
        [theme.breakpoints.down('xs')]: {
            fontWeight: theme.typography.h5.fontWeight,
            fontSize: '12px',
        }
    },
    icon: {
        marginTop: '25vh',
        height: 60,
        width: 60,
        cursor: 'pointer',
        color: theme.palette.white,
        [theme.breakpoints.down('xs')]: {
            marginTop: '15vh',
        }
    },
}));

const HomeScreen = (props) => {
    const classes = useStyle();

    return (
        <Box>
            <ScrollAnimation 
                animateIn='fadeIn'
                delay={1000}
                duration={2}
                initiallyVisible={false}
                animateOnce={true}
            >
                <Box className={classes.content}>
                    <Avatar className={classes.me} alt="Yael Lotan" src={yael} />
                    <Typography className={classes.mainHeader} variant="h1">Hello, I am Yael</Typography>
                    <Box className={classes.whoAmIContainer}>
                        <ScrollAnimation
                            animateIn='fadeInDown'
                            delay={1500}
                            initiallyVisible={false}
                            animateOnce={true}
                        >
                            <Typography className={classes.whoAmI} variant="h5">Fullstack Developer 👩🏻‍💻   </Typography>
                        </ScrollAnimation>
                        <ScrollAnimation
                            animateIn='fadeInDown'
                            delay={2000}
                            initiallyVisible={false}
                            animateOnce={true}
                        >
                            <Typography className={classes.whoAmI} variant="h5"> Sushi Lover 🍣   </Typography>
                        </ScrollAnimation>
                        <ScrollAnimation
                            animateIn='fadeInDown'
                            delay={2500}
                            initiallyVisible={false}
                            animateOnce={true}
                        >
                            <Typography className={classes.whoAmI} variant="h5"> Volleyball Player 🏐</Typography>  
                        </ScrollAnimation>
                    </Box>          
                </Box>
                <ScrollAnimation
                    animateIn='fadeInDown'
                    delay={2500}
                    initiallyVisible={false}
                    animateOnce={true}
                >
                    <Link activeClass="active" className="screen2" to="screen2" spy={true} smooth={true} duration={500}>
                        <ExpandMoreIcon className={classes.icon} />
                    </Link>
                </ScrollAnimation>
            </ScrollAnimation>
        </Box>
    );
};

export default HomeScreen;
