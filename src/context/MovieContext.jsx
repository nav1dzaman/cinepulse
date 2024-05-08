import { createContext, useContext, useReducer } from "react";
import movieReducer from "../reducer/movieReducer";

const initialState = {
  movieList: [],
  watchList:[],
};

const MovieContext = createContext(initialState);

export const Movieprovider = ({ children }) => {
  const [state,dispatch]=useReducer(movieReducer,initialState)

  // useEffect(() => {
  //   const storedState = JSON.parse(localStorage.getItem('movieState')) || [];
  //   if (storedState && storedState.length>0) {
  //     dispatch(
  //       { type: 'RESTORE_STATE', 
  //       payload: storedState }
  //       );
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('movieState', JSON.stringify(state));
  // }, [state]);

  const addToList=(movie)=>{
    const updatedCart=state.movieList.concat(movie);
   
    dispatch({
      type:"ADD_TO_LIST",
      payload:{
        movie: updatedCart
      }
    })
    
  }

  const addToWatchList=(movie)=>{
    const updatedCart=state.watchList.concat(movie);
   
    dispatch({
      type:"ADD_TO_WATCHLIST",
      payload:{
        movie: updatedCart
      }
    })
    
  }

  const removeFromWatchList=(movie)=>{
    const updatedCart=state.watchList.filter(current =>current.id!==movie.id);
    console.log(updatedCart);
    dispatch({
      type:"REMOVE_FROM_WATCHLIST",
      payload:{
        movie: updatedCart
      }
    })
    
  }

  const removeFromList=(movie)=>{
    const updatedCart=state.movieList.filter(current =>current.id!==movie.id);
    console.log(updatedCart);
    dispatch({
      type:"REMOVE_FROM_LIST",
      payload:{
       
        movie: updatedCart
      }
    })
    
  }


  const value = {
    movieList:state.movieList,
    watchList:state.watchList,
    addToList,
    removeFromList,
    addToWatchList,
    removeFromWatchList
  };

  return <MovieContext.Provider value={value}>{children}</MovieContext.Provider>;
};

export const useList = () => {
  const context = useContext(MovieContext);
  return context;
};
