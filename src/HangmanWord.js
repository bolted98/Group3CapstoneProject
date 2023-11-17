

export function HangmanWord({guessedLetter, wordToGuess,reveal=false}){
    
    
    
    return(
        <div 
        style={{
            display: "flex",
            gap: "15px",
            fontSize: "70px",
            fontWeight:"bold",
            justifyContent: "center",
            textTransform:"uppercase"
            
            }}
            >
            {/* to split the letters for guessing */}
            {wordToGuess.split("").map((letter,index)=>(
                
                <span style={{
                    minWidth : "75px",
                    borderBottom: ".1em solid black" }} key={index}>
                    
                <span
                style = {{

                    //only show the letters if correctly guessed or game over
                    visibility: guessedLetter.includes(letter) || reveal
                    ? "visible"
                    : "hidden",
                    color:!guessedLetter.includes(letter) && reveal ?"red":"black",
                }}>
                    {letter}
                </span>
                </span>


                ))}
            </div>
    )}