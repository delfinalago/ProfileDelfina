import React from 'react';

import Divider from '@material-ui/core/Divider';
import {makeStyles} from '@material-ui/core/styles';

import {Grid, Box, Button} from '@material-ui/core';

import Veski from '../Imagenes/Veski.jpeg'



const useStyles = makeStyles(theme => ({

    tituloProjects: {
        textAlign: "center",
        textDecoration: "underline",
        fontFamily: "Poppins, sans-serif",
        fontWeight: 200,
    }


}))

const Projects = () => {

    const classes = useStyles();

    return(
        <div>

            <h1 className={classes.tituloProjects}>PROJECTS</h1>

            <Grid container spacing={2}>

                <Grid item xs={12} sm={6} md={4} >
                    <Box border={2}>
                        Veski wallet
                    </Box>
                </Grid>  

                <Grid item xs={12} sm={6} md={4} >
                    <Box border={2}>
                        Veski wallet
                    </Box>
                </Grid>  

                <Grid item xs={12} sm={6} md={4} >
                    <Box border={2}>
                        Veski wallet
                    </Box>
                </Grid>  

                <Grid item xs={12} sm={6} md={4} >
                    <Box border={2}>
                        Veski wallet
                    </Box>
                </Grid>  

                <Grid item xs={12} sm={6} md={4} >
                    <Box border={2}>
                        Veski wallet
                    </Box>
                </Grid>  

                <Grid item xs={12} sm={6} md={4} >
                    <Box border={2}>
                        Veski wallet
                    </Box>
                </Grid>  

            </Grid>
        </div>
    )

}

export default Projects; 


        