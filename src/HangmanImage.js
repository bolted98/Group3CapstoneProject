import React, {useState} from "react";
import  {useEffect} from "react";

export function HangmanImage({numberOfGuesses}){

//To create a context for the hangman images of format png/jpg/jpeg
let imagesContext = require.context('./images', false, /\.(png|jpg|jpeg)$/);

//Get array of all image file paths
let imagePaths = imagesContext.keys();

//Import all images using the context into images array
let images = imagePaths.map(imagesContext);

//the wrong guesses
let [wrongGuessCount, setWrongGuessCount] = useState(0);
let maxWrongGuesses = images.length;



//to check the number of wrong guesses does not reach max
useEffect(() => {
    if (numberOfGuesses < maxWrongGuesses - 1) {
      setWrongGuessCount(numberOfGuesses);
    } else {
        setWrongGuessCount(numberOfGuesses)
      console.log("Game over")
    }
  }, [numberOfGuesses, maxWrongGuesses]);

let currentImage = images[wrongGuessCount];


return(
<div>
<img

        //to print out the image based on the nth guess
        src={currentImage}
        alt={`Wrong Guess ${wrongGuessCount + 1}`}
        style={{ width: "350px", height: "250px", margin: "50px" }}
      />
     
         
          </div>
          )
}