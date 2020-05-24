import React, { useState } from 'react';
import { Hidden, Toolbar, Button, Typography, Box, IconButton, TextField } from '@material-ui/core';
import { Link } from 'react-scroll';
import { makeStyles } from '@material-ui/styles';
import { SwatchesPicker } from 'react-color';

import edit from '../../../assets/icons/edit.png';
import { Modal, ActionButton, Icon, ColorsModal } from '../../../components';
import { colors } from '../../../constants';

const useStyle = makeStyles((theme) => ({
    navBar: {
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'flex-end',
    },
    navBarItem: {
        marginLeft: '5%',
        fontFamily: theme.typography.h6.fontFamily,
        fontWeight: theme.typography.h2.fontWeight,
    },
    highlightNavBar: {
        color: theme.palette.primary.dark
    },
    editBackgroundImageConatiner: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '1vh',
    },
    backgroundColorTitle: {
        fontWeight: theme.typography.subtitle2.fontWeight,
        fontFamily: theme.typography.h6.fontFamily,
    },
    buttonContainer: {
        marginRight: '2vw'
    }
}));

const DesktopNavigation = (props) => {
    const classes = useStyle();
    const [openModal, setOpenModal] = useState(false);
    const [currentlyEditing, setCurrentlyEditing] = useState(null);
    const [openColorsModal, setOpenColorsModal] = useState(false);
    const [backgroundColor, setBackgroundColor] = useState('#607d8b');
    const [navigationItemColor, setNavigationItemColor] = useState('white');
    const [selectedNavigationItemColor, setSelectedNavigationItemColor] = useState('red');
    const { screens, setCurrentScreen, currnetScreen } = props;

    const handleBackgroundColorChange = (color) => {
        console.log(currentlyEditing);
        if (currentlyEditing === 'navigationItem') {
            console.log('setNavigationItemColor(navigationItem)')
            setNavigationItemColor(color.hex);
        } else if (currentlyEditing === 'selectedNavigationItem') {
            console.log('setSelectedNavigationItemColor(selectedNavigationItem)')
            setSelectedNavigationItemColor(color.hex);
        } else if (currentlyEditing === 'backgroundColor') {
            console.log('setBackgroundColor(backgroundColor)')
            setBackgroundColor(color.hex);
        }
        // switch (currentlyEditing) {
        //     case 'navigationItem': {
        //         console.log('editing backgroundColor')
        //         setNavigationItemColor(color.hex);
        //     }
        //     case 'selectedNavigationItem': {
        //         console.log('editing backgroundColor')
        //         setSelectedNavigationItemColor(color.hex);
        //     }
        //     case 'backgroundColor': {
        //         console.log('editing backgroundColor')
        //         setBackgroundColor(color.hex);
        //     } 
        // }
    };

    const handleOpenModel = (type) => {
        console.log(type)
        if (type === 'navigationItem') {
            console.log('setCurrentlyEditing(navigationItem)')
            setCurrentlyEditing('navigationItem');
        } else if (type === 'selectedNavigationItem') {
            console.log('setCurrentlyEditing(selectedNavigationItem)')
            setCurrentlyEditing('selectedNavigationItem');
        } else if (type === 'backgroundColor') {
            console.log('setCurrentlyEditing(backgroundColor)')
            setCurrentlyEditing('backgroundColor');
        }
        // switch(type) {
        //     case 'navigationItem': {
        //         console.log('setCurrentlyEditing(navigationItem)')
        //         setCurrentlyEditing('navigationItem');
        //     }
        //     case 'selectedNavigationItem': {
        //         console.log('setCurrentlyEditing(selectedNavigationItem)')
        //         setCurrentlyEditing('selectedNavigationItem');
        //     }
        //     case 'backgroundColor': {
        //         console.log('setCurrentlyEditing(backgroundColor)')
        //         setCurrentlyEditing('backgroundColor');
        //     }

            
        // }
        setOpenColorsModal(true);
    };

    return (
        <Hidden smDown>
            <ColorsModal open={openColorsModal} handleClose={() => setOpenColorsModal(false)} handleColorChnage={handleBackgroundColorChange} />
            <Modal open={openModal} handleClose={() => setOpenModal(false)} title="Edit Navigation Bar">
                <Box className={classes.editBackgroundImageConatiner}>
                    <Typography className={classes.backgroundColorTitle}>Background Color: </Typography>
                    <IconButton onClick={() => handleOpenModel('backgroundColor')}>
                        <Icon icon={edit} />
                    </IconButton>
                </Box>
                <Box className={classes.editBackgroundImageConatiner}>
                    <Typography className={classes.backgroundColorTitle}>Items Color: </Typography>
                    <IconButton onClick={() => handleOpenModel('navigationItem')}>
                        <Icon icon={edit} />
                    </IconButton>
                </Box>
                <Box className={classes.editBackgroundImageConatiner}>
                    <Typography className={classes.backgroundColorTitle}>Selected Item Color: </Typography>
                    <IconButton onClick={() => handleOpenModel('selectedNavigationItem')}>
                        <Icon icon={edit} />
                    </IconButton>
                </Box>
            </Modal>
            <Toolbar style={{ backgroundColor: `${backgroundColor}`}} className={classes.navBar}>
                <Box className={classes.buttonContainer}>
                    <ActionButton actionType="edit" handleClicked={() => setOpenModal(true)} style="contained" title="Navigation"/>
                </Box>
                {screens.map((screen, index) => 
                    <Link 
                        key={screen.concat(index)} 
                        activeClass="active" 
                        className={`screen${index + 1}`} 
                        to={`screen${index + 1}`} 
                        spy={true} 
                        smooth={true} 
                        duration={500} 
                        onSetActive={() => {setCurrentScreen(`screen${index + 1}`)}}
                    >
                        <Button 
                            color="inherit" 
                            style={{ color: currnetScreen === `screen${index + 1}` ? `${selectedNavigationItemColor}` : `${navigationItemColor}`}}
                            className={classes.navBarItem}
                        >
                            {screen}
                        </Button>
                    </Link>
                )}
            </Toolbar>
        </Hidden>
    );
};

export default DesktopNavigation;