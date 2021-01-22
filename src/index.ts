import { Command, flags } from '@oclif/command'

class Passgen extends Command {
  static description = 'Generates a complex yet easy to remember password using phrases instead of random text.'

  static flags = {
    // add --version flag to show CLI version
    version: flags.version({ char: 'v' }),
    help: flags.help({ char: 'h' }),
    // flag with a value (-n, --name=VALUE)
    count: flags.string({
      char: 'c',
      description: 'The amount of words to include in the passphrase.'
    })
  }

  static args = [{ name: 'file' }]

  async run() {
    const { args, flags } = this.parse(Passgen)
    console.log(`count = ${flags.count}`)
  }
}

export = Passgen
