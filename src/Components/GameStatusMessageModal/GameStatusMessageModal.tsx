import s from "./GameStatusMessageModal.module.css"
import { useGameContext } from "../../Context/GameContext"
import { useThemeContext } from "../../Context/ThemeContext"
export default function GameStatusMessageModal() {
  const {currentWord, currentRow,
    gameStatus, setGameStatus, resetGame
    } = useGameContext()
  const {themeColors} = useThemeContext()


  const handlePlayAgain = () => {
    resetGame()
    setGameStatus("")
  } 


  const statusMap: Record<string, string> = {
    "win": "Success!",
    "lose": "Failure..",
  }
  const messageMap: Record<string, string> = {
    "win": `You guessed the word in ${currentRow} attempts,`,
    "lose": `You didn't guess the word in 6 attempts, the word was ${currentWord.word}`,
  }
  

  return (
    <div className={s.container}>
        <div className={s.modal + " " + themeColors.primaryOutline + " " + themeColors.formBackground + " " + themeColors.primaryText}>
            <div className={s.modalContent}>
            <h1 className={`${themeColors.primaryText} text-4xl`}>{statusMap[gameStatus]}</h1>
            <p className={`${themeColors.primaryText} text-2xl`}>{messageMap[gameStatus]}</p>
            <button onClick={handlePlayAgain} className={themeColors.primaryButton}>Play Again</button>
            </div>
        </div>
    </div>
  )
}
