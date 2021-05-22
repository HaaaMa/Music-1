const Discord = require('discord.js');

exports.run = (client, message) => {

let sunucu = new Discord.MessageEmbed()

.setThumbnail(message.guild.iconURL)

.setColor("RANDOM")
.setThumbnail(message.author.avatarURL({dynamic: "true"}))
.setTitle("Server Info")

.addField("Server name", `${message.guild.name}`)
.addField("Server id", `${message.guild.id}`)
.addField("Server owner", `${message.guild.owner}`)
.addField("Members", `${message.guild.memberCount}`)
.addField("Server roles", `${message.guild.roles.cache.size}`)
.addField("Server channels", `${message.guild.channels.cache.size}`)
.addField("Server region", `${message.guild.region}`)
.addField("Created in", `${message.guild.createdAt.toLocaleString()}`)
.addField("Boost", `${message.guild.premiumSubscriptionCount}`)

return message.channel.send(sunucu) 

}; 

module.exports.conf = {
aliases: ["server","sr","s-r"],
permLevel: 0, 
enabled: true,
guildOnly: true
};

module.exports.help = {
name: 'server',
  description: 'rexuss',
usage: 'server'
};
