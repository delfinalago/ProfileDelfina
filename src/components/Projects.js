import React from 'react';

import {makeStyles} from '@material-ui/core/styles';

import {Grid, Box} from '@material-ui/core';

import Image from 'material-ui-image'

// Imagenes
import Veskiwallet2 from '../Imagenes/VeskiWallet2.png'; 
import EcommerceHENRY from '../Imagenes/EcommerceHENRY.png'; 
import mercadolibre from '../Imagenes/mercadolibre.jpeg';
import PublistarR from "../Imagenes/PublistarR.png"




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
    },
    imagenprojects: {
    
        borderRadius: 15,     
        width: "100%",
        height: "100%",
        objectFit: "cover",
        cursor: "pointer",
        
    },
    tituloProject:{
        fontSize: 20,
        fontFamily: "popins, sans-serif",
        letterSpacing: 2,
    },



}))

const Projects = () => {

    const classes = useStyles();

    return(

        <div id="Projects">

            <h1 className={classes.tituloProjects}>PROJECTS</h1>
            <div className={classes.DivProjects}>
                <Grid container spacing={4}>

                
                        <Grid item xs={12} sm={6} md={4} >
                            <Box border={2} borderRadius={15} borderColor={"#083C54"}>
                                <a href="https://github.com/delfinalago/HenryBank-G05" target="blank" >
                                <div className={classes.divImagen}>
                                <Image className={classes.imagenprojects} src={Veskiwallet2} />
                                </div>
                                </a>
                                <h1 className={classes.tituloProject}>
                                Veski wallet
                                </h1>
                                <p>Skills Used: React Native,</p>
                            </Box>
                        </Grid>  

                        <Grid item xs={12} sm={6} md={4} >
                            <Box border={2} borderRadius={15} borderColor={"#083C54"}>
                            <a href="https://github.com/delfinalago/ecommerce-ft05-g1" target="blank" >
                                <div className={classes.divImagen}>
                                <Image className={classes.imagenprojects} src={EcommerceHENRY} />
                                </div>
                            </a>
                                <h1 className={classes.tituloProject}>
                                Ecommerce Tech Shop
                                </h1>
                                <p>Skills Used: React Native,</p>
                            </Box>
                        </Grid>  

                        <Grid item xs={12} sm={6} md={4} >
                            <Box border={2} borderRadius={15} borderColor={"#083C54"}>
                            <a href="https://github.com/delfinalago/Henry-MercadoLibre" target="blank" >
                                <div className={classes.divImagen}>
                                <Image className={classes.imagenprojects} src={mercadolibre} />
                                </div>
                            </a>
                                <h1 className={classes.tituloProject}>
                                Mercado Libre App
                                </h1>
                                <p>Skills Used: React Native,</p>
                            </Box>
                        </Grid>  

                        <Grid item xs={12} sm={6} md={4} >
                            <Box border={2} borderRadius={15} borderColor={"#083C54"}>
                            <a href="https://www.publistar.com.ar/" target="blank" >
                                <div className={classes.divImagen}>
                                <Image className={classes.imagenprojects} src={PublistarR} alt='publistar' />
                                </div>
                            </a>
                                <h1 className={classes.tituloProject}>
                                Publistar web
                                </h1>
                                <p>Wordpress</p>
                            </Box>
                        </Grid>  

                        {/* <Grid item xs={12} sm={6} md={4} >
                            <Box border={1} borderRadius={15}>
                            <a href="https://github.com/delfinalago/HenryBank-G05" target="blank" >
                                <div className={classes.divImagen}>
                                <Image className={classes.imagenprojects} src={} />
                                </div>
                            </a>    
                                <h1>
                                Veski wallet
                                </h1>
                                <p>Skills Used: React Native,</p>
                            </Box>
                        </Grid>  

                        <Grid item xs={12} sm={6} md={4} >
                            <Box border={1} borderRadius={15}>
                                <div className={classes.divImagen}>
                                <Image className={classes.imagenprojects} src={} />
                                </div>
                                <h1>
                                Veski wallet
                                </h1>
                                <p>Skills Used: React Native,</p>
                            </Box>
                        </Grid>   */}

                </Grid>
            </div>
        </div>
    )

}

export default Projects; 


        