import React from 'react';

import Divider from '@material-ui/core/Divider';
import {makeStyles} from '@material-ui/core/styles';

import {Grid, Box} from '@material-ui/core';

import Image from 'material-ui-image'

import Veski from '../Imagenes/Veski.jpeg'



const useStyles = makeStyles(theme => ({

    tituloProjects: {
        textAlign: "center",
        fontFamily: "Poppins, sans-serif",
        fontWeight: 200,
        letterSpacing: 5,
    },
    DivProjects: {
      margin: 100,  
      textAlign: "center",

    },
    divImagen: {
        
        marginTop: 20,
        marginLeft: 30,
        marginRight: 30,
        maxWidth: "100%",
        
    },
    imagenprojects: {
        
        
        borderRadius: 15,
        
        
        
    }


}))

const Projects = () => {

    const classes = useStyles();

    return(
        <div>

            <h1 className={classes.tituloProjects}>PROJECTS</h1>
            <div className={classes.DivProjects}>
                <Grid container spacing={4}>

                
                        <Grid item xs={12} sm={6} md={4} >
                            <Box border={1} borderRadius={15}>
                                <div className={classes.divImagen}>
                                <Image className={classes.imagenprojects} src={Veski} />
                                </div>
                                <h1>
                                Veski wallet
                                </h1>
                                <p>Skills Used: React Native,</p>
                            </Box>
                        </Grid>  

                        <Grid item xs={12} sm={6} md={4} >
                            <Box border={1} borderRadius={15}>
                                <div className={classes.divImagen}>
                                <Image className={classes.imagenprojects} src={Veski} />
                                </div>
                                <h1>
                                Veski wallet
                                </h1>
                                <p>Skills Used: React Native,</p>
                            </Box>
                        </Grid>  

                        <Grid item xs={12} sm={6} md={4} >
                            <Box border={1} borderRadius={15}>
                                <div className={classes.divImagen}>
                                <Image className={classes.imagenprojects} src={Veski} />
                                </div>
                                <h1>
                                Veski wallet
                                </h1>
                                <p>Skills Used: React Native,</p>
                            </Box>
                        </Grid>  

                        <Grid item xs={12} sm={6} md={4} >
                            <Box border={1} borderRadius={15}>
                                <div className={classes.divImagen}>
                                <Image className={classes.imagenprojects} src={Veski} />
                                </div>
                                <h1>
                                Veski wallet
                                </h1>
                                <p>Skills Used: React Native,</p>
                            </Box>
                        </Grid>  

                        <Grid item xs={12} sm={6} md={4} >
                            <Box border={1} borderRadius={15}>
                                <div className={classes.divImagen}>
                                <Image className={classes.imagenprojects} src={Veski} />
                                </div>
                                <h1>
                                Veski wallet
                                </h1>
                                <p>Skills Used: React Native,</p>
                            </Box>
                        </Grid>  

                        <Grid item xs={12} sm={6} md={4} >
                            <Box border={1} borderRadius={15}>
                                <div className={classes.divImagen}>
                                <Image className={classes.imagenprojects} src={Veski} />
                                </div>
                                <h1>
                                Veski wallet
                                </h1>
                                <p>Skills Used: React Native,</p>
                            </Box>
                        </Grid>  

                </Grid>
            </div>
        </div>
    )

}

export default Projects; 


        