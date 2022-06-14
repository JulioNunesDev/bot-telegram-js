const env = require("../../.env")
const Telegraf = require('telegraf')
const Extra = require('telegraf/extra')
const Markup = require('telegraf/markup')
const { keyboard } = require("telegraf/markup")
let bot = new Telegraf(env.token)

let lista = []

const botoes = () => Extra.markup(
    Markup.inlineKeyboard(
        lista.map(item => Markup.callbackButton(item, `delete ${item}`)),
        {columns: 3}
    )
)

bot.start(async ctx=>{
    const name = ctx.update.message.from.first_name
    await ctx.reply(`Seja bem vindo, ${name}`)
    await ctx.reply('Escreva os itens que você deseja adicionar...')
})

bot.on('text', ctx =>{
    lista.push(ctx.update.message.text)
    ctx.reply(`${ctx.update.message.text} adicionado!`, botoes())
})

bot.action(/delete (.+)/, ctx =>{
    lista = lista.filter(item => item !== ctx.match[1])
    ctx.reply(`${ctx.match[1]} deletado!`, botoes())
})

bot.startPolling();