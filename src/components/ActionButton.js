import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles'; 

import Icon from './Icon';
import edit from '../assets/icons/edit.png';
import plus from '../assets/icons/plus.png';

const useStyle = makeStyles((theme) => ({
    button: {
        marginTop: '5vh',
        backgroundColor: theme.palette.secondary.main
    },
}));

const ActionButton = (props) => {
    const classes = useStyle();
    const { actionType, handleClicked } = props;

    return (
        <Button variant="contained" className={classes.button} onClick={handleClicked}>
            {actionType === 'edit' ?
                <Icon icon={edit} text="Edit"/>
                :
                <Icon icon={plus} text="Add"/>
            }
            
        </Button>
    )
};

export default ActionButton;
