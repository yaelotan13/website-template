import React, { useState } from 'react';
import { Box, Typography, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { Modal, ActionButton } from '../../components';

const useStyle = makeStyles((theme) => ({
    container: {
        marginTop: '2%',
        padding: '6%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    header: {
        fontSize: 24,
        fontWeight: 600,
        fontFamily: theme.typography.h3.fontFamily,
        marginBottom: '2vh'
    },
    content: {
        fontSize: 16,
        fontWeight: 400,
        fontFamily: theme.typography.h3.fontFamily,
        marginTop: '3vh'
    },
    headerInput: {
        width: '35vw',
        marginBottom: '3vh'
    },
    contentInput: {
        width: '35vw',
        marginBottom: '5vh',
        whiteSpace: 'pre'
    }
}));

const AboutMe = (props) => {
    const classes = useStyle();
    const [content, setContent] = useState('All the interesting info about you goes here');
    const [header, setHeader] = useState('About Me');
    const [open, setOpen] = useState(false);

    const handleContentChange = (event) => {
        setContent(event.target.value);
    };

    const handleHeaderChange = (event) => {
        setHeader(event.target.value);
    };

    return (
        <Box className={classes.container}>
            <Modal open={open} handleClose={() => setOpen(false)} title="Edit Content">
                <TextField className={classes.headerInput} value={header} variant="outlined" onChange={handleHeaderChange} />
                <TextField className={classes.contentInput} value={content} multiline rowsMax={10} onChange={handleContentChange} />
            </Modal>
            <Box>
                <Typography className={classes.header}>{header}</Typography>
                <ActionButton actionType="edit" handleClicked={() => setOpen(true)} style="contained" title="Content" />
            </Box>
            <Typography className={classes.content}>{content}</Typography>
        </Box>
    )
};

export default AboutMe;
