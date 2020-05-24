import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import ScrollAnimation from 'react-animate-on-scroll';

import phone from '../../assets/images/phone.png';
import email from '../../assets/images/email.png';
import rocket from '../../assets/images/rocket.gif';

const useStyle = makeStyles((theme) => ({
    container: {
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column-reverse'
        }
    },
    content: {
        width: '50vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            width: '100vw',
            height: '50vh',
        }
    },
    mainTitle: {
        marginTop: '25vh',
        fontFamily: theme.typography.h1.fontFamily,
        [theme.breakpoints.down('sm')]: {
            marginTop: 0,
            fontSize: theme.typography.h3.fontSize,
        }
    },
    subTitle: {
        marginTop: '2vh',
        fontFamily: theme.typography.h1.fontFamily,
        [theme.breakpoints.down('sm')]: {
            marginTop: '1vh',
            fontSize: theme.typography.h5.fontSize
        }
    },
    imageContainer: {
        width: '50vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            marginTop: '10vh',
            width: '100vw',
            height: '50vh',
        }
    },
    image: {
        height: '60%',
        width: '70%',
        backgroundImage:`url(${rocket})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        [theme.breakpoints.down('sm')]: {
            width: 300,
            height: 300,
        }
    },
    contactInfoContainer: {
        display: 'flex',
        marginTop: '10vh',
        width: '45vw',
        justifyContent: 'space-between',
        [theme.breakpoints.down('sm')]: {
            width: '90vw',
            flexDirection: 'column',
            marginTop: '5vh',
            alignItems: 'center'
        }
    },
    contactInfo: {
        width: '20vw',
        height: '30vh',
        borderRadius: 10,
        boxShadow: "1px 1px 3px #9E9E9E",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center', 
        [theme.breakpoints.down('sm')]: {
            width: '50vw',
            height: '10vh',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginBottom: '3vh'
        },
        [theme.breakpoints.down('xs')]: {
            width: '60vw',
        }
    },
    icon: {
        marginBottom: '3vh',
        height: '7vh',
        width: '7vw',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        [theme.breakpoints.down('sm')]: {
            height: 30,
            width: 30,
            marginTop: '2vh',
            marginLeft: '3vw',
            marginRight: '5vw'
        }
    },
    iphoneIcon: {
        backgroundImage: `url(${phone})`,

    },
    emailIcon: {
        backgroundImage: `url(${email})`,
    },
    info: {
        fontSize: theme.typography.h5.fontSize,
        fontFamily: theme.typography.h5.fontFamily,
        [theme.breakpoints.down('sm')]: {
            fontSize: theme.typography.h6.fontSize,
        }
    }
}));

const Contact = (props) => {
    const classes = useStyle();

    return (
        <Box className={classes.container}>
            <Box className={classes.content}>
                <ScrollAnimation 
                    animateIn='fadeIn'
                    delay={300}
                    initiallyVisible={false}
                    animateOnce={true}
                >
                    <Typography className={classes.mainTitle} variant="h1">Let's Keep In Touch!</Typography>
                </ScrollAnimation>   
                <ScrollAnimation 
                    animateIn='fadeIn'
                    delay={500}
                    initiallyVisible={false}
                    animateOnce={true}
                >
                    <Typography className={classes.subTitle} variant="h4">I would love to hear from you 🙂</Typography>
                </ScrollAnimation>   
                <Box className={classes.contactInfoContainer}>
                    <ScrollAnimation 
                        animateIn='fadeIn'
                        delay={900}
                        initiallyVisible={false}
                        animateOnce={true}
                    >
                        <Box className={classes.contactInfo}>
                            <Box className={[classes.icon, classes.iphoneIcon].join(" ")} />
                            <Typography className={classes.info}>
                                <a href="tel:054-6323450">054-6323450</a>
                            </Typography>
                        </Box>
                    </ScrollAnimation> 
                    <ScrollAnimation 
                        animateIn='fadeIn'
                        delay={1200}
                        initiallyVisible={false}
                        animateOnce={true}
                    >
                    <Box className={classes.contactInfo}>
                        <Box className={[classes.icon, classes.emailIcon].join(" ")}/>
                        <Typography className={classes.info}>
                            <a href="mailto:yaelotan19@gmail.com">yaelotan19@gmail.com</a>
                        </Typography>
                    </Box>
                    </ScrollAnimation> 
                </Box>
       
            </Box>
            <Box className={classes.imageContainer}>
                <Box className={classes.image} />
            </Box>
        </Box>
    )
};

export default Contact;
