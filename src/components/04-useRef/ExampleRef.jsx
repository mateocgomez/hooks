import React, { useState } from "react";
import "../02-useEffect/effects.css";
import MultipleCustomHooks from "../03-examples/MultipleCustomHooks";

const ExampleRef = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <h1>Example Ref</h1>
      <hr />
      {show && <MultipleCustomHooks />}
      <button className="btn btn-primary mt-4" onClick={() => setShow(!show)}>
        Show/hide
      </button>
    </>
  );
};

export default ExampleRef;
