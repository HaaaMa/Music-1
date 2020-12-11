const { Client, Collection, MessageEmbed } = require(`discord.js`);
const {
  PREFIX,
  approveemoji,
  denyemoji
} = require(`../config.json`);

module.exports = {
  name: `invite`,
  description: "__**```(inv)Gives you an invite```**__",
  aliases: ["inv"],
  cooldown: 3,
  edesc: "Type this command to get an invite link for the Bot, thanks for every Invite",
  execute(message, args, client) {
    //react with approve emoji
    message.react("769665713124016128");
    //send the invite embed
    message.reply(new MessageEmbed().setColor("#c219d8").setTitle("__**🖤Please Invite me**__ ").setDescription("https://discord.com/oauth2/authorize?client_id=769642999227351070&permissions=0&scope=bot")
    .setFooter("And enjoy listening to music!", "https://discord.com/api/oauth2/authorize?client_id=783307683238510643&permissions=8&scope=bot"));

  }
}
