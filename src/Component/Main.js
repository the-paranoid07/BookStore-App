import React from "react";
import { useState } from "react";
import MainBooks from "./MainBooks";
import MoreBooks from "./MoreBooks";

const Main = ()=>{

    const [showFirstComponent, setShowFirstComponent] = useState(false);

    return (
        <div className="main-container">
          {
            !showFirstComponent ?  
            <MainBooks 
            showFirstComponent = {showFirstComponent}
            setShowFirstComponent={setShowFirstComponent}/> : <h1>Hello</h1>
          }
          <MoreBooks/>
        {/* <button onClick={()=>{setButton(Math.random()*1000)}}>CLick Me</button> */}
        </div>
    )
}

export default Main;