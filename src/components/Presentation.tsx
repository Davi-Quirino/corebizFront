import { makeStyles } from '@material-ui/core';
import React from 'react';
import BannerHome from './Banner-Home';
import ProductList from './ProductsList';
import Register from './Register';


const Presentation = (props : any) => {

    const classes = useStyles();

    return (
        <span className={classes.container}>
            <BannerHome/>
            <ProductList/>
            <Register/>
        </span>
    )
  }

  const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%'
        }
    })


  export default Presentation;