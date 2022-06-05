const env = require('../.env')
const Telegraf = require('telegraf')
const Markup = require('telegraf/markup')
const bot = new Telegraf(env.token)


const tecladoMarkup = Markup.keyboard([
    ['😂','😎','🙄']
]).resize().extra()

bot.start( async ctx =>{
    await ctx.reply(`Como está seu Humor hoje?`,
    Markup.keyboard(['Feliz', 'Triste']).resize().extra())
})

bot.hears([/Feliz/i, /Triste/i], async ctx =>{
    await ctx.reply(`Nossa ! eu tambem adoro! ${ctx.match}`)
    await ctx.reply(`Como vc está hoje?`, tecladoMarkup)
}),

bot.command('ajuda', ctx =>ctx.reply('/ajuda: Vou mostrar as Opcoes'
    + '\n/video: voce assiste todos os videos'
    + '\n/filmes: voce assiste todos os filme'
    )
)

bot.hears('/video', ctx =>{
    ctx.reply('testando')
})
bot.startPolling()