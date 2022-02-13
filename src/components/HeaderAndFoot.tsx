
import { makeStyles } from '@material-ui/core';
import React from 'react';
import Foot from './Foot';
import Header from './Header';

const HeaderAndFoot = (props : any) => {

    const classes = useStyles();

    return (
        <span className={classes.container}>
            <Header> babeçalho</Header>
            <div>{props.children}</div>
            <Foot> foot</Foot>
        </span>
    )
  }

  const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch'

    }
  
  });


  export default HeaderAndFoot;