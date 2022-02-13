
import { makeStyles } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductInterface from '../interfaces/ProductInterface';
import { getDataLocalStorage, SaveDataLocalStorage } from '../services/ProductsService';
import Stars from './Stars';

const ProductList = () => {

    const [products, setProducts] = useState<ProductInterface[]>([{productId: 0,
        productName: '',
        stars: 0,
        imageUrl: '',
        listPrice: null,
        price: 0,
        installments: [{
            quantity: 0,
            value: 0
        }]}])

    //change call on service
    useEffect(() => {
        axios.get('https://corebiz-test.herokuapp.com/api/v1/products')
        .then( (resp) => {
            setProducts(resp.data) 
        })
    }, [])

    const numberWithCommas = (price: number) => {
        const str2 = price.toString().slice(0, -2);
        var parse = parseInt(str2);
        var PriceWithComma = parse.toLocaleString('pt-br', {minimumFractionDigits: 2});
        return PriceWithComma;
    }

    const addProduct = (id: number) => {
        var selectedProduct = products.filter((prod: ProductInterface) => prod.productId === id)
        try{
            var products2 = getDataLocalStorage('products')
            if(!products2) return SaveDataLocalStorage('products', selectedProduct)

            if(products2.products.length > 0){
                products2.products.push(selectedProduct[0])
                SaveDataLocalStorage('products', products2.products)
                return;
            }
            SaveDataLocalStorage('products', selectedProduct)
        }catch(e){
            console.error(e, "Something get wrong")
        }
    }

    const classes = useStyles();

   

    return (
        <span className={classes.container}>
            <span className={classes.title}><strong>Mais Vendidos</strong></span>
            <span className={classes.risk}/>
            <span className={classes.productList}>
                {products.map((product) => {
                    
                    return(
                            
                            <span className={classes.product} key={product.productId}>
                                <img className={classes.image} src={product.imageUrl} alt={product.productName}/>
                                <div className={classes.name}>{product.productName}</div>
                                <Stars/>
                                <div className={classes.price}><strong>por R${numberWithCommas(product.price)}</strong></div>
                                <button className={classes.buyButton} onClick={ (e) => {addProduct(product.productId)}}>COMPRAR</button>
                            </span>
                            
                    )
                })}
            </span>
        </span>
    )
}

  const useStyles = makeStyles({
    container: {
        fontFamily: 'Nunito, sans-serif',
        display: 'flex',
        flexDirection: 'column',
        marginLeft:'280px',
        marginBottom: '60px'
    },
    title: {
        fontSize: '20px',
        marginTop: '25px',
        
    },
    risk: {
        backgroundColor: '#C0C0C0',
        width: '30px',
        height: '5px',
        marginBottom: '20px'
    },
    image: {
        height: '200px'
    },
    name: {
        color: '#7A7A7A',
        fontSize: '12px'
    },
    price: {
        marginTop: '24px'
    },
    productList: {
        display: 'flex',
        overflowX: 'auto',
        height: '350px'
    },
    product: {
        display: 'flex',
        flexDirection: 'column',
        width: '200px',
        marginRight: '100px',
        
    },
    buyButton: {
        width: '125px',
        height: '32px',
        backgroundColor:'#000000',
        color: '#ffffff',
        marginTop: '24px',
        cursor: 'pointer'
    }
  
  });


  export default ProductList;