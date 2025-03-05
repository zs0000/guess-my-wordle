export type LetterStatus = "correct" | "incorrect" | "present";
export type ValidLetter = "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h" | "i" | "j" | "k" | "l" | "m" | "n" | "o" | "p" | "q" | "r" | "s" | "t" | "u" | "v" | "w" | "x" | "y" | "z";
export interface Word {
    word: string;
    wordArray: ValidLetter[];
}

export interface WordAttempt {
    wordAttempt: Word;
    wordAttemptArray: ValidLetter[];
}



