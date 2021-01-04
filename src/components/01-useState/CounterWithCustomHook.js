import React from 'react';
import useCounter from '../../hooks/useCounter';
import './counter.css';


const CounterWithCustomHook = () => {
    const { state, increment, decrement, reset } = useCounter(27);
    return ( 
        <>
            <h1>Counter with hook: { state }</h1>
            <hr />

            <button className="btn btn-primary mr-4" onClick={increment}>+ 1</button>
            <button className="btn btn-secondary" onClick={decrement}>- 1</button>
            <button className="btn btn-secondary" onClick={reset}>Reset</button>
        </>
     );
}
 
export default CounterWithCustomHook;