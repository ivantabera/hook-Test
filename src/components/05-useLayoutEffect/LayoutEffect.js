import React, { useLayoutEffect, useRef, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './layoutEffect.css';


export const LayoutEffect = () => {

    const { counter, increment } = useCounter(1);

    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const { quote } = !!data && data[0];

    const ptag = useRef();

    const [boxSize, setBoxSize] = useState({});

    useLayoutEffect(() => {
        setBoxSize( ptag.current.getBoundingClientRect() );
    }, [quote]);

    return (
        <>
            <h1>Layout Effect</h1>
            <hr />

            <blockquote className="blockquote text-right" >
                <p 
                    className="mb-0"
                    ref={ ptag }
                >
                    { quote }
                </p>
            </blockquote>

            <pre> { JSON.stringify(boxSize, null, 3) } </pre>

            <button 
                className="btn btn-primary"
                onClick={ increment }
            >Siguiente quote</button>
        </>
    )
}
