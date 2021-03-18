import React from 'react';
import {makeStyles} from '@material-ui/core'

import Box from '@material-ui/core/Box';


const useStyles = makeStyles(theme => ({

    boxAbout: {
        justifyContent:"center",
        display:"flex",
      },
  }))




const AboutMe = () => {

    const classes = useStyles();
    
    return(

    <div style={{ width: '100%' }}>
      <Box p={1}  className={classes.boxAbout}  bgcolor="secondary.main" color="primary.main" m={2}>
        {"Hi ! My name is Delfina Lago im a Fullstack Developer. Dedicated and apasionate I seek every day to improve my skills in the IT world"}
      </Box>
    </div>
     
    )
}

export default AboutMe;