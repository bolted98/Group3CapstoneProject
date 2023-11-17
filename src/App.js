import React, { useEffect } from "react"
import fruits from "./wordlist.json"
import { useState} from "react"
import { HangmanImage } from "./HangmanImage"
import { HangmanWord } from "./HangmanWord"
import { Keyboard } from "./Keyboard"




function App(){
  
    //to retrieve the fruit names from wordlist
    let [wordToGuess, setWordToGuess] = useState(()=> {
      return fruits[Math.floor(Math.random()*fruits.length)]
    })

    //guessedletters array initally empty
    let [guessedLetter, setguessedLetter] = useState([])

    //wrong guesses
    let incorrectLetters = guessedLetter.filter(letter => !wordToGuess.includes(letter))
    
    //function to add letters 
    function addGuessedLetter(letter) {
      if(guessedLetter.includes(letter)||isLoser||isWinner)return
      setguessedLetter(currentLetters => [...currentLetters, letter])
    }


    //a function to handle the keyboard typing event
    useEffect(()=>
    {
      function handler(e){
        let key = e.key

        if(!key.match(/^[a-z]$/)) return
        addGuessedLetter(key)
      }
      document.addEventListener("keypress",handler)

      return() => {
        document.removeEventListener("keypress",handler)
      }
    },[guessedLetter])

    let isLoser = incorrectLetters.length >=6
    let isWinner = wordToGuess.split("").every(letter=>guessedLetter.includes(letter))

    
    //function to refresh page when press "enter"
    let handleRefresh = () => {
       window.location.reload();
     };

    useEffect(() => {
      let handleKeyPress = (e) => {
        if (e.key === "Enter") {
          handleRefresh();
        }
      };
  
      document.addEventListener("keydown", handleKeyPress);
  
      return () => {
        document.removeEventListener("keydown", handleKeyPress);
      };
    }, []);
  
    
    
   
    
    return (
    <div 
      style={{
      maxWidth: "1000px",
      display: "flex",
      flexDirection: "column",
      gap: "190px",
      margin: "0 auto",
      textAlign: "center"
        }    
      }
    >
      {/* to print out the words on top for users */}
    <div style={{ fontSize:"35px",textAlign:"center"}}>
      <h2 style={{margin:"0px"}}>Guess the Fruit!</h2>
      {!isLoser&&!isWinner && <p style={{margin:"0px"}}>You can use your keyboard or click on the keys!</p>}
      {isWinner && "You won! - Press Enter to Refresh and try again"}
      {isLoser && "You lost! - Press Enter to Refresh and try again"}


      <HangmanImage numberOfGuesses = {incorrectLetters.length} />
      <HangmanWord 
      reveal={isLoser} 
      guessedLetter={guessedLetter} 
      wordToGuess={wordToGuess}
      />
      <Keyboard 
      disablekeyboard={isWinner||isLoser}
      addGuessedLetter={addGuessedLetter}
      />
      

    </div>
    
    </div>
    
    )
    
}
export default App