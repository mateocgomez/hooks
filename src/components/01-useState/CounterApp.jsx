import React, { useState } from 'react';
import "./counter.css";


const CounterApp = () => {
    const [counter, setCounter] = useState(0);
    const onSubmitBtn = () => {
        setCounter( counter + 1 );
    };
    return ( 
        <>
            <h1>Counter { counter }</h1>
            <hr />

            <button
              className="btn btn-primary"
              onClick={onSubmitBtn}
            >
                +1
            </button>
        </>
     );
}
 
export default CounterApp;