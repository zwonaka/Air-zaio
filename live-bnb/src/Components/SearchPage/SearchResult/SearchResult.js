import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarIcon from "@mui/icons-material/Star";
import classes from "./SearchResult.module.css";

function SearchResult({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}) {
  return (
    <div className={classes.searchResult}>
      <img src={img} alt="" />
      <FavoriteBorderIcon className={classes.searchResult__heart} />
      <div className={classes.searchResult__info}>
        <div className={classes.searchResult__infotop}>
          <p>{location}</p>
          <h3>{title}</h3>
          <p>___</p>
          <p>{description}</p>
        </div>
        <div className={classes.searchResult__infoBottom}>
          <div className={classes.searchResult__stars}>
            <StarIcon className={classes.searchResult__star} />
            <p>
              <strong>{star}</strong>
            </p>
          </div>
          <div className={classes.searchResults__price}>
            <h2>{price}</h2>
            <p>{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
