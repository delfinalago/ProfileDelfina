import React from 'react';
import {makeStyles} from '@material-ui/core'

import Box from '@material-ui/core/Box';
import {Button} from '@material-ui/core'

import logodel2 from '../logodel2.jpeg';
import { blue } from '@material-ui/core/colors';


const useStyles = makeStyles(theme => ({

    root: {
        flexGrow: 1,
        paddingBottom: 20,
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
        textAlign: "start",
        float:"left",
        fontSize: 30,
        padding: 15,
        paddingLeft: 30,
        fontFamily: "Poppins, sans-serif",
        color: "#083C54"
      },
      TituloAboutMe: {
        textAlign:"center",
        color: "#083C54",
        paddingTop: 80,
        letterSpacing: 7,
        fontWeight: 200,
        fontSize: 60,
        fontFamily: "Poppins, sans-serif",
      },
      backgroundAboutMe: {
        backgroundImage: `url(${""})`,
      },
      cvDownload: {
        paddingTop: 45,
        padding: 20,
        paddingLeft: 280,
        
        
      },
      decoration: {
        textDecoration: "none",
        fontFamily : "Poppins, sans-serif",
        color: "#083C54"
        
      },
      button: {
        padding: 15,
        
      },


  }))




const AboutMe = () => {

    const classes = useStyles();
    
    return(

  <div id="AboutMe" className={classes.backgroundAboutMe}>
    <h1 className={classes.TituloAboutMe}>WELCOME!</h1>
     
      <div  className={classes.root}>
          
          <Box p={4} border={2} borderRadius={8} borderColor={"#083C54"} display="flex" bgcolor="transparent" color="primary.main" m={12}>

                    <img src={logodel2} className={classes.logo} alt="logo" />   

                  <div>
                     <p className={classes.parrafo}> 
                    Hi my name is Delfina Lago.<br/>
                    I was born in Argentina Bariloche one of the most beautifull places in the word.<br/>
                    Searching my way I decided to study to become a FullStack Developer.<br/>
                    Dedicated and apasionate I seek every day to improve my skills in the IT world.
                    <br/>This is my profile hope you enjoy it.
                     </p>
                    <div className={classes.cvDownload}>
                      <button borderRadius={10}  className={classes.button}>
                        <a className={classes.decoration} href={"https://www.dropbox.com/s/kdg83ow3bcmh8k9/CV%20Delfina%20LagoINGLES.pdf?dl=0"} download="" >Download Cv</a>
                      </button>
                    </div>
                 
                  </div>


          </Box>

      </div>
  </div>   
    )
}

export default AboutMe;