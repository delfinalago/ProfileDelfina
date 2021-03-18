import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toobar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    offset: theme.mixins.toolbar,

    menuButton: {
        marginRight: theme.spacing(2),
      },
    title: {
        flexGrow: 1,
        padding: 1,
    },
  }))


const Navbar = () => {

    const classes = useStyles();

    return(
        <div>
            <AppBar>
                <Toobar>  
                        <Typography variant='h5'  color="secondary" className={classes.title}>
                            Delfina Lago   
                        <br/>    
                            Fullstack Developer
                        </Typography>
                    <Button color="secondary">About Me</Button>
                    <Button color="secondary">Skills</Button>
                    <Button color="secondary">Projects</Button>
                    <Button color="secondary">Contact</Button>
                </Toobar>
            </AppBar>
            <div className={classes.offset}></div>
        </div>
    )
}

export default Navbar;