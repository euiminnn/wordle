import { WORDS } from '../constants/wordlists'
import { ANSWERS } from '../constants/answerlists'
import { VALIDGUESSES } from '../constants/validGuesses'

export const isWordInWordList = (word: string) => {
  return (
    WORDS.includes(word.toLowerCase()) ||
    ANSWERS.includes(word.toLowerCase()) ||
    VALIDGUESSES.includes(word.toLowerCase())
  )
}

export const isWinningWord = (word: string) => {
  return solution === word
}

export const getWordOfDay = () => {
  // January 1, 2022 Game Epoch
  const epochMs = 1643113978753
  const now = Date.now()
  const msInDay = 86400000 / 2
  const index = Math.floor((now - epochMs) / msInDay) % ANSWERS.length

  return {
    solution: ANSWERS[index].toUpperCase(),
    solutionIndex: index,
  }
}

export const { solution, solutionIndex } = getWordOfDay()
