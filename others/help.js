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
\`${PREFIX}invite\` - \`${PREFIX}support\`
\`${PREFIX}ping\` - \`${PREFIX}prefix\` - \`${PREFIX}uptime\`
\`${PREFIX}avatar\` - \`${PREFIX}se\` - \`${PREFIX}invites\`

**Music Commands**
\`${PREFIX}play\` - \`${PREFIX}skip\` 
\`${PREFIX}stop\` - \`${PREFIX}volume\`
\`${PREFIX}shuffle\` - \`${PREFIX}search\` - \`${PREFIX}resume\`
\`${PREFIX}remove\` - \`${PREFIX}queue\` - \`${PREFIX}filter\`
\`${PREFIX}loop\` - \`${PREFIX}lyrics\` - \`${PREFIX}radio\`

**Fun Commands**
\`${PREFIX}lock\` - \`${PREFIX}unlock\` - \`${PREFIX}ban\`
\`${PREFIX}unban\` - \`${PREFIX}slowmode\`

**Links**
[support](https://discord.gg/VWuQfQfjc9)    -    [invite](https://discord.com/api/oauth2/authorize?client_id=814608707412295780&permissions=8&scope=bot)    -    [vote](https://top.gg/bot/814608707412295780)`)

   .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("#146DF6");
   message.react("✅")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
