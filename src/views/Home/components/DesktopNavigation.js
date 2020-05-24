import React from 'react';
import { Hidden, Toolbar, Button } from '@material-ui/core';
import { Link } from 'react-scroll';
import { makeStyles } from '@material-ui/styles';

import { colors } from '../../../constants';

const useStyle = makeStyles((theme) => ({
    navBar: {
        justifyContent: 'flex-end',
        background: colors.gradient,
    },
    navBarItem: {
        marginLeft: '5%',
        fontFamily: theme.typography.h6.fontFamily,
        fontWeight: theme.typography.h2.fontWeight,
    },
    highlightNavBar: {
        color: theme.palette.primary.dark
    },
}));

const DesktopNavigation = (props) => {
    const classes = useStyle();
    const { screens, setCurrentScreen, currnetScreen } = props;

    return (
        <Hidden smDown>
            <Toolbar className={classes.navBar}>
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
                            className={currnetScreen === `screen${index + 1}` ? [classes.navBarItem, classes.highlightNavBar].join(' ') : classes.navBarItem}
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