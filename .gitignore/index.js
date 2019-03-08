const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("%")

bot.on('ready', function() {
	bot.user.setGame("%help for help");
	console.log("Connected");
});

bot.login("NTUzNjkzMzk5NjY0ODIwMjI1.D2RyyA.oqmJG4NfbP8PD1kcMhb7FbDYiTw");


bot.on('message', message => {
	if (message.content === prefix + "help"){
		message.channel.sendMessage("Listes des commandes: \n -*help");
	}

	if (message.content === "Salut") {
		message.reply("Salut, ca va?");
		console.log("Commande Salut effectué");
	}
});
