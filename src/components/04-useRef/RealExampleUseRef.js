import React, { useState } from 'react';
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';
import './focusScreen.css';

export const RealExampleUseRef = () => {

    const [show, setShow] = useState(false)

    const handleClick = () => {
        setShow(!show);
    };

    return (
        <>
            <h1>Real Example useRef</h1>
            <hr />

            { show && <MultipleCustomHooks />}

            <button
                className="btn btn-primary m-3"
                onClick= { handleClick }
            >
                hide / show
            </button>
        </>
    )
}
