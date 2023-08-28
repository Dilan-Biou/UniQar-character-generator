import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Load from "./components/Load";

export default function App(){
     
    return(
        <div>
            <Load/>
            <Navbar/>
            <Main/>
            
        </div>
    )
}