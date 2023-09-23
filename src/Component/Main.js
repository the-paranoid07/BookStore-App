import React from "react";
import { useState } from "react";
import MainBooks from "./MainBooks";
import MoreBooks from "./MoreBooks";
import Book from "./Book";

const Main = ()=>{

    const [showFirstComponent, setShowFirstComponent] = useState(false);
    const [clickedBook,setClickedBook] = useState({});

    console.log("clicked book in main .js",clickedBook)
    return (
        <div className="main-container">
          {
            !showFirstComponent ?  
            <MainBooks 
            setClickedBook = {setClickedBook}
            showFirstComponent = {showFirstComponent}
            setShowFirstComponent={setShowFirstComponent}/> : <h1>Hello</h1>
          }
          {
                showFirstComponent && <Book clickedBook ={clickedBook}/>
          }
          <MoreBooks/>
        {/* <button onClick={()=>{setButton(Math.random()*1000)}}>CLick Me</button> */}
        </div>
    )
}

export default Main;