import React, { useContext } from "react";
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd'
import { MoviesContext } from "../../contexts/moviesContext";
//import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";

const AddToPlaylistIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToWatchlist = (e) => {
    e.preventDefault();
    context.addToWatchlist(movie);
    console.log(movie);
  };
  return (
    <IconButton aria-label="add to favorites" onClick={handleAddToWatchlist}>
      <PlaylistAddIcon color="primary" fontSize="large" />
    </IconButton>
    
  );
};
export default AddToPlaylistIcon;