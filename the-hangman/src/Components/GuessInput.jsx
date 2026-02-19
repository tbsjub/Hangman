import { useState } from "react"

function GuessInput({ onGuess, disabled }) {
    var [input, setInput] = useState('');

    const handleSubmit = () => {
        if (!input.trim()) return;
        onGuess(input);
        setInput('');
    }

    const handleKey = (e) => {
        if (e.key === "Enter"){
            handleSubmit();
        }
    }

    return(
        <>
            <input 
            className="input"
            value={input} 
            onChange={(e) => setInput(e.target.value.toLowerCase())}
            onKeyDown={handleKey}
            disabled={disabled}
            />
            <button 
                className="submit-button"
                onClick={handleSubmit}
                    disabled={disabled}
            >
                Submit
            </button>
            
            
        </>
    )
}


export default GuessInput