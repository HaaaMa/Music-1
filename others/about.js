const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "about",
  aliases: ["a"],
  description: "about bot",
  execute(message) {
    let others = message.client.others.array();
    let helpEmbed = new MessageEmbed()
      .setAuthor(
        "Abuot",
        "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/Music.gif"
      )
      .setDescription(
        **[  SUPPORT  ](https://discord.gg/4xsKGanmNS)**   -   **[   INVITE ](https://discord.com/api/oauth2/authorize?client_id=783307683238510643&permissions=67107648&scope=bot)**
      )
      /// .setAuthor([  __SUPPORT__  ](https://discord.gg/4xsKGanmNS)**   -   **[   __INVITE__  ](https://discord.com/api/oauth2/authorize?client_id=783307683238510643&permissions=67107648&scope=bot)**)
      .setFooter(
        message.author.username,
        message.author.displayAvatarURL({ dynamic: "true" })
      )
      .setColor("RANDOM")
      .setImage(
        "https://cdn.discordapp.com/attachments/747589009462526056/786660708414652496/image0.gif"
      )
      .setThumbnail(message.author.avatarURL({ dynamic: "true" }))
      .addField("Bot Name", **DISCO#8893**)
      .addField("┃FOUNDER ", > __<@608305212029009947>__)
      .addField("┃CO FUNDER", > __<@719955045264654407> __)
      .addField("┃ HELPER ", > __<@663538031147352069>__);

    helpEmbed.setTimestamp();
    return message.channel.send(helpEmbed).catch(console.error);
  }
};
