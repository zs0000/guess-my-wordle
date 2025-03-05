import s from './GameBoard.module.css'
import { useGameContext } from '../../Context/GameContext'
import { useEffect, useState } from 'react'

type AttemptElement = {
    word: string;
    matchArray: string[];
}

type AttemptElementMap = {
    [key: number]: AttemptElement;
}

export default function GameBoard() {
    const {currentWord, currentRow,  currentWordAttempt} = useGameContext()

    const [attemptElementMap, setAttemptElementMap] = useState<AttemptElementMap>({
        0: {
            word: "     " ,
            matchArray: ["blank", "blank", "blank", "blank", "blank"],
        },
        1: {
            word: "     ",
            matchArray: ["blank", "blank", "blank", "blank", "blank"],
        },
        2: {
            word: "     ",
            matchArray: ["blank", "blank", "blank", "blank", "blank"],
        },
        3: {
            word: "     ",
            matchArray: ["blank", "blank", "blank", "blank", "blank"],
        },
        4: {
            word: "     ",
            matchArray: ["blank", "blank", "blank", "blank", "blank"],
        },
        5: {
            word: "     ",
            matchArray: ["blank", "blank", "blank", "blank", "blank"],
        },

    })




    //we are going to update the HTML elements when the current row changes, we want to update the background color of the cells based on the matchArray
    const updateCellBackground = (index: number, matchArray: string[]) => {
        const correctRow = currentRow - 1
        const cell = document.getElementById(`cell-${correctRow}-${index}`);
        const basicColorMap = {
          "correct": "green",
          "present": "yellow",
          "incorrect": "red",
          "blank": "",
        }
        if(cell) {
            // Add type assertion to fix the indexing error
            cell.style.backgroundColor = basicColorMap[matchArray[index] as keyof typeof basicColorMap];
        }
    }

    const updateAttemptElementMap = (index: number, word: string, matchArray: string[]) => {
      console.log("updating attempt element map")
      console.log("index: ", index, "word: ", word, "matchArray: ", matchArray)
        const newAttemptElementMap = {...attemptElementMap}
        newAttemptElementMap[index] = {word, matchArray}
        setAttemptElementMap(newAttemptElementMap)
        console.log("attemptElementMap: ", attemptElementMap)
    }

    useEffect(() => {
       if(currentWordAttempt.getWordAttemptArray().length > 0) {
        updateAttemptElementMap(currentRow, currentWordAttempt.getWordAttempt(), currentWord.compareWords(currentWordAttempt).matchArray);
        
      } else{
        updateAttemptElementMap(currentRow, "     ", ["blank", "blank", "blank", "blank", "blank"]);
       }
    }, [currentRow, currentWordAttempt]);

    useEffect(() => {
      if(currentRow > 0){
        for (let i = 0; i < 5; i++) {
          updateCellBackground(i, attemptElementMap[currentRow-1].matchArray);
        }
      }
      console.log("attemptElementMap: ", attemptElementMap)
    },[currentRow])
    return (
      <div className={s.container}>
        <div className={s.gameBoard}>
          {Array.from({length: 6}).map((_, rowIndex) => (
            <div key={rowIndex} className={s.row}>
              {attemptElementMap[rowIndex].word.split('').map((letter, columnIndex) => (
                <div key={columnIndex} className={s.cell} id={`cell-${rowIndex}-${columnIndex}`}>
                  {letter}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    )
}
