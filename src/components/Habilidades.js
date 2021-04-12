import React from 'react';
import {Divider, makeStyles} from '@material-ui/core'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'

import Image from 'material-ui-image'


const useStyles = makeStyles(theme => ({


    root: {
      flexGrow: 1,
    },
    title: {
        textAlign: "center",
        fontWeight: 200,
        fontFamily: "Poppins, sans-serif",
        letterSpacing: 5,
        paddingTop: 35,
    },
    caja: {
      borderRadius: 10,
      height: 80,
      width: 80,
      // boxShadow: "0 0 10px #083C54, 0 0 15px #083C54, 0 0 10px #083C54",
    },
    cajaGrid: {
      margin: 100,
    },
    image: {

    }
}))

const Skills = () => {

    const classes = useStyles();

    return(

      
      
      <div id="Skills" className={classes.root} >
        <hr/>
          <h1 className={classes.title}>HABILIDADES</h1>
      <div className={classes.cajaGrid}>
        <Grid container spacing={1}>
        <Grid item xs={6} sm={2} md={2} >
          <Box p={2} border={2} m={1} className={classes.caja}>
            <Image src='https://i.postimg.cc/PvpLyTfd/bootstrap-plain-wordmark-logo-icon-146620.png' className={classes.image} />   
          </Box>
        </Grid>
        <Grid item xs={6} sm={2} md={2} className={classes.cajagrid} >
          <Box p={2} border={2} m={1} className={classes.caja}>
             <Image src='https://i.postimg.cc/JnNN2qxq/github-git-icon-145985.png' className={classes.image} />
          </Box>
        </Grid>
        <Grid item xs={6} sm={2} md={2}>
          <Box p={2} border={2} m={1} className={classes.caja}>
            <Image src='https://i.postimg.cc/C5wGTq6V/css3-01-icon-icons-com-50918.png' className={classes.image}/>   
          </Box>
        </Grid>
        <Grid item xs={6} sm={2} md={2}>
          <Box p={2} border={2} m={1} className={classes.caja}>
          <Image src='https://i.postimg.cc/9QDGhV1z/wordpress-plain-wordmark-logo-icon-146290.png' className={classes.image} />
          </Box>
        </Grid>
        <Grid item xs={6} sm={2} md={2}>
          <Box p={2} border={2} m={1}  className={classes.caja}>
            <Image src='https://i.postimg.cc/KvvP0tMP/javascript-icon-130900.png' className={classes.logoSkills} />
          </Box>
        </Grid>
        <Grid item xs={6} sm={2} md={2}>
          <Box p={2} border={2} m={1}  className={classes.caja}>
            <Image src='https://i.postimg.cc/zfWKyjsr/jquery-plain-wordmark-logo-icon-146445.png' className={classes.logoSkills} />
          </Box>
        </Grid>
        <Grid item xs={12} sm={2} md={2}>
          <Box p={2} border={2} m={1}  className={classes.caja}>
            <Image src='https://i.postimg.cc/h40882f4/mongodb-plain-wordmark-logo-icon-146423.png' className={classes.logoSkills} />
          </Box>
        </Grid>
        <Grid item xs={6} sm={2} md={2}>
          <Box p={2} border={2} m={1}  className={classes.caja}>
          <Image src='https://i.postimg.cc/SRZzBtMW/mysql-plain-wordmark-logo-icon-146415.png' className={classes.logoSkills} />
          </Box>
        </Grid>
        <Grid item xs={6} sm={2} md={2}>
          <Box p={2} border={2} m={1}  className={classes.caja}>
          <Image src='https://i.postimg.cc/rmXGjb1s/nodejs-plain-wordmark-logo-icon-146410.png' className={classes.logoSkills} />
          </Box>
        </Grid>
        <Grid item xs={6} sm={2} md={2}>
          <Box p={2} border={2} m={1}  className={classes.caja}>
          <Image src='https://i.postimg.cc/Tw6mgbxW/postgresql-plain-wordmark-logo-icon-146390.png' className={classes.logoSkills} />
          </Box>
        </Grid>
        <Grid item xs={6} sm={2} md={2}>
          <Box p={2} border={2} m={1}  className={classes.caja}>
          <Image src='https://i.postimg.cc/Gh7kV9FZ/react-logo-icon-144942.png' className={classes.logoSkills} />
          </Box>
        </Grid>
        <Grid item xs={6} sm={2} md={2}>
          <Box p={2} border={2} m={1}  className={classes.caja}>
          <Image src='https://i.postimg.cc/44wtHnSm/react-original-logo-icon-146374.png' className={classes.logoSkills} />
          </Box>
        </Grid>
        <Grid item xs={6} sm={2} md={2}>
          <Box p={2} border={2} m={1}  className={classes.caja}>
          <Image src='https://i.postimg.cc/mDy9wrZp/redux-original-logo-icon-146365.png' className={classes.logoSkills} />
          </Box>
        </Grid>
        <Grid item xs={6} sm={2} md={2}>
          <Box p={2} border={2} m={1}  className={classes.caja}>
          <Image src='https://i.postimg.cc/2yjZXfVk/social-html5-html-71.png' className={classes.logoSkills} />
          </Box>
        </Grid>
        <Grid item xs={6} sm={2} md={2}>
          <Box p={2} border={2} m={1}  className={classes.caja}>
          <Image src='https://i.postimg.cc/C5GK9ZCB/express.png' className={classes.logoSkills} />
          </Box>
        </Grid>
      </Grid>
      </div>      
      <hr/>
    </div>  
    );
  }

export default Skills;