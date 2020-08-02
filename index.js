const Discord = require('discord.js')
const bot = new Discord.Client();


const PREFIX = '!';

bot.on('ready', () =>{
    console.log('Bot is now online!');
})

bot.on('message', message=>{
    if(!message.content.startsWith(PREFIX) || message.author.bot) return;
    
    let args = message.content.substring(PREFIX.length).split(" ");

    let someGuide = args[0];
    console.log(someGuide);
    let link = "https://www.mobafire.com/league-of-legends/{0}-guide";
    link = link.replace("{0}", someGuide);
    message.channel.send(link);

})


bot.login(process.env.token);