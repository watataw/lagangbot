const Discord = require('discord.js');
const bot = new Discord.Client();
bot.login(process.env.TOKEN);
var prefix = ("%")


bot.on('ready', function () {
	bot.user.setGame("%help for help");
	console.log("Connected");
})

bot.on("guildMemberAdd", member => {
	member.guild.channels.find("name", "hub").send('Bienvenue! Je me presente, LaGangBot, faites %help pour en savoir plus :D')
})

///help

bot.on('message', message => {

	if (message.content === "%help") {
		var embed = new Discord.RichEmbed()
		.setColor("0xB40404")
		.setDescription("Vous avez demande de l'aide?")
		.addField("%sondage", "Creer un sondage \n ecriver le nom de votre playlist, apres cette commande")
		.addField("%playlists", "Afficher les playlists spotify")
		.addField("%infosdiscord", "Voir les informations du discord")
		.addField("%clear", "Supprimer TOUS les messages d'un salon textuel \n faites attention ;) ")
	message.channel.sendEmbed(embed)
	console.log("%help effectue")
	}

	///Micelaneous

	if (message.content === "salut") {
		message.reply("Comment ca va?");
		console.log("Salut effectue");
	}

	if (message.content === "Salut") {
		message.reply("Comment ca va?");
		console.log("Salut effectue");
	}
	
	if (message.content === "ca va bien, et toi?"){
		message.reply("oui");
		console.log("ca va bien, et toi? effectue");
	}
	
	if (message.content === "Ca va bien et toi?"){
		message.reply("oui");
		console.log("ca va bien, et toi? effectue");
	}

	///Clear

	if (message.content === prefix + "clear"){
		if (message.member.hasPermission("MANAGE_MESSAGES")) {
			message.channel.fetchMessages()
				.then(function (list) {
					message.channel.bulkDelete(list);
					message.reply("j'ai supprime tous les messages!")
					console.log("%clear effectue")
				}, function (err) { message.channel.send("Erreur") })}}





	///playlists

	if (message.content === "%playlists") {
		message.reply("Playlist: \n Gaming: https://open.spotify.com/user/x2fb77taa0cqg14yydcpyh8mr/playlist/1Vk2bkDWaC7bS9H7cD55UU?si=J-19pqxmQHuPa3ls0hF4EA \n Entrainante: https://open.spotify.com/user/x2fb77taa0cqg14yydcpyh8mr/playlist/40oyfaq2HfVTEdMyTcU2H8?si=3BlkS9wHSgCOJjzWw1JZLQ ");
		console.log("%Playlists effectue");
	}

	
	///MODÉRATION

	if (message.content === "tyl") {
		message.reply("Hey!, on dit pas de gros mots!");
		console.log("tyl was moderated");
	}
	
	if (message.content === "tg") {
		message.reply("Hey!, on dit pas de gros mots!");
		console.log("tyl was moderated");
	}

	///InfosDiscord
	
	if(message.content === prefix + "infosdiscord") {
		var embed = new Discord.RichEmbed()
		.setDescription("Information du Discord")
		.addField("Nom du Discord", message.guild.name)
		.addField("Cree le", message.guild.createdAt)
		.addField("Tu as rejoin le", message.member.joinedAt)
		.addField("Utilisateurs sur le Discord", message.guild.memberCount)
	message.channel.sendEmbed(embed)
	console.log("%infosdiscord effectue")
	
	}

	if (message.content === prefix + "infodiscord") {
		var embed = new Discord.RichEmbed()
			.setDescription("Information du Discord")
			.addField("Nom du Discord", message.guild.name)
			.addField("Cree le", message.guild.createdAt)
			.addField("Tu as rejoin le", message.member.joinedAt)
			.addField("Utilisateurs sur le Discord", message.guild.memberCount)
		message.channel.sendEmbed(embed)
		console.log("%infodiscord effectue")

	}
	///SONDAGE

	if (message.content.startsWith(prefix + "sondage")) {
		let args = message.content.split(" ").slice(1);
		let thingToEcho = args.join(" ")
		var embed = new Discord.RichEmbed()
			.addField(thingToEcho, "Repondre avec :white_check_mark: ou :x:")
			.setColor("0xB40404")
			.setTimestamp()
		message.guild.channels.find("name", "sondages").sendEmbed(embed)
		console.log("sondage effectue")
}})
		
