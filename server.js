const Eris = require('eris');
 
const bot = new Eris(process.env.Token);   // Replace DISCORD_BOT_TOKEN in .env with your bot accounts token
 
bot.on('ready', () => {                                // When the bot is ready
    console.log('Ready!');                             // Log "Ready!"
});
 
bot.on('messageCreate', (msg) => {                     // When a message is created
    if(msg.content.includes('4')) {                 // If the message content includes "1337"
        bot.createMessage(process.env.Channel, 'J4J DM me');  // Send a message in the same channel with "damn it"
    }
});
 
bot.connect();                                         // Get the bot to connect to Discord
