import React from 'react';
import { Dialog, Typography, DialogContent, DialogContentText, DialogActions, Button, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyle = makeStyles((theme) => ({
    container: {
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    dialog: {
    },
    title: {
        marginTop: '2vh',
        marginLeft: '2vw',
        fontSize: theme.typography.h5.fontSize,
        fontWeight: theme.typography.h5.fontWeight,  
    }
}));

const Modal = (props) => {
    const classes = useStyle();
    const { open, handleClose, title, children } = props;

    return (
        <Box>
            <Dialog
                className={classes.dialog}
                open={open}
                onClose={handleClose}
            >
                <Typography className={classes.title}>{title}</Typography>
                <DialogContent>
                    <DialogContentText>
                        {children}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button>SAVE</Button>
                    <Button onClick={handleClose}>CANCEL</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default Modal;