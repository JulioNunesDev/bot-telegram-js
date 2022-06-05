const env = require('../.env')
let Telegraf = require("telegraf")
let axios = require("axios")
let Markup = require('telegraf/markup')

let bot = new Telegraf(env.token)

bot.start(ctx=>{
   const from = ctx.update.message.from
    ctx.reply(`Bem vindo, mestre! ${from.first_name}`)
})
const teclado = Markup.keyboard([
    ['Tarefas', 'Js', 'SQL'],
    ['Solidity', 'Ethereum', 'CPM']
]).resize().extra()

bot.hears([/ola/i], async ctx =>{
    await ctx.reply(`testeando, ${ctx.match}`)
})

bot.command('ajuda', async ctx=>{

    await ctx.reply(`\n/ajuda2: outras configurações
    \n/SQL: Veja tabelas
    \n/JS: Veja códigos de JavaScript
    \n/Solidity: Veja sobre os Smart Contract
    \n/Ethereum: Veja mais sobre a Rede Ethereum
    \n/Criptos: Veja mais sobre as Criptos Moedas
    `)
})

bot.on('voice',async ctx=>{
    const id = ctx.update.message.voice.file_id
    const res = await axios.get(`${env.apiUrl}/getFile?file_id=${id}`)
    ctx.replyWithVoice({url: `${env.apiFileUrl}/${res.data.result.file_path}`})
})



bot.hears([/Tarefas/i],async ctx=>{
   await setTimeout(()=>{
},500)

    const res = await axios.get(`https://jsonplaceholder.typicode.com/todos/1`)
    const data = res.data
    ctx.reply( `
    Tarefas salvas:\n
    \nTitle: ${data.title}
    \nCompleted: ${data.completed}
    `)

})


bot.hears([/js/i], ctx =>{
  ctx.reply('Ainda nao está disponivel!', teclado)
})
bot.hears([/solidity/i], ctx =>{
  
  ctx.reply('Ainda nao está disponivel!', teclado)
})
   


bot.startPolling()
