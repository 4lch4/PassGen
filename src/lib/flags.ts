import { flags as flagUtil } from '@oclif/command'

export function getFlags() {
  return {
    // add --version flag to show CLI version
    version: flagUtil.version({ char: 'v' }),
    help: flagUtil.help({ char: 'h' }),

    words: flagUtil.integer({
      char: 'w',
      description: 'The amount of words to include in the passphrase.',
      default: 5
    }),

    phrases: flagUtil.integer({
      char: 'p',
      description: 'The amount of phrases to generate.',
      default: 3
    })
  }
}
