import React from 'react';
import { Box, Typography, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import ScrollAnimation from 'react-animate-on-scroll';

const useStyle = makeStyles((theme) => ({
    project: {
        height: '50vh',
        width: '35vw',
        marginBottom: '3vh',
        borderRadius: 10,
        boxShadow: "1px 1px 3px #9E9E9E",
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: theme.palette.white,
        [theme.breakpoints.down('sm')]: {
            width: '35vw',
            height: '40vh',
        },
        [theme.breakpoints.down('xs')]: {
            width: '75vw',
            marginBottom: '4vh',
            height: '45vh',
        }
    },
    titleContainer: {
        height: '5vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        height: '30%',
        [theme.breakpoints.down('sm')]: {
            height: '40%',
        }
    },
    title: {
        marginTop: '2vh',
        fontFamily: theme.typography.h6.fontFamily,
        fontWeight: 600,
        fontSize: theme.typography.h5.fontSize,
        [theme.breakpoints.down('xs')]: {
            marginTop: '4vh',
        }
    },
    description: {
        marginTop: '2vh',
        paddingLeft: 20,
        paddingRight: 20,
        fontFamily: theme.typography.h6.fontFamily,
        [theme.breakpoints.down('sm')]: {
            paddingLeft: 10,
            paddingRight: 10
        }
    },
    image: {
        height: '70%',
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            height: '60%',
        },
        [theme.breakpoints.down('xs')]: {
            height: '70%',
        }
    },
}));

const Project = (props) => {
    const classes = useStyle();
    const { delay, title, image, description, link } = props;
        
    return (
        <ScrollAnimation 
            animateIn='fadeInUp'
            delay={delay}
            initiallyVisible={false}
            animateOnce={true}
        >
            <Link href={link} target="_blank" color="inherit" underline="none" title="view project">
                <Box 
                    className={classes.project} 
                >
                    <Box className={classes.header}>
                        <Typography className={classes.title}>{title}</Typography>
                        <Typography className={classes.description}>{description}</Typography>
                    </Box>
                    <Box 
                        className={classes.image}
                        style={{
                            backgroundImage: `url(${image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                        }}
                    >
                    </Box>
                </Box>
            </Link>
        </ScrollAnimation>
    )
};

export default Project;
