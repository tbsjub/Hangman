import React, {useState} from 'react';
import data from '../data/data.json';
import GuessInput from './GuessInput.jsx';
import WordDisplay from './WordDisplay.jsx';
import GameStatus from './GameStatus.jsx';
import TheMan from './theman.jsx';
import RestartGame from './RestartGame.jsx';


function getRandomWord(){
    const randomIndex = Math.floor(Math.random()*data.length);
    return data[randomIndex]
}


function Hangman(){
    const [word, setWord] = useState(getRandomWord);   
    const [GuessedLetters, setGuessedLetters] = useState([]);
    var [WrongCount, setWrongCount] = useState(0);
    const MaxCount = 6;

    const HandleGuess = (letter) => {
        if (GuessedLetters.includes(letter)){
            return;
        }
        else {
            setGuessedLetters((prev) => [...prev,letter]);
        }

        if (!word.includes(letter)) {
            setWrongCount((prev) => prev + 1)
        }
    }

    const gameOver = (MaxCount <= WrongCount) || word.split("").
                    every((l) => GuessedLetters.includes(l));

    
    const restartGame = () =>{
            setWord(getRandomWord);
            setGuessedLetters([]);
            setWrongCount(0);
        }

    return (
        <>
            
            <h1 className='title'>THE HANGMAN</h1>
            <div className='game-container'>
                {/* we call the wordDisplay with the word and the guessLetters to do its thing */}
                <div className='game-control'>
                    <WordDisplay word={word} GuessedLetters={GuessedLetters}/>  
                    <GuessInput onGuess={HandleGuess} disabled={gameOver}/>
                    <GameStatus word={word} GuessedLetters={GuessedLetters} 
                                WrongCount={WrongCount} MaxCount={MaxCount}
                    />
                    <RestartGame gameOver={gameOver} restartGame={restartGame}/>

                </div>
                <div className='drawing'>
                    <TheMan className='TheMan' WrongCount={WrongCount}/>
                </div>
                
            </div>
        </>
    )
}



export default Hangman