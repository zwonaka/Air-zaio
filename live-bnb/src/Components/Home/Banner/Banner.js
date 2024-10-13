import React, { useState } from "react";
import classes from "./Banner.module.css";
import { Button } from "@mui/material";
import Search from "./Search/Search"
import {useNavigate} from "react-router-dom"

const Banner = () => {
  const navigate = useNavigate()
  const [showDatePicker, setshowDatePicker] = useState();
  const showDatePickerHandler = () => {
    setshowDatePicker((prevState) => !prevState);
  };

  return (
    <div className={classes.banner}>
      <div className={classes.banner__search}>
          {showDatePicker? <Search /> : null}
        <Button
          onClick={showDatePickerHandler}
          variant="outlined"
          className={classes.banner__searchButton}
        >
          {!showDatePicker? "Search Dates" : "Hide" }
          
        </Button>

      </div>
      <div className={classes.banner__info}>
      <h1>Explore and Expand Your Horizons</h1>
<h5>Discover a unique getaway that reveals the hidden treasures right around you.</h5>

        <Button onClick={() => navigate("/search")} variant="outlined">Explore Nearby</Button>
      </div>
    </div>
  );
};

export default Banner;
