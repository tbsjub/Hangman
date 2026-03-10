
function WordDisplay({word, GuessedLetters}){
    return (
        <div className="WordDisplay">
            {
                word.split("").map((letter) => 
                    GuessedLetters.includes(letter)? 
                    <span> {letter} </span> : 
                    <span> _ </span>)
            }
        </div>
    )
}

export default WordDisplay