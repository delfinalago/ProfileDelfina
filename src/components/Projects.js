import React from 'react';

import Divider from '@material-ui/core/Divider';
import {makeStyles} from '@material-ui/core/styles';


const useStyle = makeStyles(theme => ({

    proyectos: {
        padding: 20,

    }

}))



const Projects = () => {

    const classes = useStyle()


    return(

        <div className={classes.proyectos}>
            <Divider/>
            
            
        </div>

    )
}

export default Projects;