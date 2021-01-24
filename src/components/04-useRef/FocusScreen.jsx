import React, { useRef } from "react";
import "../02-useEffect/effects.css";

const FocusScreen = () => {
  const inputRef = useRef();
  const handleSubmit = () => {
    inputRef.current.select();
  };
  return (
    <>
      <h1>Focus Screen</h1>

      <input className="form-control" placeholder="Name" />

      <button
        className="btn btn-outline-primary mt-5"
        onClick={handleSubmit}
        ref={inputRef}
      >
        Focus
      </button>
    </>
  );
};

export default FocusScreen;
