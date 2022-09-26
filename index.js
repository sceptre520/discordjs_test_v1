require("dotenv").config();
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);

  const list = client.guilds.cache.get("3QK6bhaP"); 
  list.members.cache.forEach(member => console.log(member.user.username));
});


// list.members.forEach(member => console.log(member.user.username)); 
client.login(process.env.TOKEN);