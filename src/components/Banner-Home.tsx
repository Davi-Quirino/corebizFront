import { makeStyles } from '@material-ui/core';
import React from 'react';
import Banner from '../assets/images/Banner-home.svg';



const BannerHome = (props : any) => {

    const classes = useStyles();

    return (
        <>
        <div className={classes.title}>
            <span>Olá, o que você está buscando?
            <h1>Criar ou migrar seu <br/> e-commerce?</h1>
            </span>
        </div>
        <div>

            <img className={classes.image} src={Banner} alt='banner home'/>
        </div>
        </>
    )
  }

  const useStyles = makeStyles({
    title: {
        fontFamily: 'Nunito, sans-serif',
        position: 'absolute',
        width: '522px',
        height: '430px',
        left: '250px',
        top: '120px',
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: '20px',
        lineHeight: '41px'
    },
    image: {
        width: '100%'
    }
  
  });


  export default BannerHome;