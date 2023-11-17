
import React from "react";
import { useState} from "react"

let KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
]


export function Keyboard({addGuessedLetter,disablekeyboard }) {

  //function for hover colours 
  let [hoveredKey, setHoveredKey] = useState(false);
  let handleMouseEnter = (key) => {
    setHoveredKey(key);
  };
  let handleMouseLeave = () => {
    setHoveredKey(false);
  };

  //function for clicked keys handling
  let [clickedKeys, setClickedKeys] = useState([]);

  let handleClick = (key) => {
    setClickedKeys((prevClickedKeys) => [...prevClickedKeys, key]);
    setHoveredKey(null);
  };

  //to arrange the keyboard letters
  let columns = 10; 
  let rows = Math.ceil(KEYS.length / columns);


  // handling the button click with function because the there are 2 onclick events
  const handleButtonClick = (key) => {
    addGuessedLetter(key);
    handleClick(key);
  };


  return (
    <div
    style={{
      display: "flex",
      justifyContent: "center", // Center horizontally
      alignItems: "center", // Center vertically
      padding: "10px"
    }}
  >
  <div 
  style = {{
  
    display: "grid", 
    gridTemplateColumns: `repeat(${columns}, 40px)`,
        gridTemplateRows: `repeat(${rows}, 45px)`,
    gap: "10px",
  }}
  >

    
  {KEYS.map(key => {
    return <button key={key} 
    style={{
      padding: "5px", 
      fontSize: "25px", 
      backgroundColor: clickedKeys.includes(key) ? "gray" : hoveredKey === key ? "lightblue" : "white",  //hover over letter colour
      transition: "background-color 0.3s ease", // Smooth transition
      }}

      
      onMouseEnter={() => handleMouseEnter(key)}
      onMouseLeave={handleMouseLeave}
      onClick={() => handleButtonClick(key)}
      disabled={clickedKeys.includes(key)||disablekeyboard}


    
    >{key}</button>

    
  })}
  </div>
  </div>
  )
}