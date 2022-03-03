import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import { useStateValue } from '../StateProvider';
import './Search.css';
import MicOutlinedIcon from "@mui/icons-material/MicOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Button from "@mui/material/Button";
import {actiontypes} from '../reducer';




function Search(hideButtons = true) {
const [input, setInput] = useState("");
const [{},dispatch] = useStateValue();
const navigate = useNavigate();


const search = (e) => {
  e.preventDefault();
  console.log('you hit search nutton ',input)
 
 dispatch({
   type:actiontypes.SET_SEARCH_TERM,
   term: input
 })
 
  navigate("/search");
};

  return (
    <form className="search">
      <div className="search_input">
        <SearchOutlinedIcon className="search_inputicon" />

        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <MicOutlinedIcon />
      </div>

      {!hideButtons ? (
        <div className="search_buttons">
          <Button type="submit" onClick={search} variant="outlined">
            Goggle Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className="search_buttons">
          <Button
            className="search_buttonsHidden"
            type="submit"
            onClick={search}
            variant="outlined"
          >
            Goggle Search
          </Button>
          <Button className="search_buttonsHidden"
                  variant="outlined">
            I'm Feeling Lucky
          </Button>
        </div>
      )}
    </form>
  );
}

export default Search