import React from "react";
import useCounter from "../../hooks/useCounter";
import useFetch from "../../hooks/useFetch";
import "../02-useEffect/effects.css";

const Layout = () => {
  const { counter, increment } = useCounter(1);
  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  const { author, quote } = !!data && data[0];
  return (
    <div>
      <h1>BreakingBad Custom Hooks</h1>
      <hr />

      <blockquote className="blockquote text-right">
        <p className="mb-0"> {quote} </p>
        <footer className="blockquote-footer mt-3">{author}</footer>
      </blockquote>

      <button className="btn btn-primary" onClick={increment}>
        Next quote
      </button>
    </div>
  );
};

export default Layout;
