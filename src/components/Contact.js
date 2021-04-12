import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import { Button, Grid, Box } from '@material-ui/core';
import { FilterNone } from '@material-ui/icons';


const useStyles = makeStyles(theme => ({

    root: {
        flexGrow: 1,
    },
    title: {
        fontFamily : "Poppins, sans-serif",
        textAlign: "center",
        letterSpacing: 5,
        fontWeight: 200,
        paddingBottom: 50,
    },
    magia: {
        
        
        paddingTop: 100,
        paddingBottom: 200,
        backgroundColor: "CIAN CLARO"
        // backgroundImage: `url(${"https://i.postimg.cc/9FH0PJBg/5086.jpg"})`,
    },
    linkedin: {
        
        textDecoration: "none",
    },
    espacio: {
        paddingTop: 35,
        marginRight: 150,
        marginLeft: 150,
    },
    divider: {
        marginBottom: 30,
    }

}))




export default function Contact(){

    const classes = useStyles()

    return(

        <div  id="Contact" className={classes.magia}>
            <hr className={classes.divider}/>
            <h1 className={classes.title}>CONTACT</h1>

            <div className={classes.espacio}>
                <Grid container  >
                    
            
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Box border={2} borderRadius={5} mx={10} p={2} textAlign={"center"} borderColor={"grey"} fontFamily={"Poppins, sans-serif"}>
                            Email:<br/>
                            Delfinalago@gmail.com
                       </Box>
                    </Grid>
                   

                
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Box border={2} borderRadius={5} mx={10} p={2} textAlign={"center"} fontFamily={"Poppins, sans-serif"}>
                            Linkedin:<br/>
                            <a  className={classes.linkedin} href="https://www.linkedin.com/in/delfina-lago-b6b2b8145/">Delfina Lago</a>
                        </Box>
                    </Grid>
                </Grid>
            
            </div>   
           
            
            
            
                        
        </div>

        
    )

}