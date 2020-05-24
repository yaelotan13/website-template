import React from 'react';
import { Dialog, DialogContent, DialogActions, Button, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { SketchPicker } from 'react-color';

const useStyle = makeStyles((theme) => ({

}));

const ColorsModal = (props) => {
    const classes = useStyle();
    const { open, handleColorChnage, handleClose } = props;

    return (
        <Dialog open={open}>
            <DialogContent>
                <SketchPicker onChangeComplete={handleColorChnage} />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>CLOSE</Button>
            </DialogActions>
        </Dialog>
    )
};

export default ColorsModal;
