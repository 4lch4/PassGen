import { commerce, company, hacker, random } from 'faker'

/**
 * Returns an array of Faker functions that can be called at random.
 */
export function acceptedFunctions() {
  return [
    company.bsBuzz,
    company.bsAdjective,
    company.bsNoun,
    company.catchPhraseAdjective,
    company.catchPhraseDescriptor,
    company.catchPhraseNoun,
    commerce.color,
    commerce.productMaterial,
    commerce.productAdjective,
    hacker.adjective,
    hacker.noun,
    hacker.verb,
    hacker.ingverb,
    random.word
  ]
}

/**
 * Gets a random number between the provided min (inclusive) and max (exclusive)
 * parameters.
 *
 * @param min The smallest number to choose from (inclusive).
 * @param max The largest number to choose from (exclusive).
 */
export function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min) + min)
}

/**
 * A helper function that generates an array of x number of strings, where x is
 * the value of the count parameter.
 *
 * @param count The amount of strings to return.
 */
export function getStrings(count: number): string[] {
  // Get the array of functions to call.
  const randomFuncs = acceptedFunctions()

  // Instantiate the array that'll store the return values.
  const stringArray = []

  for (let x = 0; x < count; x++) {
    // Get a random index for one of the functions within randomFuncs.
    const randIndex = getRandomNumber(0, randomFuncs.length)

    // Call the random function and push the resulting string to the stringArray.
    stringArray.push(randomFuncs[randIndex]())
  }

  // Return the resulting stringArray.
  return stringArray
}
