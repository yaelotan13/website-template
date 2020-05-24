import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles'; 

import Icon from './Icon';
import edit from '../assets/icons/edit.png';
import plus from '../assets/icons/plus.png';

const useStyle = makeStyles((theme) => ({
    button: {
        paddingRight: 30,
        paddingTop: 2,
        paddingBottom: 2
    },
}));

const ActionButton = (props) => {
    const classes = useStyle();
    const { actionType, handleClicked, style, title } = props;

    return (
        <Button variant={style} className={classes.button} onClick={handleClicked} color="secondary">
            {actionType === 'edit' ?
                <Icon icon={edit} text={`Edit ${title}`}/>
                :
                <Icon icon={plus} text={`Add ${title}`}/>
            }
            
        </Button>
    )
};

export default ActionButton;
