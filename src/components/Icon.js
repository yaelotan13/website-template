import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyle = makeStyles((theme) => ({
    container: {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer'
    },
    icon: {
        width: 40,
        height: 40,
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        [theme.breakpoints.down('xs')]: {
            width: 30,
            height: 30
        }
    },
    text: {
        fontFamily: theme.typography.h5.fontFamily,

    }
}));

const Icon = (props) => {
    const classes = useStyle();
    const { icon, text } = props;

    return (
        <Box className={classes.container}>
            <Box style={{
                    backgroundImage: `url(${icon})`
                }} 
                className={classes.icon}
            />
            <Typography className={classes.text}>{text}</Typography>
        </Box>
    );
};

export default Icon;
