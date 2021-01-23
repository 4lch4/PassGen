export { getFlags } from './flags'
export { acceptedFunctions, getRandomNumber, getStrings } from './random'

export function cleanWord(word: string): string {
  return (word[0].toUpperCase() + word.substring(1)).replace(/\-|_/, '')
}
