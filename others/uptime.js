const { Client, Collection, MessageEmbed } = require(`discord.js`);
const {
  PREFIX,
  approveemoji,
  denyemoji
} = require(`../config.json`);

module.exports = {
  name: `uptime`,
  description: "(ue)Gives you the uptime of the Bot",
  aliases: ["ue"],
  cooldown: 5,
  edesc: "With that you can see how long the Bot has been running nonstop",
  execute(message, args, client) {
    let days = Math.floor(client.uptime / 86400000);
    let hours = Math.floor(client.uptime / 3600000) % 24;
    let minutes = Math.floor(client.uptime / 60000) % 60;
    let seconds = Math.floor(client.uptime / 1000) % 60;
    //react with approve emoji
    message.react("<:emoji_4:815583574983966720>");
    return message.channel.send(new MessageEmbed().setColor("#146DF6").setTitle(`<a:__:825010064066347009>\`Show Bot Uptime \`\n\n\`${days}d\` \`${hours}h\` \`${minutes}m\` \`${seconds}s\n\``));


  }
} 
