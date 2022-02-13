import { makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import RegisterInterface from '../interfaces/RegisterInterface';
import { PostRegister } from '../services/RegisterService';


const Register = (props : any) => {

    const [register, setRegister] = useState<RegisterInterface>({name: '', email: ''})

    const classes = useStyles();

    const onSubmit = (e: any) => {
        e.preventDefault();
        if(!register.name) return;
        try{
            var resp = PostRegister(register);
            if(resp.status === 200){
                setRegister({name: '', email: ''})
                alert('Cadastro concluído com sucesso!')
            }
        } catch( err) {
            setRegister({name: '', email: ''})
            alert('Email inválido, tente novamente!')
        }
    }

    return (
        <>
        <div className={classes.header}>
            <span className={classes.title}><strong>Participe de nossas news com promoções e novidades!</strong></span>
            <form
                onSubmit ={onSubmit}>
                <input 
                    value={register.name}
                    className={classes.input}
                    onChange={(e : any) => setRegister((prevState) => ({
                        ...prevState,
                        name: e.target.value
                      }))}
                    id='name'
                    name='name'
                    placeholder='Digite seu nome'
                    type='text'
                     />
                <input 
                    value={register.email}
                    className={classes.input}
                    onChange={(e : any) => setRegister((prevState) => ({
                        ...prevState,
                        email: e.target.value
                      }))}
                    id='email'
                    name='email'
                    type='email'
                    placeholder='Digite seu email'/>
                <button 
                    className={classes.button}
                    type="submit"
                    >Eu quero!</button>
            </form>
        </div>
        </>
    )
  }

  const useStyles = makeStyles({
    header: {
        fontFamily: 'Nunito, sans-serif',
        display: 'flex',
        justifyContent: 'center',
        flexDirection:'column',
        flexWrap: 'wrap',
        alignItems:'center',
        height: '150px',
        backgroundColor: "#f2f2f2",
        
    },
    title: {
        marginBottom: '16px',
    },
    input: {
        width: '280px',
        height: '48px',
        marginRight: '8px'
    },
    button: {
        width: '140px',
        height: '54px',
        color: '#ffffff',
        backgroundColor: '#000000'
    }
  
  });


  export default Register;