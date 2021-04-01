import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toobar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    offset: theme.mixins.toolbar,

    root: {
        flexGrow: 1,
      },
    menuButton: {
        marginRight: theme.spacing(2),
      },
    title: {
        flexGrow: 1,
        padding: 1,
    },
    linksNav: {
      textDecoration: "none",  
      color: "white",
    },
  }))


const Navbar = () => {

    const classes = useStyles();

    return(
        <div>
            <AppBar color="primary">
                <Toobar>  
                        <Typography variant='h5'  color="secondary" className={classes.title}>
                            Delfina Lago   
                        <br/>    
                            Fullstack Developer
                        </Typography>
                    <Button color="secondary"><a className={classes.linksNav} href="#AboutMe">About Me</a></Button>
                    <Button color="secondary"><a className={classes.linksNav} href="#Skills">Skills</a></Button>
                    <Button color="secondary"><a className={classes.linksNav} href="#Projects">Projects</a></Button>
                    <Button color="secondary"><a className={classes.linksNav} href="#Contact">Contact</a></Button>
                </Toobar>
            </AppBar>
            <div className={classes.offset}></div>
        </div>
    )
}

export default Navbar;