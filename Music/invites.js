const fs = require("fs");
const Discord = require("discord.js");

module.exports = {
  name: "invites",
  aliases: ["userinvites"],
  enabled: true,            
  memberPermissions: [ "SEND_MESSAGES" ],            
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],        
  ownerOnly: false,            
  cooldown: 5,
   async execute(message, args) {

        try {
            let member = await message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;

            let invites = await message.guild.fetchInvites()

            let memberInvites = invites.filter(i => i.inviter && i.inviter.id === member.user.id);

            if (memberInvites.size <= 0) {
                return message.channel.send(`**${member.displayName} didn't invite anyone to the server!**`, (member === message.member ? null : member));
  {}          }

            let content = memberInvites.map(i => i.code).join("\n");
            let index = 0;
            memberInvites.forEach(invite => index += invite.uses);

            let embed = new Discord.MessageEmbed()
                .setColor("#146DF6")
                .setAuthor(`${message.guild.name}`,message.guild.iconURL({ dynamic: true }))
                .setThumbnail(message.author.avatarURL({dynamic: "true"}))
                .setDescription(`Information on Invites of ${member.displayName}`)
                .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
                .addField("**No. Invited Persons**", index)
                .addField("Invitation Codes\n\n", content);
            message.channel.send(embed);
        } catch (e) {
            return message.channel.send(e.message)
        }
    }
};
