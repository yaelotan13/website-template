import React, { useState } from 'react';
import { Box, Typography, Avatar, TextField, Button, Input } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import ScrollAnimation from 'react-animate-on-scroll';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from 'react-scroll';
import { SwatchesPicker } from 'react-color';

import { Modal, ActionButton } from '../../../components';

const useStyle = makeStyles((theme) => ({
    container: {
        width: '100vw',
        height: '100vh'
    },
    content: {
        marginTop: '20vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatarContainer: {
        display: 'flex'
    },
    avatar: {
        width: 150,
        height: 150,
        marginBottom: '5vh',
        marginRight: '1vw',
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
    subHeaderContainer: {
        display: 'flex',
        alignItems: 'center',
        marginTop: '4%',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column'
        }
    },
    subHeader: {
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
        marginTop: '15vh',
        height: 60,
        width: 60,
        cursor: 'pointer',
        color: theme.palette.white,
        [theme.breakpoints.down('xs')]: {
            marginTop: '15vh',
        }
    },
    inputs: {
        display: 'flex',
        flexDirection: 'column'
    },
    backgroundColorTitle: {
        marginBottom: '2vh',
        fontWeight: theme.typography.subtitle2.fontWeight,
        fontFamily: theme.typography.h6.fontFamily,
    },
    input: {
        marginTop: '3vw',
        width: '30vw'
    }
}));

const HomeScreen = (props) => {
    const classes = useStyle();
    const [avatarImagePreview, setAvatarImagePreview] = useState(null);
    const [avatarImage, setAvatarImage] = useState(null);
    const [backgroundColor, setBackgroundColor] = useState('#00bcd4');
    const [mainHeader, setMainHeader] = useState('Your Main Header');
    const [subHeader, setSubHeader] = useState('A short cool description about you.. ');
    const [openEditModel, setOpenEditModel] = useState(false);

    const onFileChange = (event) => {
        setAvatarImage(event.target.files[0]);
        const url = window.URL.createObjectURL(event.target.files[0]);
        setAvatarImagePreview(url);
    };

    const handleMainHeaderChange = (event) => {
        setMainHeader(event.target.value);
    };

    const handleSubHeaderChange = (event) => {
        setSubHeader(event.target.value);
    };

    const handleBackgroundColorChnage = (color) => {
        setBackgroundColor(color.hex);
    };

    return (
        <Box className={classes.container} style={{
            backgroundColor: `${backgroundColor}`
        }}>
            <Modal 
                open={openEditModel} 
                handleClose={() =>  setOpenEditModel(false)}
                title="Edit Header"
            >   
                <Box className={classes.inputs}>
                    <Typography className={classes.backgroundColorTitle}>Background Color: </Typography>
                    <SwatchesPicker onChangeComplete={handleBackgroundColorChnage} />
                    <TextField className={classes.input} placeholder={mainHeader} onChange={handleMainHeaderChange} />
                    <TextField className={classes.input} placeholder={subHeader} onChange={handleSubHeaderChange} multiline rowsMax={3}/>
                </Box>
            </Modal>
            <ScrollAnimation 
                animateIn='fadeIn'
                delay={1000}
                duration={2}
                initiallyVisible={false}
                animateOnce={true}
            >
                <Box className={classes.content}>
                    <Box className={classes.avatarContainer}>
                        <Avatar className={classes.avatar} src={avatarImagePreview} />
                        <Input type="file" disableUnderline onChange={onFileChange} />
                    </Box>
                    <Typography className={classes.mainHeader} variant="h1">{mainHeader}</Typography>
                    <Box className={classes.subHeaderContainer}>
                        <ScrollAnimation
                            animateIn='fadeInDown'
                            delay={1500}
                            initiallyVisible={false}
                            animateOnce={true}
                        >
                            <Typography className={classes.subHeader} variant="h5">{subHeader}</Typography>
                        </ScrollAnimation>
                    </Box>          
                </Box>
                <ActionButton actionType="edit" handleClicked={() =>  setOpenEditModel(true)} />
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
