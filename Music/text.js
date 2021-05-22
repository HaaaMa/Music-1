const ytsr = require("youtube-sr")
const { Client, Collection, MessageEmbed } = require("discord.js");
const { play } = require("../include/play")
const { attentionembed } = require("../util/attentionembed");
const { PREFIX, } = require(`../config.json`);
////////////////////////////
//////COMMAND BEGIN/////////
////////////////////////////
module.exports = {
  name: "text",
  description: "(fi)Set Audio - Effects",
  aliases: ["tex"],
  cooldown: 5,
  edesc: `Type this Command to change the current audio effect - style \nUsage: ${PREFIX}filter <Filtertype>`,

async execute(client, args, client) {

/// starts

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
