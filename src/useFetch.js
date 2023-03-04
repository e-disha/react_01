import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, isLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortControl = new AbortController()

    setTimeout(() => {
      fetch(url, {signal: abortControl.signal})
      .then(res => {
        if (!res.ok) {
          throw Error('Dicka shkoi keq...');
        } 
        return res.json();
      })
      .then(data => {
        isLoading(false);
        setData(data);
        setError(null);
      })
      .catch(err => {
        if(err.name === "AbortError"){
          console.log('fetch aborted')
        }  
        else{
        isLoading(false);
        setError(err.message);
    }})
    }, 1000);
  
    return () => abortControl.abort()
  }, [url])

  return { data, loading, error };
}
 
export default useFetch;