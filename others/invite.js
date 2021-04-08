const { Client, Collection, MessageEmbed } = require(`discord.js`);
const {
  PREFIX,
  approveemoji,
  denyemoji
} = require(`../config.json`);

module.exports = {
  name: `invite`,
  description: `Gives you an invite`,
  aliases: ["add"],
  cooldown: 3,
  edesc: "Type this command to get an invite link for the Bot, thanks for every Invite",
  execute(message, args, client) {
    //react with approve emoji
    message.react("<a:setting:813404135181385759>");
    //send the invite embed
    message.member.send(new MessageEmbed().setColor("#146DF6").setTitle("").setDescription("<a:arbelearbele:780373854039572501> **[Click Here](https://discord.com/oauth2/authorize?client_id=758785943426564187&permissions=1076132928&scope=bot) to invite the bot.**")
    .setFooter(""));
  }
}
