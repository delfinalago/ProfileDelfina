import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toobar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import {makeStyles} from '@material-ui/core'

import user from '../Imagenes/user.png';
import backButton from '../Imagenes/backButton.png'


const useStyles = makeStyles(theme => ({
    // offset: theme.mixins.toolbar,

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
      alignContent: "rigth",
    },
    userIcono: {
       width: 60,
       paddingRight: 15,
       paddingTop: 5,
       paddingBottom: 5,
        
    },
    backIcono: {
        paddingLeft: 15,
    }

  }))


const Navbar = () => {

    const classes = useStyles();

    return(
        <div>
            <AppBar color="primary">
                <Toobar>
                    <a href="/">
                        <img src={user} className={classes.userIcono} alt="logo" />
                    </a>
                        <Typography variant='h5'  color="secondary" className={classes.title}>
                        <a  className={classes.linksNav} href="/">
                            Delfina Lago   
                        <br/>    
                            Fullstack Developer
                        </a>
                        </Typography>
                    
                        <Button  color="secondary"><a className={classes.linksNav} href="#AboutMe">Sobre Mi</a></Button>
                        <Button  color="secondary"><a className={classes.linksNav} href="#Skills">Habilidades</a></Button>
                        <Button  color="secondary"><a className={classes.linksNav} href="#Projects">Proyectos</a></Button>
                        <Button  color="secondary"><a className={classes.linksNav} href="#Contact">Contacto</a></Button>
                        <a href="/">
                        <img src={backButton} className={classes.backIcono} alt="logo" />
                        </a>
                    
                </Toobar>
            </AppBar>
            <div className={classes.offset}></div>
        </div>
    )
}

export default Navbar;