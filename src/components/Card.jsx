import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useList } from "../context/MovieContext";
import { useState } from "react";

function Card({ movie }) {
  const image = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  const { addToList, movieList, removeFromList,addToWatchList,watchList } = useList();
  const [exist, setExist] = useState(false);
  const [aseWatch,setAseWatch]=useState(false);

  useEffect(() => {
    for (let i = 0; i < movieList.length; i++) {
      if (movieList[i].id === movie.id) {
        setExist(true);
        // console.log(67)
      }
    }

    //  console.log(exist)
  }, [movieList]);

  useEffect(()=>{

    for (let i = 0; i < watchList.length; i++) {
      if (watchList[i].id === movie.id) {
        setAseWatch(true);
        // console.log(67)
      }
    }
  },[watchList])

  const handleClick = () => {
    addToList(movie);
    // console.log(exist)
  };
  const handleRemove = () => {
    removeFromList(movie);
    setExist(false);
  };

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Link to={`/movie/${movie.id}`}>
        <img className="rounded-t-lg" src={image} alt="" />
      </Link>
      <div className="p-5">
        <Link to={`/movie/${movie.id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {movie.title}
          
          { aseWatch ? (  <span class="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300 mx-2">
              Watched
            </span>):("")

          }
            
          </h5>
        </Link>
        <div className="flex justify-start align-bottom">
          {/* <button onClick={handleClick}><img  className="h-[50px]" src="add.png" alt="" /></button> */}

          {exist ? (
            // <button onClick={handleRemove}>
            //   <img className="h-[50px]" src="remove.gif" alt="remove" />
            // </button>
            <button onClick={handleRemove} type="button" class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Remove</button>
          ) : (
            // <button onClick={handleClick}>
            //   <img className="h-[50px]" src="add.gif" alt="remove" />
            // </button>
            <button onClick={handleClick }type="button" class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 mb-2">Add to list</button>
          )}

          {/* {exist? (<button onClick={handleRemove}>REMOVE</button>):( <button onClick={()=>{addToList(movie)}}>ADD</button>) } */}
        </div>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {movie.overview.split(" ").slice(0, 25).join(" ")}
        </p>
        
      </div>
    </div>
  );
}

export default Card;
