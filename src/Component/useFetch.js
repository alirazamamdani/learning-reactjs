import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setInLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const AbortCont = new AbortController();
    setTimeout(() => {
      fetch(url, { signal: AbortCont.signal })
        .then((response) => {
          if (!response.ok) {
            throw Error("could not fetch the data for that resource");
          }else 
          return response.json();
        })
        .then((data) => {
          setData(data);
          setInLoading(false);
          setError(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("Abort Fetch");
          } else {
            setInLoading(false);
            setError(err.message);
          }
        });
    }, 1000);
    return () => AbortCont.abort();
  }, [url]);
  return { data, isLoading, error };
};

export default useFetch;
