const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { 
  PREFIX, 
} = require(`../config.json`);

  


module.exports = {
  name: "help",
  aliases: ["h"],
  cooldown: 8,
  description: "**Reyna Help**",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setThumbnail(`https://cdn.discordapp.com/avatars/806840212608909344/bf2d9853ffc2b48775c0cf9f8932a189.png?size=1024`)
    .setTitle(`**Reyna Help**`)
    .setDescription(`

**User Commands**
\`.invite\` - \`.support\` - \`.about\`
\`.ping\` - \`.prefix\` - \`.uptime\`

**Music Commands**
\`.play\` - \`.skip\` - \`.skipto\`
\`.stop\` - \`.volume\` - \`.nowplaying\`
\`.shuffle\` - \`.search\` - \`.resume\`
\`.remove\` - \`.queue\` - \`.filter\`
\`.loop\` - \`.lyrics\` - \`.radio\`

Links
[support](https://discord.gg/jcs4XwcExv)    -    [invite](https://discord.com/oauth2/authorize?client_id=806840212608909344&permissions=70346817&scope=bot)
`)

   .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("#FF0000");
   message.react("<:emoji_4:815583574983966720>")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
