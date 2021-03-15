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
    message.react("769665713124016128");
    //send the invite embed
    message.reply(new MessageEmbed().setColor("#FF0000").setTitle("❤ Please Invite me: ").setDescription("https://discord.com/oauth2/authorize?client_id=806840212608909344&permissions=70346817&scope=bot")
    .setFooter("And enjoy listening to music!", "https://cdn.discordapp.com/avatars/806840212608909344/bf2d9853ffc2b48775c0cf9f8932a189.png?size=1024"));
  }
}


   //send the Message
    message.channel.send(embed)
   message.react("<:emoji_4:815583574983966720>")
  } 
