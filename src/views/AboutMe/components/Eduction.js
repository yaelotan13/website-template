import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyle = makeStyles((theme) => ({
    container: {
        [theme.breakpoints.down('xs')]: {
            display: 'flex',
            justifyContent: 'center',
        }
    },
    education: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: 10,
        padding: 20,
        boxShadow: "1px 1px 3px #9E9E9E",
        backgroundColor: 'white',
        [theme.breakpoints.between('sm', 'xl')]: {
            boxSizing: 'border-box',
            width: '25vw',
            height: '30vh',
            marginTop: '8%'
        },
        [theme.breakpoints.down('xs')]: {
            width: '80vw',
            marginTop: '6%'
        }
    },
    title: {
        fontWeight: theme.typography.h5.fontWeight,
    },
    years: {
        marginBottom: '4%'
    }
}));

const Education = (props) => {
    const classes = useStyle();
    const { logo, title, about, years } = props;

    return (
        <Box className={classes.container}>
            <Box className={classes.education}>
                <Box style={{
                    backgroundImage: `url(${logo})`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    width: 50,
                    height: 50,
                }}/>
                <Typography variant="h5" className={classes.title}>{title}</Typography>
                <Typography variant="body2" className={classes.years}>{years}</Typography>
                <Typography>{about}</Typography>
            </Box>
        </Box>
    )
};

export default Education;
