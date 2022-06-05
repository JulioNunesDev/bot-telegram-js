const env = require('../.env')

const Telegraf = require('telegraf')

const bot = new Telegraf(env.token)

bot.start(ctx =>{
    const from =  ctx.update.message.from 
    console.log(from)
    if(from.id == 5371583744){
       return ctx.reply(`Ao seu dispor, mestre!`)
    }
    ctx.reply(`Sinto muito, mas eu só falo com o meu mestre!`)
})



bot.startPolling()