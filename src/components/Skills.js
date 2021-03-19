import React from 'react';
import {makeStyles, Paper} from '@material-ui/core'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'


const useStyles = makeStyles(theme => ({

    title: {
        textAlign: "center",
        fontFamily: 'Ubuntu',
    },
    logoSkills: {
        height: 100,
        float: 'left',
        margin: 40,
        padding: 10,
       
    },
    space: {
        padding: theme.spacing(2),
        
    }

}))

const Skills = () => {

    const classes = useStyles();

    return(

        <Container maxWidth="l">
            <h1 className={classes.title}>SKILLS</h1>

            <Box component={Grid} container >

                <Box component={Grid} item boxShadow={3}  >
                   <Paper> 
                       <img src='https://i.postimg.cc/PvpLyTfd/bootstrap-plain-wordmark-logo-icon-146620.png' className={classes.logoSkills} alt="logo" /> 
                   </Paper>  
                </Box>
              
                <Box component={Grid} item boxShadow={3} >
                    <img src='https://i.postimg.cc/C5wGTq6V/css3-01-icon-icons-com-50918.png' className={classes.logoSkills} alt="logo" />   
                </Box>

                <Box component={Grid} item boxShadow={3} >
                    <img src='https://i.postimg.cc/JnNN2qxq/github-git-icon-145985.png' className={classes.logoSkills} alt="logo" />   
                    </Box>

                <Box component={Grid} item boxShadow={3} s={1}>
                    <img src='https://i.postimg.cc/9QDGhV1z/wordpress-plain-wordmark-logo-icon-146290.png' className={classes.logoSkills} alt="logo" />   
                </Box>

                <Box component={Grid} item boxShadow={3} s={1}>
                    <img src='https://i.postimg.cc/KvvP0tMP/javascript-icon-130900.png' className={classes.logoSkills} alt="logo" />   
                </Box>

                <Box component={Grid} item boxShadow={3} s={1}>
                    <img src='https://i.postimg.cc/zfWKyjsr/jquery-plain-wordmark-logo-icon-146445.png' className={classes.logoSkills} alt="logo" />   
                </Box>   

                <Box component={Grid} item boxShadow={3} s={1}>
                    <img src='https://i.postimg.cc/h40882f4/mongodb-plain-wordmark-logo-icon-146423.png' className={classes.logoSkills} alt="logo" />   
                </Box>  

                <Box component={Grid} item boxShadow={3} s={1}>
                    <img src='https://i.postimg.cc/SRZzBtMW/mysql-plain-wordmark-logo-icon-146415.png' className={classes.logoSkills} alt="logo" />   
                </Box> 

                <Box component={Grid} item boxShadow={3} s={1}>
                    <img src='https://i.postimg.cc/rmXGjb1s/nodejs-plain-wordmark-logo-icon-146410.png' className={classes.logoSkills} alt="logo" />   
                </Box>  

                <Box component={Grid} item boxShadow={3} s={1}>
                    <img src='https://i.postimg.cc/Tw6mgbxW/postgresql-plain-wordmark-logo-icon-146390.png' className={classes.logoSkills} alt="logo" />   
                </Box>

                <Box component={Grid} item boxShadow={3} s={1}>
                    <img src='https://i.postimg.cc/Gh7kV9FZ/react-logo-icon-144942.png' className={classes.logoSkills} alt="logo" />   
                </Box>

                <Box component={Grid} item boxShadow={3} s={1}>
                    <img src='https://i.postimg.cc/44wtHnSm/react-original-logo-icon-146374.png' className={classes.logoSkills} alt="logo" />   
                </Box>

                <Box component={Grid} item boxShadow={3} s={1}>
                    <img src='https://i.postimg.cc/mDy9wrZp/redux-original-logo-icon-146365.png' className={classes.logoSkills} alt="logo" />   
                </Box>

                <Box component={Grid} item boxShadow={3} s={1}>
                    <img src='https://i.postimg.cc/2yjZXfVk/social-html5-html-71.png' className={classes.logoSkills} alt="logo" />   
                </Box>

                <Box component={Grid} item boxShadow={3} s={1}>
                    <img src='https://i.postimg.cc/C5GK9ZCB/express.png' className={classes.logoSkills} alt="logo" />   
                </Box>
            </Box>   

        </Container>

    )
}

export default Skills;