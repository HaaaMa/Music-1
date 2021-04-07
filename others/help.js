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
    .setThumbnail(`https://cdn.discordapp.com/avatars/758785943426564187/0d2e89ab452cb53f5cb7eaf14295470b.png?size=2048`)
    .setAuthor(`Show Bot`, `https://cdn.discordapp.com/avatars/758785943426564187/0d2e89ab452cb53f5cb7eaf14295470b.png?size=2048`)
    .setDescription(`

**User Commands**
\`${PREFIX}invite\` - \`${PREFIX}support\` - \`${PREFIX}about\`
\`${PREFIX}ping\` - \`${PREFIX}prefix\` - \`${PREFIX}uptime\`

**Music Commands**
\`${PREFIX}play\` - \`${PREFIX}skip\` - \`${PREFIX}skipto\`
\`${PREFIX}stop\` - \`${PREFIX}volume\` - \`${PREFIX}nowplaying\`
\`${PREFIX}shuffle\` - \`${PREFIX}search\` - \`${PREFIX}resume\`
\`${PREFIX}remove\` - \`${PREFIX}queue\` - \`${PREFIX}filter\`
\`${PREFIX}loop\` - \`${PREFIX}lyrics\` - \`${PREFIX}radio\`

**Links**
[support](https://discord.gg/Zj5SFafHKG)    -    [invite](https://discord.com/api/oauth2/authorize?client_id=758785943426564187&permissions=1076132928&scope=bot)
`)

   .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("#146DF6");
   message.react("✅")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
