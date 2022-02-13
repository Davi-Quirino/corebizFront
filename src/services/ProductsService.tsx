
import axios from 'axios';


export const GetProducts = async(): Promise<any> => {

    await axios.get('https://corebiz-test.herokuapp.com/api/v1/products')
        .then( (resp) => {
            return resp.data    
        }).catch((err) => {
            console.error('Something wrong', err)
        })
  }


  export const SaveDataLocalStorage = (idproducts : string, products: any) => {
    const dataString = JSON.stringify({ products });
    window.localStorage.setItem(idproducts, dataString)
};

export const getDataLocalStorage = (products: string) => {
    return JSON.parse(window.localStorage.getItem(products) as string)
  }
  




