import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Backup from "../assets/avatar.jpg";
function MovieDetails() {
  const params = useParams();
  const [movies, setMovies] = useState({});
  const image = movies.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movies.poster_path}`
    : Backup;

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=9badf52aa9b258610b366cee54589d3c`
      );
      const data = await response.json();
      setMovies(data);
      console.log(data);
    };
    fetchMovie();
  }, []);

  return (
    <div className="flex justify-center flex-wrap py-5 ">
      <div className="max-w-sm">
        <img className="rounded" src={image} alt="" />
      </div>

      <div className="max-w-2xl mx-10 my-5">
        <p className="text-4xl font-bold ">{movies.title}</p>
        <p className="p-1 flex">{movies.overview}</p>
        <div className="flex flex-around flex-wrap space-x-3 font-bold ">
          {movies.genres &&
            movies.genres.map((gnre) => (
              <p className="border-2 p-2">{gnre.name}</p>
            ))}
        </div>
        <p className="my-5">Popularity : {movies.popularity}</p>
        <p className="my-5">Runtime: {movies.runtime}</p>
        <p className="my-5">Release Date: {movies.release_date}</p>
        <p className="my-5">Budget: {movies.budget}</p>
        <p className="my-5">Revenue: {movies.revenue}</p>
      </div>
    </div>
  );
}
export default MovieDetails;
