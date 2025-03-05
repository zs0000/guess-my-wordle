import { createContext, useState, useContext } from "react";

import { WordAttempt as WordAttemptModel } from "../Models/WordAttempt";
import { Word as WordModel } from "../Models/Word";
import words from "../data/five_letter_words.json"


type GameContextType = {
    currentWord: WordModel;
    setCurrentWord: React.Dispatch<React.SetStateAction<WordModel>>;
    currentWordAttempt: WordAttemptModel;
    setCurrentWordAttempt: React.Dispatch<React.SetStateAction<WordAttemptModel>>;
    currentRow: number;
    setCurrentRow: React.Dispatch<React.SetStateAction<number>>;
    currentColumn: number;
    setCurrentColumn: React.Dispatch<React.SetStateAction<number>>;
    attemptArray: WordAttemptModel[];
    setAttemptArray: React.Dispatch<React.SetStateAction<WordAttemptModel[]>>;
    isModalOpen: boolean;
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    gameStatus: string;
    setGameStatus: React.Dispatch<React.SetStateAction<string>>;
    resetGame: () => void;
    isResetting: boolean;
    setIsResetting: React.Dispatch<React.SetStateAction<boolean>>;
}
const getRandomWord = (): string =>
    {
        const word = words[Math.floor(Math.random() * words.length)];
        console.log("word: ", word)
        return word
    }
export const GameContext = createContext<GameContextType>({
    currentWord: new WordModel(),
    setCurrentWord: () => {},
    currentWordAttempt: new WordAttemptModel(""),
    setCurrentWordAttempt: () => {},
    currentRow: 0,
    setCurrentRow: () => {},
    currentColumn: 0,
    setCurrentColumn: () => {},
    attemptArray: [],
    setAttemptArray: () => {},
    isModalOpen: false,
    setIsModalOpen: () => {},
    gameStatus: "",
    setGameStatus: () => {},
    resetGame: () => {},
    isResetting: false,
    setIsResetting: () => {},
})

export const useGameContext = () => {
    const context = useContext(GameContext)
    if(!context) {
        throw new Error("useGameContext must be used within a GameContextProvider")
    }
    return context
}

export const GameContextProvider = ({children}: {children: React.ReactNode}) => {
    const [currentWord, setCurrentWord] = useState<WordModel>(new WordModel())
    const [currentRow, setCurrentRow] = useState<number>(0)
    const [currentColumn, setCurrentColumn] = useState<number>(0)
    const [currentWordAttempt, setCurrentWordAttempt] = useState<WordAttemptModel>(new WordAttemptModel(""))
    const [attemptArray, setAttemptArray] = useState<WordAttemptModel[]>([])
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    const [gameStatus, setGameStatus] = useState<string>("")
    const [isResetting, setIsResetting] = useState<boolean>(false)
    // Custom setter to ensure new reference
    const safeSetCurrentWordAttempt = (newWordAttempt: WordAttemptModel | ((prev: WordAttemptModel) => WordAttemptModel)) => {
        if (typeof newWordAttempt === 'function') {
            setCurrentWordAttempt((prev) => {
                const result = newWordAttempt(prev);
                return new WordAttemptModel(result.toString());
            });
        } else {
            setCurrentWordAttempt(new WordAttemptModel(newWordAttempt.toString()));
        }
    }

    const resetGame = () => {
        setCurrentWord(new WordModel())
        setCurrentRow(0)
        setCurrentColumn(0)
        setCurrentWordAttempt(new WordAttemptModel(""))
        setAttemptArray([] as WordAttemptModel[])
        setIsModalOpen(false)
        setGameStatus("")
        setIsResetting(true)
    }

    const values: GameContextType = {
        currentWord,
        setCurrentWord,
        currentRow,
        setCurrentRow,
        currentColumn,
        setCurrentColumn,
        currentWordAttempt,
        setCurrentWordAttempt: safeSetCurrentWordAttempt,
        attemptArray,
        setAttemptArray,
        isModalOpen,
        setIsModalOpen,
        gameStatus,
        setGameStatus,
        resetGame,
        isResetting,
        setIsResetting,
    }

    return <GameContext.Provider value={values}>{children}</GameContext.Provider>
}