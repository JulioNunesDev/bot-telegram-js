const env = require('../.env')

const Telegraf = require('telegraf')

const bot = new Telegraf(env.token)


bot.start(ctx =>{
    const from =  ctx.update.message.from 
    ctx.reply(`Seja bem vindo, ${from}`)
})



bot.startPolling()