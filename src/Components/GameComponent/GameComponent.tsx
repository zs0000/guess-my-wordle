import GameBoarded from '../GameBoarded/GameBoarded'
import GameInputBar from '../GameInputBar/GameInputBar'
import s from './GameComponent.module.css'
import { useGameContext } from '../../Context/GameContext'
import GameStatusMessageModal from '../GameStatusMessageModal/GameStatusMessageModal'
import { useEffect } from 'react'
export default function GameComponent() {
  const {gameStatus, currentWord, currentWordAttempt} = useGameContext()

  useEffect(() => {
    console.log("currentWord: ", currentWord)
  },[currentWord])

  return (
    <div className={s.container}>
      {gameStatus === "win" || gameStatus === "lose" ? (
        <div className={s.gameStatusMessageModal}>
          <GameStatusMessageModal />
        </div>
      ) : null}
        <div className={s.gameBoardContainer}>
            <GameBoarded />
        </div>
        <div className={s.gameInputContainer}>
            <GameInputBar />
        </div>
    </div>
  )
}
