import s from './GameBoarded.module.css'
import { useGameContext } from '../../Context/GameContext'
import { useEffect, useState } from 'react'
import { useThemeContext } from '../../Context/ThemeContext';

type AttemptElement = {
    word: string;
    matchArray: string[];
}

type AttemptElementMap = {
    [key: number]: AttemptElement;
}

export default function GameBoarded() {
    const {currentWord, currentRow, currentColumn, currentWordAttempt, attemptArray, setGameStatus, isResetting, setIsResetting} = useGameContext()
    const {themeColors} = useThemeContext()

  const changeCellColors = () => {
    const correctRow = currentRow - 1
    const attempt = attemptArray[correctRow]
    
  }

  const completeWordValidation = async  (row: number) => { 
    /*
    We want to validate the word attempt by comparing it to the current word.
    However, we want to prioritize the correct letters first, then the present letters, then the incorrect letters.
    If a letter is correct at an index, we want to remove the element at that index from the attempt array.
    This way, if the word is Arrow and they guess rrrrr it will only show 2 r's as present.
    */
    let correctRow = row - 1
    const attempt = attemptArray[correctRow]
    const result = currentWord.compareWords(attempt)
    console.log("attempt: ", attempt)
    console.log("currentWord: ", currentWord)
    for(let i = 0; i < result.matchArray.length; i++){
     updateCell(correctRow, i, result.matchArray[i], attempt.wordAttemptArray[i])
     // wait for 50ms before updating the next cell
     await new Promise(resolve => setTimeout(resolve, 170))
    }
    if(result.matchBoolean){
      setGameStatus("win")
    } else if (currentRow === 6) {
      setGameStatus("lose")
    }
  }


  const updateCell = (row: number, column: number, status: string, letter: string) => {
    const basicColorMap = {
      "correct": themeColors.cellCorrect,
      "present": themeColors.cellPresent,
      "incorrect": themeColors.cellIncorrect,
    }
    let color = basicColorMap[status as keyof typeof basicColorMap]
    const cell = document.getElementById(`cell-${row}-${column}`)
    if(cell){
      cell.style.backgroundColor = color
      cell.style.color = "white"
      cell.textContent = letter
    }
    return color
  }

  const resetCellContents = async () => {
      for(let i = 0; i < 6; i++){
        for(let j = 0; j < 5; j++){
          const cell = document.getElementById(`cell-${i}-${j}`)
          if(cell){
            cell.style.backgroundColor = "transparent"
            cell.textContent = ""
            await new Promise(resolve => setTimeout(resolve, 25))
          }
        }
      }
      setIsResetting(false)
  }

  useEffect(() => {
    if(currentRow > 0){

      completeWordValidation(currentRow)
    }
  },[currentRow])

  useEffect(() => {
    if(isResetting){
      resetCellContents()
    }
  }, [isResetting])


    return (
      <div className={s.container}>
        <div className={s.gameBoard}>
          {Array.from({length: 6}).map((_, rowIndex) => (
            <div key={rowIndex} className={s.row}>
              {Array.from({length: 5}).map((_, columnIndex) => (
                <div key={columnIndex} id={`cell-${rowIndex}-${columnIndex}`} className={s.cell}>
                  
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    )
}
