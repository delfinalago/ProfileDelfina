import React from 'react';
import {makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({

    root: {
        flexGrow: 1,
    },
    title: {
        fontFamily : 'Ubuntu',
        textAlign: "center",

    },
    magia: {

        paddingTop: 50,
        paddingBottom: 50,
        backgroundImage: `url(${"https://i.postimg.cc/9FH0PJBg/5086.jpg"})`,
    },
    description:{
        textAlign: "center",
        color: "brown"
    }

}))




export default function Contact(){

    const classes = useStyles()

    return(

        <div className={classes.magia}>
            <h1 className={classes.title}>CONTACT</h1>
            <br/>
            <h3 className={classes.description}>Email: Delfinalago@gmail.com</h3>
            <br/>
            
            <a href="https://www.linkedin.com/in/delfina-lago-b6b2b8145/">
            <h3 className={classes.description}>Linkedin</h3>
            </a>
                        
        </div>

        
    )

}