import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { useList } from '../context/MovieContext';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
function WatchCard({ movie }) {
    const image = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
    const{removeFromList,addToWatchList,watchList,removeFromWatchList}=useList();
    const[done,setDone]=useState(false);

    const handleCl=()=>{
      console.log(movie);
      addToWatchList(movie);
      setDone(true);
    }

    const handleRemove=()=>{
      removeFromWatchList(movie);
      setDone(false);
    }

    useEffect(()=>{

      for( let i=0;i<watchList.length;i++){
        if(movie.id === watchList[i].id){
          setDone(true);
        }
      }
    },[watchList])


    return (


      <div className="max-w-[250px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">







        <Link to={`/movie/${movie.id}`}>
          <img className="rounded-t-lg" src={image} alt="" />
        </Link>
        <div className="p-5">
          <Link to={`/movie/${movie.id}`}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {movie.title}
            </h5>
          </Link>
          {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {movie.overview}
          </p> */}
          <div className="flex ">
            {/* <button onClick={()=>removeFromList(movie)}><img  className="h-[50px]" src="remove.gif" alt="remove" /></button> */}

            <button onClick={()=>removeFromList(movie)} type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Remove</button>


            {done? (
              
              
              // <button onClick={handleRemove} className=' w-[42px] mx-[3px]'> <img src="done.png" alt="" /></button>

              <button onClick={handleRemove} type="button" class="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Watched</button>
          
          
          
          ):(  
          // <button onClick={handleCl} className=' w-[50px] mx-[3px]'> <img src="hd.gif" alt="" /></button>

          <button onClick={handleCl} type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Watch it!</button>
        
        
        )
          
          
          }
            
           

            
            
            </div>
        
        </div>
      </div>
    );
}

export default WatchCard