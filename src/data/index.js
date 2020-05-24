import React from 'react';
import { Box } from '@material-ui/core';

import email from '../assets/images/email-nav.png';
import home from '../assets/images/home-nav.png';
import about from '../assets/images/about-nav.png';
import rocket from '../assets/images/rocket-nav.png';

export const getScreens = () => ['Home', 'About', 'Projects', 'Conatct'];

export const getDrawerIcon = (index) => {
    const iconStyle = {
        width: 30,
        height: 30,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    }

    switch (index) {
        case 0: {
            return <Box style={{
                ...iconStyle, 
                backgroundImage: `url(${home})`
            }} />
        }
        case 1: {
            return <Box style={{
                ...iconStyle,
                backgroundImage: `url(${about})` 
            }} />
        }
        case 2: {
            return <Box style={{
                ...iconStyle,
                backgroundImage: `url(${rocket})` 
            }} />
        }
        case 3: {
            return <Box style={{
                ...iconStyle,
                backgroundImage: `url(${email})` 
            }} />
        }
        default: {
            return <Box style={{
                ...iconStyle,
                backgroundImage: `url(${about})` 
            }} />
        }
    }
};