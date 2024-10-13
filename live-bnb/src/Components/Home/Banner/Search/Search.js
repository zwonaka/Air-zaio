import React,{useState} from "react";
import classes from "./Search.module.css";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import PeopleIcon from "@mui/icons-material/People"
import {Button} from "@mui/material"
import {useNavigate} from  "react-router-dom"

function Search() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setendDate] = useState(new Date());
  const navigate = useNavigate()

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setendDate(ranges.selection.endDate);
  }
  return (
    <div className={classes.search}>
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
      
      <h2>Number of People <PeopleIcon /> </h2>
      <input min={0} defaultValue={2} type="number" />
      <Button onClick={() => navigate("/search")} >Search Airbnb</Button>
    </div>
  );
}

export default Search;
