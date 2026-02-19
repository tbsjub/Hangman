export default function RestartGame({gameOver, restartGame})
{
    if (!gameOver) return null;

    else {
        return(
        <button className="submit-button" onClick={restartGame}>
            Restart
        </button>)
    }
    
}

