export default function GameStatus({ word, GuessedLetters, WrongCount, MaxCount }) {
    let message;

    if (word.split("").every(letter => GuessedLetters.includes(letter))) {
        message = (
            <p>
                Congratulations, You Won! 🥳 <br /> <br />
                The word is: {word}
            </p>
        );
    } else if (WrongCount >= MaxCount) {
        message = (
            <p>
                Oops, You couldn't guess the word! ☹️ <br /> <br />
                The word is: {word} 
            </p>
        );
    } else {
        message = <p>Guess Your next Letter 😊 </p>;
    }

    return message;
}
