const { promptMessage } = require("../../functions");
const { Client, Collection, MessageEmbed } = require("discord.js");
const { attentionembed } = require("../util/attentionembed");
const { PREFIX } = require(`../config.json`);

////////////////////////////
//////COMMAND BEGIN/////////
////////////////////////////

const chooseArr = ["🗻", "📰", "✂"];

module.exports = {
  name: "rockpapersezar",
  aliases: ["rps"],
  description: "(mix)Shuffles the current Queue!",
  cooldown: 5,
  edesc: `Type the Command, if a Queue exists to change to Order of the Queue, randomly.\nUsage: ${PREFIX}shuffle`,

execute(message,args,client) {

try
      {     const embed = new MessageEmbed()
            .setColor("GREEN")
            .setAuthor(message.member.displayName, message.author.displayAvatarURL())
            .setFooter(message.guild.me.displayName, bot.user.displayAvatarURL())
            .setDescription("**Play A Game of RPS Against The Bot!\nSelect Reactions To Play!**")
            .setTimestamp();

        const m = await message.channel.send(embed);
        const reacted = await promptMessage(m, message.author, 30, chooseArr);

        const botChoice = chooseArr[Math.floor(Math.random() * chooseArr.length)];

        const result = await getResult(reacted, botChoice);
        await m.reactions.removeAll();

        embed
            .setDescription("")
            .addField(`**${result}**`, `${reacted} vs ${botChoice}`);

        m.edit(embed);

      } catch {
          return message.channel.send('**Missing Permissions - [MANAGE_MESSAGES]!**')
      }
        function getResult(me, botChosen) {
            if ((me === "🗻" && botChosen === "✂") ||
                (me === "📰" && botChosen === "🗻") ||
                (me === "✂" && botChosen === "📰")) {
                return "You won!";
            } else if (me === botChosen) {
                return "Its a tie!";
            } else {
                return "You lost!";
            }

        }

    }
}

