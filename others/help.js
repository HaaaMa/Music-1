const { Client, Collection, MessageEmbed } = require(`discord.js`);
const {
  PREFIX,
  approveemoji,
  denyemoji
} = require(`../config.json`);
const db = require('quick.db');

module.exports = {
  name: "help",
  aliases: ["h"],
  cooldown: 8,
  description: "all commands",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setThumbnail(message.author.avatarURL())
    .setImage('')

.setDescription(`

User Commands
`.invite` - `.support` - `.about`
`.ping` - `.prefix` - `.uptime`

Music Commands
`.play` - `.skip` - `.skipto`
`.stop` - `.volume` - `.nowplaying`
`.suffle` - `.search` - `.resume`
`.remove` - `.queue` - `.filter`
`.loop` - `.lyric` - `.radio`

Links
[support](https://discord.gg/jcs4XwcExv)    -    [invite](https://discord.com/oauth2/authorize?client_id=806840212608909344&permissions=70346817&scope=bot)

`)
  .setFooter(Request By ${message.author.tag}, message.author.avatarURL())
   .setColor("RED");
   helpEmbed.setTimestamp();
message.react("<a:emoji_11:814035839956418570>")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
