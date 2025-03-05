import { ValidLetter,  LetterStatus } from "../types/Word"
import { WordAttempt as WordAttemptModel } from "./WordAttempt"
import { words } from "../data/words"
export class Word {

    public word: string
    public wordArray: ValidLetter[]

    constructor() {
        let randomWord = this.getRandomWord().toUpperCase()
        this.word = randomWord
        this.wordArray = randomWord.split("").map(letter => letter as ValidLetter)
    }
    
    public getWord() {
        return this.word
    }

    public getRandomWord() {
        return words[Math.floor(Math.random() * words.length)]
    }

    public getWordArray() {
        return this.wordArray
    }

    public getLetter(index: number) {
        return this.wordArray[index]
    }

    public setWord(word: string) {
        this.word = word
        this.wordArray = word.split("").map(letter => letter as ValidLetter)
    }

    public printWord() {
        console.log(this.word)
    }

    public printWordArray() {
        console.log(this.wordArray)
    }

    public toString() {
        return this.word
    }

    public toArray() {
        return this.wordArray
    }
    public containsLetterAtOrPastIndex(letter: ValidLetter, index: number) {
        const arr = this.wordArray.slice(index)
        let res = "incorrect"
        if(arr[0] === letter) {
            res = "correct"
        } else if (this.wordArray.includes(letter)) {
            res = "present"
        } 
        return res
    }



    public compareWords(wordAttempt: WordAttemptModel) {
        let wordAttemptArray = wordAttempt.getWordAttemptArray(); // Player's guess
        let wordArray = this.getWordArray(); // Target word
        let result: LetterStatus[] = Array(wordArray.length).fill("incorrect");
        let resultBoolean: boolean = false;
    
        // Step 1: Count occurrences of each letter in the target word
        let letterCounts: Record<string, number> = {};
        for (let char of wordArray) {
            letterCounts[char] = (letterCounts[char] || 0) + 1;
        }
    
        // Step 2: First pass - Mark "correct" letters
        for (let i = 0; i < wordAttemptArray.length; i++) {
            if (wordAttemptArray[i] === wordArray[i]) {
                result[i] = "correct";
                letterCounts[wordAttemptArray[i]]--; // Reduce available count
            }
        }
    
        // Step 3: Second pass - Mark "present" letters
        for (let i = 0; i < wordAttemptArray.length; i++) {
            if (result[i] === "correct") continue; // Skip already matched letters
    
            if (letterCounts[wordAttemptArray[i]] && letterCounts[wordAttemptArray[i]] > 0) {
                result[i] = "present";
                letterCounts[wordAttemptArray[i]]--; // Reduce available count
            }
        }
    
        // Step 4: Determine if the guess is fully correct
        if (result.every(letter => letter === "correct")) {
            resultBoolean = true;
        }
    
        return { matchArray: result, matchBoolean: resultBoolean };
    }

   
    
}
