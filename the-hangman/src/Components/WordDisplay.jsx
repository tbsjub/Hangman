
function WordDisplay({word, GuessedLetters}){
    return (
        <div className="WordDisplay">
            {
                word.split("").map((index,letter) => 
                    GuessedLetters.includes(letter)? 
                    <span key={index}> {letter} </span> : 
                    <span> _ </span>)
            }
        </div>
    )
}

export default WordDisplay