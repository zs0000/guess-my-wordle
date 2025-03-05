import { ValidLetter } from "../types/Word"
export class WordAttempt {
    public wordAttempt: string
    public wordAttemptArray: ValidLetter[]
    public currentIndex: number;
    constructor(theWordAttempt: string) {
        this.wordAttempt = theWordAttempt;
        if (this.wordAttempt.length > 0) {
            this.wordAttemptArray = this.wordAttempt.split("").map(letter => letter as ValidLetter)
            this.currentIndex = this.wordAttemptArray.length
        } else {
            this.wordAttemptArray = []
            this.currentIndex = 0
        }
    }


    public backspace() {
        if (this.currentIndex > 0) {
            this.wordAttemptArray.pop()
            this.currentIndex--
            this.wordAttempt = this.wordAttemptArray.join("")
        }
    }

    public addLetter(letter: ValidLetter): boolean {
        if (this.currentIndex < 5) {
            this.wordAttemptArray.push(letter)
            this.wordAttempt = this.wordAttemptArray.join("")
            this.currentIndex++
            return true
        }
        return false
    }

    public clearWordAttempt() {
        this.wordAttemptArray = []
        this.currentIndex = 0
        this.wordAttempt = ""
    }

    public getLetter(index: number) {
        return this.wordAttemptArray[index]
    }

    public getWordAttempt() {
        return this.wordAttempt
    }

    public getWordAttemptArray() {
        return this.wordAttemptArray
    }

    public getCurrentIndex() {
        return this.currentIndex
    }

    public setCurrentIndex(index: number) {
        this.currentIndex = index
    }

    public setWordAttempt(wordAttempt: string) {
        this.wordAttempt = wordAttempt
        this.wordAttemptArray = wordAttempt.split("").map(letter => letter as ValidLetter)
    }

    public toString() {
        return this.wordAttemptArray.join("")
    }

    public printWordAttempt() {
        console.log(this.wordAttempt)
    }

    public printWordAttemptArray() {
        console.log(this.wordAttemptArray)
    }
}
