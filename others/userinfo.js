const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { 
 PREFIX, 
} = require(`../config.json`);

  


module.exports = {
  name: "user",
  aliases: ["userinfo"],
  cooldown: 8,
  description: "**oPoRo Help**",
  execute(message) {
    let commands = message.client.commands.array();

    .setTitle(member.user.username + " Information!")
      .setColor(`RANDOM`)
      .setThumbnail(member.user.displayAvatarURL())
      .addField("**Full Name**", member.user.tag, true)
      .addField("**ID**", `${member.id}`, true)
      .addField("**Status**", statuses[member.presence.status], true)
      .addField(
        `**Roles Count**`,
        message.guild.members.cache.get(member.user.id).roles.cache.size ||
          "No Roles!",
        true
      )
      .addField(`**Avatar Url**`, `[Link](${member.user.displayAvatarURL()})`, true)
      .addField("**Joined Server**", member.joinedAt.toDateString())
      .addField("**Joined Discord**", member.user.createdAt.toDateString())
      .setFooter(`Requested by ${message.author.username}`)
  //    .setTimestamp();

    message.channel.send(embed);

    //End
  }
