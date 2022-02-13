

import axios from 'axios';


export const PostRegister = (register: any): any => {

    axios.post('https://corebiz-test.herokuapp.com/api/v1/newsletter', register)
        .then( (resp) => {
            console.log('resp', resp) 
        }).catch((err) => {
            console.error('Something wrong', err)
        })
  }

