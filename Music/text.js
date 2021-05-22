const { canModifyQueue } = require("../util/MilratoUtil");
const { Client, Collection, MessageEmbed } = require("discord.js");
const { attentionembed } = require("../util/attentionembed");
const { PREFIX } = require(`../config.json`);

module.exports = {
  name: "text",
  aliases: ["text", "pp", "ppsize"],
  description: "Show Member PP Size!",
  usage: "Dicksize <Mention Member>",
  run: async (client, message, args) => {
    //Start
    message.delete();
    let sizes = [
      "kurd",
      "roshek",
      "HaaMa",
      "juana",
      "hastaday",
      "bot dalem law bandana",
      "dayday",
      "8=======D",
      "8========D",
      "8=========D",
      "8D",
      "D",
      "hama",
      "esta to lagal ke D",
      "poli6",
      "wa arOm chetr nambenawa",
      "Rozhek darom",
      "Dndbs",
      "hdhwhd"
    ];

    let Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.member;

    let Result = sizes[Math.floor(Math.random() * sizes.length)];

    let embed = new MessageEmbed()
      .setColor(Color)
      .setTitle(``)
      .setDescription(`**\n${Result}**`)
   // .setFooter(`Requested by ${message.author.username}`)
  //    .setTimestamp();
    message.channel.send(embed);

    //End

}
};
