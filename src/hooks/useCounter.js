import { useState } from "react";

const useCounter = (initialState = 10) => {

    const [state, setstate] = useState(initialState)
    const increment = () => {
        setstate(state + 1);
    }

    const decrement = () => {
        setstate(state - 1);
    }

    const reset = () => {
        setstate(initialState);
    }
    return {
        state,
        increment,
        decrement,
        reset,
     };
}
 
export default useCounter;