import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [state, setstate] = useState({
    data: null,
    loading: true,
    error: null,
  });
  useEffect(() => {
    setstate({ data: null, loading: true });
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setstate({
          loading: false,
          error: null,
          data,
        });
      });
  }, [url]);
  return state;
};

export default useFetch;
