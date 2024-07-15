import { useState } from "react";
import './Square.css';
export default function Square(){
    
    const [value , setValue]=useState(null);

    const handleClicked=()=>{
        console.log("clicked");
    }

    return (
        <button className="square" onClick={handleClicked}>{value}</button>
    )
}