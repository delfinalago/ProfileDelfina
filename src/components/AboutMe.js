import React from 'react';
import {makeStyles} from '@material-ui/core'

import Box from '@material-ui/core/Box';

import logodel2 from '../logodel2.jpeg';


const useStyles = makeStyles(theme => ({

    root: {
        flexGrow: 1,
      },
    logo: {
        margin: 'auto',
        float:"left",
        maxWidth: '100%',
        maxHeight: '100%',
        height: 250,
        borderRadius: 15,
      },

      parrafo: {
        float:"left",
        fontSize: 30,
        padding: 15,
        paddingLeft: 30,
        fontFamily: 'Ubuntu',
      },

  }))




const AboutMe = () => {

    const classes = useStyles();
    
    return(

    <div className={classes.root}>
         
        <Box p={4} border={1}  display="flex" bgcolor="secondary.main" color="primary.main" m={12}>
                <img src={logodel2} className={classes.logo} alt="logo" />   
                <p className={classes.parrafo}> 
                    Hi ! My name is Delfina Lago im a Fullstack Developer.
                    <br/>
                    Dedicated and apasionate I seek every day to improve my skills in the IT world.
                </p>
        </Box>

    </div>
     
    )
}

export default AboutMe;