import React from "react";
import search from '../assets/search.png'

const SearchBar =()=>{


    return(
        <div className="search-bar-container">
            <div className="search-bar">
                <img src={search} alt="search-logo" />
                <input type="search" placeholder="Search for the book you want and read it now... Sherlock Holmes, Harry Pot..."/>
            </div>
            <button>Search</button>
        </div>
    )
}

export default SearchBar;