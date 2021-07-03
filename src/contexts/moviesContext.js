import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favorites, setFavorites] = useState( [] )
  const [myReviews, setMyReviews] = useState( {} )
  const [watchlist, setWatchlist] = useState( [] )

  const addToFavorites = (movie) => {
    setFavorites([...favorites,movie.id])
  };
  // We will use this function in a later section
  const removeFromFavorites = (movie) => {
    setFavorites( favorites.filter(
      (mId) => mId !== movie.id
    ) )
  };

  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };

  const addToWatchlist = (movie) => {
    setWatchlist([...watchlist,movie.id])
  };
  // We will use this function in a later section
  const removeFromWatchlist = (movie) => {
    setWatchlist( watchlist.filter(
      (mId) => mId !== movie.id
    ) )
  };

  return (
    <MoviesContext.Provider
      value={{
        favorites,
        watchlist,
        addToFavorites,
        removeFromFavorites,
        addReview,
        addToWatchlist,
        removeFromWatchlist,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;

  