import React from 'react';
import { Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import ScrollAnimation from 'react-animate-on-scroll';

import Infinity from '../../../assets/images/infinity.png';
import sheCodes from '../../../assets/images/she-codes.png';
import IDC from '../../../assets/images/idc.png';

import Education from './Eduction';

const useStyle = makeStyles((theme) => ({

}));

class EduationData {
    constructor(id, logo, title, years, about) {
        this.id = id;
        this.logo = logo;
        this.title = title;
        this.years = years;
        this.about = about;
    }
};

const data = [
    new EduationData(1, IDC, 'B.A in Psychology', '2015-2018', 'Receiced Grad-Based Scholarship and Graduated with Honors (Average of 95)'),
    new EduationData(2, sheCodes, 'she-codes', '2018-2019', 'Web Track (HTML, CSS, JavaScript)'),
    new EduationData(3, Infinity, 'FullStack Developer', '2019-2020', 'One Year Intensive Coding Bootcamp (2000+ hours) that qualifies Full Stack developers'),
];

const Educations = (props) => {
    const classes = useStyle();
    const INITIAL_DELAY = 300;

    return (
        <Box>
            <Grid container justify="space-around">
                {data.map((education, index) => 
                    <ScrollAnimation 
                        animateIn='fadeInUp'
                        delay={INITIAL_DELAY + index * 130}
                        initiallyVisible={false}
                        animateOnce={true}
                    >
                        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                            <Education 
                                key={education.title.concat(index)} 
                                title={education.title} 
                                years={education.years}
                                logo={education.logo}
                                about={education.about}
                            />
                        </Grid>
                    </ScrollAnimation>
                )}
            </Grid>
        </Box>
    )
};

export default Educations;
