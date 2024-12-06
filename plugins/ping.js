const { bot } = require('../lib/')

bot(
  {
    pattern: 'ping ?(.*)',
    desc: 'To check ping',
    type: 'misc',
  },
  async (message, match) => {
    const start = new Date().getTime()
    await message.send('```Bass kar pagle!```')
    const end = new Date().getTime()
    return await message.send('*Rulayega kya, le fer Pong!*\n ```' + (end - start) + '``` *ms*')
  }
)
