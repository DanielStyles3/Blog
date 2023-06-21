import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isloading, setisLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont=new AbortController();
    
    setTimeout(() => {
      // fetch(url,{signal: abortCont.signal})
      fetch(url)
      .then(res => {
        if (!res.ok) { // error coming back from server
          throw Error('could not fetch the data for that resource');
        } 
        return res.json();
      })
      .then(data => {
        setisLoading(false);
        setData(data);
        setError(null);
      })
      .catch(err => {
        // auto catches network / connection error
        if(err.name==='AbortError'){
          console.log('fetch aborted')
        }
        else{
          setisLoading(false);
          setError(err.message);
        }
        
        
        
      })
    }, 1000);
    return() =>abortCont.abort();
  }, [url])

  return { data, isloading, error };
}
 
export default useFetch;