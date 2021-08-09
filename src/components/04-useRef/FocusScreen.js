import React, { useRef } from 'react';
import './focusScreen.css';

export const FocusScreen = () => {

    const refInput = useRef()

    const handleClick = () => {
        refInput.current.select();
        console.log('refInput', refInput)
    };

    return (
        <>
            <h1>Focus Screen</h1>
            <hr />

            <input 
                ref= { refInput }
                className="form-control"
                placeholder="Su nombre"
            />

            <button 
                className="btn btn-outline-primary mt-5" 
                onClick={ handleClick }
            >
                Focus
            </button>

        </>
    )
}
