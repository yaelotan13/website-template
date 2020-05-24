import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, Box } from '@material-ui/core';
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
        // width: '40vw',
        // height: '50vh',
        border: '1px solid black'
    },
    title: {

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
                <DialogTitle className={classes.title}>{title}</DialogTitle>
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