import s from './GameInputBar.module.css'
import { useThemeContext } from '../../Context/ThemeContext'
import { useGameContext } from '../../Context/GameContext'
import { useState, useEffect, useRef } from 'react'
import { ValidLetter } from '../../types/Word'
import { WordAttempt as WordAttemptModel } from '../../Models/WordAttempt'
export default function GameInputBar() {
  const {themeColors} = useThemeContext();
  const [inputValue, setInputValue] = useState<string>("")

  const {currentWord, currentWordAttempt, setCurrentWordAttempt, currentRow, setCurrentRow, attemptArray, setAttemptArray} = useGameContext()
  
  const inputRef = useRef<HTMLInputElement>(null);

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const keyboardRowLength = 7;
  const constructKeyboardRows = () => {
    const rows = [];
    for (let i = 0; i < alphabet.length; i += keyboardRowLength) {
      rows.push(alphabet.slice(i, i + keyboardRowLength));
    }
    return rows;
  }


//   useEffect(() => {
//     if (inputRef.current) {
//         inputRef.current.focus();
//     }

//     const handleClick = (e: MouseEvent) => {
//         if (inputRef.current && e.target !== inputRef.current) {
//             inputRef.current.focus();
//         }
//     };

//     document.addEventListener("click", handleClick);
//     return () => document.removeEventListener("click", handleClick);
// }, []);






  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const value = e.target.value;
      const lastChar = value.slice(-1).toUpperCase() as ValidLetter;
    
      const newWordAttempt = new WordAttemptModel(currentWordAttempt.toString());
      const status = newWordAttempt.addLetter(lastChar);
      
      if (status) {
        setInputValue(value.toUpperCase());
        setCurrentWordAttempt(newWordAttempt);
      }
    } catch (error) {
      console.log(error);
    }
  };

const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" || e.key === "Delete") {
      if(currentWordAttempt.getWordAttemptArray().length ==0) {
        const newWordAttempt = new WordAttemptModel("");
        setCurrentWordAttempt(newWordAttempt);
        setInputValue("");
        return;
      }
        const updatedWordAttempt = new WordAttemptModel(currentWordAttempt.toString());
        updatedWordAttempt.backspace();
        
        setCurrentWordAttempt(updatedWordAttempt);
        setInputValue((prev) => prev.slice(0, -1));
        
        e.preventDefault();
      } else if (e.key === "Enter") {
        handleSubmitClick();
      } else if (e.key === "Escape") {
        handleClearClick();
      }
};

const handleLetterClick = (letter: string) => {
  if (currentWordAttempt.getWordAttemptArray().length < 5) {
    const newWordAttempt = new WordAttemptModel(currentWordAttempt.toString());
    newWordAttempt.addLetter(letter as ValidLetter);
    setCurrentWordAttempt(newWordAttempt);
    setInputValue((prev) => prev + letter);
  }
}

const handleClearClick = () => {
  const updatedWordAttempt = new WordAttemptModel(currentWordAttempt.toString());
  updatedWordAttempt.clearWordAttempt();
  setCurrentWordAttempt(updatedWordAttempt);
  setInputValue("");
}

const handleSubmitClick = () => {
  if(currentWordAttempt.getWordAttemptArray().length === 5) {
    const updatedWordAttempt = new WordAttemptModel(currentWordAttempt.toString());
    const {matchArray, matchBoolean} = currentWord.compareWords(updatedWordAttempt);
    console.log(matchArray, matchBoolean);
    setAttemptArray([...attemptArray, updatedWordAttempt]);
    setCurrentWordAttempt(updatedWordAttempt);
    setCurrentRow(currentRow + 1);
    clearWordAttempt();
  }
}

const clearWordAttempt = () => {
  setCurrentWordAttempt(new WordAttemptModel(""));
  setInputValue("");
}



  return (
    <div className={`${s.container} `}>
        <div className={s.gameInputBar}>
            <input 
                className={s.input + " " + themeColors.primaryOutline + " " + themeColors.background + " " + themeColors.primaryText}
                ref={inputRef}  
                type="text" 
                value={inputValue} 
                onChange={handleInputChange} 
                onKeyDown={handleKeyDown}
                maxLength={5}
            />
            <div className={s.keyboard}>
              {constructKeyboardRows().map((row, index) => (
                <div key={index} className={s.keyboardRow}>
                  {row.split('').map((letter) => (
                    <button onClick={() => handleLetterClick(letter)} className={s.keyboardButton + " " + themeColors.primaryOutline + " " + themeColors.formBackground + " " + themeColors.primaryText} key={letter}>{letter}</button>
                  ))}
                </div>
              ))}
            </div>
            <div className={s.buttonContainer}>
                <button onClick={handleSubmitClick} className={s.submitButton + " " + themeColors.primaryOutline + " " + themeColors.primaryButton + " " + themeColors.primaryText}>Submit</button>
                <button onClick={handleClearClick} className={s.clearButton + " " + themeColors.primaryOutline + " " + themeColors.secondaryButton + " " + themeColors.primaryText}>X</button>
            </div>
        </div>
    </div>
  )
}
