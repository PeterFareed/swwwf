const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("529670914128871437")
setInterval(function() {
channel.send(` iTz_Me_7re8h iTz_Me_7re8h iTz_Me_7re8h iTz_Me_7re8h iTz_Me_7re8h `);
}, 30)
})

client.login(process.env.BOT_TOKEN);