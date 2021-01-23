import { Command } from '@oclif/command'
import { cleanWord, getFlags, getStrings } from './lib'

class Passgen extends Command {
  static description =
    'Generates a complex yet easy to remember password using phrases instead of random text.'

  static flags = getFlags()

  async run() {
    const { flags } = this.parse(Passgen)
    const phrasesOut = []

    for (let x = 0; x < flags.phrases; x++) {
      const phraseArray = getStrings(flags.words)
      const finalPhrase = []

      for (let phrase of phraseArray) {
        if (phrase.includes(' ')) {
          phrase.split(' ').forEach(word => finalPhrase.push(cleanWord(word)))
        } else finalPhrase.push(cleanWord(phrase))
      }

      phrasesOut.push(finalPhrase.join(''))
    }

    console.log(phrasesOut.join('\n'))
  }
}

export = Passgen
