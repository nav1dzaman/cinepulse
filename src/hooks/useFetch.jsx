import React, { useState,useEffect } from 'react'

function useFecth(apiPath,queryTerm="") {
  const [data, setData] = useState([]);
  const url=`https://api.themoviedb.org/3/${apiPath}?api_key=9badf52aa9b258610b366cee54589d3c&query=${queryTerm}`
  useEffect(() => {
      async function fetchMovies(){
      const response= await fetch(url);
      const jsn=await response.json();
      setData(jsn.results);
    }

    fetchMovies();
  }, [url]);

  return { data };
  
 
}

export default useFecth