const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '.creator') {
    	message.reply('BenjiCelven, he has a Twitch channel, and a Youtube one! Use "/twitch" and "/yt" for them.');
  	}
});

client.on('message', message => {
    if (message.content === '.yt') {
    	message.reply('https://www.youtube.com/channel/UC7fHF0SUMGd9x32odZ9hv_A');
  	}
});

client.on('message', message => {
    if (message.content === '.twitch') {
    	message.reply('https://www.twitch.tv/benjiceleven');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
