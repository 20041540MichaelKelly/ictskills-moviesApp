import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getUpComingMovies} from '../api/tmdb-api'
//import AddToFavoritesIcon from '../components/cardIcons/addToFavourites'
import PlaylistAddIcon from '../components/cardIcons/playlistAddIcon'

const UpComingMoviesPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('upcoming', getUpComingMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  // Redundant, but necessary to avoid app crashing.
  const watchlists = movies.filter(m => m.watchlist)
  localStorage.setItem('watchlists', JSON.stringify(watchlists))
  //const addToFavorites = (movieId) => true 

  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={movies}
      action={(movie) => {
        return <PlaylistAddIcon movie={movie} />
      }}
    />
 );
};

export default UpComingMoviesPage;