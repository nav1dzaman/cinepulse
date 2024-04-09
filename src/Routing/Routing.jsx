import React from 'react'
import {Routes,Route} from 'react-router-dom';
import { MovieDetails,MovieList,PageNotFound,Search } from '../pages';


function Routing() {
  return (
    <>
    <Routes>
        <Route path='' element={<MovieList/>}  />
        <Route path='movie/:id' element={<MovieDetails/> } />
        <Route path='movies/popular' element={<MovieList/>} />
        <Route path='movies/top' element={<MovieList/>} />
        <Route path='movies/upcoming' element={<MovieList/>}/>
        <Route path='search' element={<Search/>} />
        <Route path='*' element={<PageNotFound/>} />
    </Routes>
    </>
  )
}

export default Routing