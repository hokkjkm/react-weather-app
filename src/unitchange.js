import React, { useState } from "react";

import "./unitchange.css";

export default function Unitchage(props){
    const [unit,setUnit] = useState("celsius");
    
    function converttoF(event){
        event.preventDefault();
        setUnit("fahrenheit");
    }

    function converttoC(event){
        event.preventDefault();
        setUnit("celsius");
    }

    function calculate(){
        return (
            (props.celsius * 9)/5 + 32
        );
    }

    if(unit === "celsius") {
        return(
            <div className="temprature">
                {Math.round(props.celsius)} {" "}
                <span className="unit">C° | {" "}<a href="/" onClick={converttoF}>
                    F° </a>  </span>
            </div>
        );
    } else {
        return(
            <div className="temprature">
                {Math.round(calculate())} {" "}
                <span className="unit"><a href="/" onClick={converttoC}>C°</a> |{" "} 
                    F°   </span>
            </div>
        );

    }
    
}