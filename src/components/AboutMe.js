import React from 'react';
import {makeStyles} from '@material-ui/core'

import Box from '@material-ui/core/Box';

import logodel2 from '../logodel2.jpeg';
import { blue } from '@material-ui/core/colors';


const useStyles = makeStyles(theme => ({

    root: {
        flexGrow: 1,
      },
    logo: {
        margin: 'auto',
        float:"left",
        maxWidth: '100%',
        maxHeight: '100%',
        height: 350,
        borderRadius: 15,
      },

      parrafo: {
        textAlign: "center",
        float:"left",
        fontSize: 30,
        padding: 15,
        paddingLeft: 30,
        fontFamily: "Poppins, sans-serif",
      },
      TituloAboutMe: {
        textAlign:"center",
        color: "black",
        paddingTop: 20,
        letterSpacing: 7,
        fontWeight: 200,
        fontSize: 60,
        fontFamily: "Poppins, sans-serif",
      },

  }))




const AboutMe = () => {

    const classes = useStyles();
    
    return(

  <div id="AboutMe">
    <h1 className={classes.TituloAboutMe}>WELCOME!</h1>
     
      <div  className={classes.root}>
          
          <Box p={4} border={1}  display="flex" bgcolor="secondary.main" color="primary.main" m={12}>
                  <img src={logodel2} className={classes.logo} alt="logo" />   
                  <p className={classes.parrafo}> 
                      Hi ! My name is Delfina Lago <br/> 
                      Im a Fullstack Developer. <br/> 
                      Dedicated and apasionate I seek every day to improve my skills in the IT world.
                  </p>
          </Box>

      </div>
  </div>   
    )
}

export default AboutMe;