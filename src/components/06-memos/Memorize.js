import React, { useState } from 'react';
import './memorize.css';
import { useCounter } from '../../hooks/useCounter';
import { Small } from './Small';

export const Memorize = () => {

    const { counter, increment } = useCounter(10)
    const [show, setShow] = useState(true);

    const handleClick = () => {
        setShow( !show );
    };

    return (
        <>
            <h1>Memorize</h1>
            <hr />

            <h3>Counter: <Small value= { counter } /> </h3>

            <button
                className="btn btn-primary"
                onClick={increment}
            >
                +
            </button>

            <button
                className="btn btn-outline-primary ml-3"
                onClick={ handleClick }
            >
                show/hide {JSON.stringify(show)}
            </button>

        </>
    )
}
