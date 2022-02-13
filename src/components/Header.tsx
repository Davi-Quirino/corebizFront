
import { makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsCart4 } from 'react-icons/bs';
import { VscAccount } from 'react-icons/vsc';
import CorebizLogo from '../assets/images/CorebizLogo.png';
import { getDataLocalStorage } from '../services/ProductsService';

const Header = (props: any) => {

    const [itens, setItens] = useState(0)

    useEffect(() => {
        var products = getDataLocalStorage('products')
        if(!products) return;
        setItens(products.products.length)
    }, [itens])

    const classes = useStyles();

    return (
        <span className={classes.container}>
            <span className={classes.logo_image}>
                <img src={CorebizLogo} alt="corebiz logo"/>
            </span>
            <span>
                <input type="text" className={classes.input} placeholder='O que está procurando?'/>
                    <AiOutlineSearch/>
            </span>
            <span className={classes.account}>
                <span className={classes.myAccountContainer}>
                    <VscAccount/>
                    <span className={classes.myAccountText}>Minha Conta</span>
                </span>
                <span>
                    <BsCart4/>
                    <span className={classes.numberItens}>{itens}</span>
                </span>
            </span>
        </span>
    )
  }

  const useStyles = makeStyles({
    container: {
        display: 'flex',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap'
    },
    logo_image: {
        paddingLeft: '200px',
        paddingRight: '80px',
        marginTop: '10px'
    },
    input: {
        width: '350px',
        height: '18px',
        marginTop: '26px',
        border: 0,
        borderBottom: '1px solid #7A7A7A',
        outline: 0
    },
    account: {
        display: 'flex',
        marginTop: '20px'
    },
    myAccountContainer: {
        color: '#7A7A7A',
        fontSize: '13px',
        marginRight: '20px'
    },
    myAccountText: {
        marginLeft: '6px',
    },
    numberItens: {
        marginLeft: '6px',
        padding: '0px 5px',
        borderRadius: '50%',
        background: '#ff0000',
        color: '#ffffff',
        height: '5px'
    }
  
  });


  export default Header;