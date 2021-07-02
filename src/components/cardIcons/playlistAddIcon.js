import React from "react";
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd'
import { Link } from "react-router-dom";

const plIcon = ({ movie }) => {
  return (
    <Link>
     
      <PlaylistAddIcon color="primary" fontSize="large" />
    </Link>
  );
};

export default plIcon;