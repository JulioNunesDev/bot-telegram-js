const env = require('../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)
const moment = require('moment')


bot.hears('pizza', (ctx )=>ctx.reply('quero!'))
bot.hears([/ola/i, /tudo bem/i], (ctx )=>ctx.reply('quero!'))
bot.hears('tudo bem?', (ctx )=>ctx.reply('quero!'))

bot.startPolling()
