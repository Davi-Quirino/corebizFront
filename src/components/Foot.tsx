
import { makeStyles } from '@material-ui/core';
import React from 'react';
import { GrMail } from 'react-icons/gr';
import { MdHeadsetMic } from 'react-icons/md';
import CorebizFooter from '../assets/images/CorebizFooter.png';
import Vtex from '../assets/images/Vtex.png';


const Foot = (props : any) => {

    const classes = useStyles();

    return (
        <>
            <span className={classes.container}> 
                <span className={classes.contact_info}>
                    <span className={classes.location}>Localização</span>
                    <span className={classes.risk}/>
                    <span className={classes.infosText}>
                        <span>Avenida Andrômeda, 2000. Bloco 6 e 8</span>
                        <span>Alphavile SP</span>
                        <span>brasil@corebiz.ag</span>
                        <span>+55 1130901039</span>
                    </span>
                </span>
                <span className={classes.contact_buttons}>
                    <button className={classes.contact_buttons_send}>
                        <GrMail/>
                        <span>ENTRE EM CONTATO</span>
                    </button>
                    <button className={classes.contact_buttons_send}>
                        <span className={classes.iconHeadSet}>
                            <MdHeadsetMic/>
                        </span>
                        <span>FALE COM O NOSSO CONSULTOR ONLINE</span>
                    </button>
                </span>
                <span className={classes.infosFooterContainer}>
                    <span className={classes.logo}>
                        <span >Created by</span>
                        <img src={CorebizFooter} alt='corebiz logo'/>
                    </span>
                    <span  className={classes.logo}>
                        <span>Powered by</span>
                        <img src={Vtex} alt='Vtex logo'/>
                    </span>
                </span>            
            </span>
        </>
    )
  }

  const useStyles = makeStyles({
    container: {
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        height: '150px',
        backgroundColor: "#000000",
        color: '#ffffff',
        fontSize: '10px',
        fontFamily: 'Nunito, sans-serif',
        
    },
    contact_info: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    location: {
        fontSize: '15px',
        fontWeight: 'bold'
    },
    risk: {
        backgroundColor: '#ffffff',
        width: '30px',
        height: '5px',
    },
    infosText:{
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '20px',
        lineHeight: '15px'
    },
    contact_buttons: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    contact_buttons_send: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: '10px',
        width: '170px',
        height: '30px',
        fontSize: '10px',
        backgroundColor: '#ffffff',
    },
    icon: {
        display: 'flex',
        alignItems: 'center',
        width: '10px'
    },
    iconHeadSet: {
        marginLeft: '12px'
    },
    infosFooterContainer: {
        display: 'flex',
    },
    logo: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginRight: '20px'

    }
  
  });


  export default Foot;