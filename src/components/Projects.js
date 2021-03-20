import React from 'react';

import Divider from '@material-ui/core/Divider';
import {makeStyles} from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles(theme => ({

    titleprojects: {

        justifyContent: "center",
        textAlign: "center",
        fontFamily: "Ubuntu",
    },
    todo: {
        marginTop: 35,
        backgroundColor: "#e3f2fd"
    }

}))


export default function Projects(){

    const classes = useStyles()

    return(
           
        <div className={classes.todo}>
            <Divider/>
            <h1 className={classes.titleprojects}>PROJECTS</h1>


            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} >
                    <Box bgcolor="primary.main" color="primary.contrastText" p={4} m={4} borderRadius={15}>
                        Proyecto 1
                    </Box>
                </Grid>

                <Grid item xs={12} sm={6} >
                    <Box bgcolor="primary.main" color="primary.contrastText"  p={4} m={4} borderRadius={15}>
                        Proyecto 2
                    </Box>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Box bgcolor="primary.main" color="primary.contrastText"  p={4} m={4} borderRadius={15}>
                        Proyecto 3
                    </Box>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Box bgcolor="primary.main" color="primary.contrastText"  p={4} m={4} borderRadius={15}>
                        Proyecto 4
                    </Box>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Box bgcolor="primary.main" color="primary.contrastText"  p={4} m={4} borderRadius={15}>
                        Proyecto 5
                    </Box>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Box bgcolor="primary.main" color="primary.contrastText"  p={4} m={4} borderRadius={15}>
                        Proyecto 6
                    </Box>
                </Grid>
            </Grid>
        </div>

        

    )
}

