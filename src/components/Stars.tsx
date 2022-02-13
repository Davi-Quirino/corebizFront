

import { makeStyles } from '@material-ui/core';
import React from 'react';
import { AiOutlineStar } from 'react-icons/ai';


const Stars = (props : any) => {

    const classes = useStyles();


    return(
        <span className={classes.container}>
            <AiOutlineStar/>
            <AiOutlineStar/>
            <AiOutlineStar/>
            <AiOutlineStar/>
            <AiOutlineStar/>
        </span>
    )


  }

  const useStyles = makeStyles({
    container: {
        display: 'flex',
        color: '#F8475F'
        }
    })


  export default Stars;