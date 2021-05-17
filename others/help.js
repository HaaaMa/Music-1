const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { 
  PREFIX, 
} = require(`../config.json`);

  


module.exports = {
  name: "help",
  aliases: ["h"],
  cooldown: 8,
  description: "**Remix Help**",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setImage(`https://media.discordapp.net/attachments/790836700561670145/843616964106911794/image0.gif`)
    .setAuthor(`Remix`, `https://media.discordapp.net/attachments/790836700561670145/843599820807208970/image0.gif`)
    .setDescription(`

**User Commands**
\`${PREFIX}invite\`   **-**   \`${PREFIX}support\`   **-**   \`${PREFIX}ping\`
\`${PREFIX}prefix\`   **-**   \`${PREFIX}uptime\`   **-**   \`${PREFIX}avatar\`
\`${PREFIX}se (emoji)\`   **-**   \`${PREFIX}invites\`

**Music Commands**
\`${PREFIX}play\`   **-**   \`${PREFIX}skip\`   **-**   \`${PREFIX}stop\`   **-**  \`${PREFIX}radio\`
\`${PREFIX}volume\`   **-**   \`${PREFIX}shuffle\`   **-**   \`${PREFIX}search\` 
\`${PREFIX}resume\`   **-**   \`${PREFIX}remove\`   **-**   \`${PREFIX}queue\`
\`${PREFIX}filter\`   **-**   \`${PREFIX}loop\`   **-**  \`${PREFIX}lyrics\`

**Moderation Commands**
\`${PREFIX}lock\`  **•**  \`${PREFIX}unlock\`   **-**   \`${PREFIX}ban\`
\`${PREFIX}unban\`   **•**   \`${PREFIX}slowmode\`

**Links**
[support](https://discord.gg/VWuQfQfjc9)    -    [invite](https://discord.com/api/oauth2/authorize?client_id=814608707412295780&permissions=8&scope=bot)    -    [vote](https://top.gg/bot/814608707412295780)`)

   .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("RANDOM");
   .setThumbnail(`https://media.discordapp.net/attachments/790836700561670145/838764604443983963/image0.gif`)
   message.react("✅")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
