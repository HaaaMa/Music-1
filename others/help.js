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
  //  .setThumbnail(`https://media.discordapp.net/attachments/790836700561670145/843616964106911794/image0.gif`)
  /// .setImage(`https://media.discordapp.net/attachments/790836700561670145/823721979629535233/image0.gif`)
    .setAuthor(`Remix`, `https://media.discordapp.net/attachments/790836700561670145/843599820807208970/image0.gif`)
    .setDescription(`

**User Commands**
\`${PREFIX}support\`   **-**   \`${PREFIX}ping\`   **-**   \`${PREFIX}avatar\`
\`${PREFIX}prefix\`   **-**   \`${PREFIX}uptime\`   **-**   \`${PREFIX}invite\`
\`${PREFIX}se (emoji)\`   **-**   \`${PREFIX}invites\`

**Music Commands**
\`${PREFIX}play\`   **-**   \`${PREFIX}skip\`   **-**   \`${PREFIX}volume\`   

\`${PREFIX}leave\`   **-**   \`${PREFIX}remove\`   **-**   \`${PREFIX}queue\`
\`${PREFIX}filter\`   **-**   \`${PREFIX}loop\`   **-**   \`${PREFIX}lyrics\`
\`${PREFIX}radio\`   **-**   \`${PREFIX}search\`   **-**   \`${PREFIX}shuffle\`

**Moderation Commands**
\`${PREFIX}lock\`  **-**  \`${PREFIX}unlock\`   **-**   \`${PREFIX}ban\`
\`${PREFIX}unban\`   **-**   \`${PREFIX}slowmode\`

**Links**
[support](https://discord.gg/VWuQfQfjc9)    -    [invite](https://discord.com/api/oauth2/authorize?client_id=814608707412295780&permissions=8&scope=bot)`)

 //  .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("RANDOM");
   message.react("✅")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
