import React from "react";
import { Routes, Route } from "react-router-dom";
import MovieDetails from "./pages/MovieDetails";
import MovieList from "./pages/MovieList";
import PageNotFound from "./pages/PageNotFound";
import Search from "./pages/Search";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WatchlistPage from "./pages/WatchlistPage";
function App() {
  document.title="Cine Pulse";
  return (
    <div>
      <Header/>
    
      <Routes>
        <Route path="" element={<MovieList apiPath={"movie/now_playing"} />} />
        <Route path="movie/:id" element={<MovieDetails/>} />
        <Route path="movies/popular" element={<MovieList apiPath="movie/popular"/>} />
        <Route path="movies/top" element={<MovieList apiPath="movie/top_rated"/>} />
        <Route path="movies/upcoming" element={<MovieList apiPath="movie/upcoming"/>} />
        <Route path="watchlist" element={<WatchlistPage/>} />
        <Route path="search" element={<Search apiPath="search/movie"/>}/>
        <Route path="*" element={<PageNotFound title={"Page Not Found"} />} /> 
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
