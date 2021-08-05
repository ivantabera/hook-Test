import React, { useEffect, useState } from 'react'
import './effects.css';
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name:'',
        email:''
    });

    const { name, email } = formState;

    /* El useEffect es un hook que nos va permitir ejecutar un 
    efecto secundario cuando algo suceda en nuestros compoentes, 
    al poner un arreglo vacio despues de la llave le indicamos a 
    este hook que solo se ejecute una vez, tambien se puede usar 
    para escuchar un cambio muy especifico en alguna parte del 
    state o de la aplicacion */
    useEffect( () => {
        // console.log('hey!');
    }, [] );

    useEffect( () => {
        // console.log('Cambio en el formState!');
    }, [formState] );

    useEffect( () => {
        // console.log('El email cambio!');
    }, [email] );

    const handleInputChange = ({ target }) => {
        console.log( target.name );
        setFormState({
            ...formState,
            [ target.name ]: target.value
        })
        
    }

    return (
        <>
            <h1>useEffect</h1>
            <h5>teclea en el nombre 123 y ve que sucede</h5>
            <hr />

            <div className="form-group" >
                <input 
                    type='text' 
                    name='name' 
                    className='form-control' 
                    placeholder='Tu nombre' 
                    autoComplete='off' 
                    value={ name } 
                    onChange={ handleInputChange } 
                />
            </div>

            <div className="form-group" >
                <input 
                    type='text' 
                    name='email' 
                    className='form-control' 
                    placeholder='email@gmail.com' 
                    autoComplete='off' 
                    value={ email } 
                    onChange={ handleInputChange } 
                />
            </div>

            { (name === '123') &&  <Message /> }

        </>
    )
}
