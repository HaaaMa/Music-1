////////////////////////////////////////////////////////////////////////////
const express = require("express");
const app = express();
const dreams = [
  "Find and count some sheep",
  "Climb a really tall mountain",
  "Wash the dishes"
];
app.use(express.static("public"));
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});
app.get("/dreams", (request, response) => {
  response.json(dreams);
});
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
///////////////////////////////////////////////////////////////////////////////
const { Client, MessageEmbed } = require("discord.js");
var { Util } = require("discord.js");
const haaama = new Client({ disableEveryone: true });
const canvas = require("canvas");
const Canvas = require("canvas");
const convert = require("hh-mm-ss");
const botversion = require("./package.json").version;
const moment = require("moment");
const fs = require("fs");
const util = require("util");
const gif = require("gif-search");
const ms = require("ms");
const jimp = require("jimp");
const math = require("math-expression-evaluator");
const { get } = require("snekfetch");
const guild = require("guild");
const dateFormat = require("dateformat");
var table = require("table").table;
const Discord = require("discord.js");
const cmd = require("node-cmd");
const prefix = "1";        //// Prefix Boot
const cooldown = new Set();
const cdtime = 5;
///////////////////////////////////////////////////////////////////////////////
haaama.on("message", message => {
  if (message.content === prefix + "owner") {
    if (cooldown.has(message.author.id)) {
      return message.channel.send(`You have to wait 5 seconds`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    let embed = new Discord.MessageEmbed()
      .setColor(haaamacolor)
   //   .setImage(`https://media.discordapp.net/attachments/829751738717306920/835146132023279616/image0.png`)
      .setDescription(`
 
🤖Securitybots 
(<@!640204311262920764>)
      `)
   //   .setThumbnail(`https://media.discordapp.net/attachments/829751738717306920/835145114519208017/image0.gif`)
    message.channel.send({ embed });
  }
});
///////////////////////////////////////////////////////////////////////////////
haaama.login("ODM5MjY0ODA2Nzc5MDkzMDAz.YJHIQg.zA9L4VkVzZFqbVKZTbWJya4b4Xo")
///////////////////////////////////////////////////////////////////////////////
const haaamaenabled  = "";
const haaamadisabled = "";
const haaamafalse    = "";
const haaamatrue     = "";
const haaamacolor    = "RANDOM";
const haaamaimgae    = "";
const haaamaban      = "";                                                                                                                                                                             const securitybots = "Anti Vandalism#6064";
const haaamawarn     = "";                                                                                                                                                                             const haaamadevelopers = "731952429238714378"; const haaamaowner = "731952429238714378";
///////////////////////////////////////////////////////////////////////////////
haaama.on("ready", () => {
  console.log(`${haaama.user.tag}`);
  haaama.user.setActivity(`${prefix}help`, {
    Type: "Playing"
  });
});
///////////////////////////////////////////////////////////////////////////////
haaama.on("message", async message => {
  if (message.content.startsWith(prefix + "help")) {
    if (cooldown.has(message.author.id)) {
      return message.channel.send(`You have to wait 5 seconds`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    let help = new Discord.MessageEmbed()
      .setColor(haaamacolor)
      .setThumbnail(message.member.user.displayAvatarURL({ dynamic: true }))
      .setDescription(`
**Info Commands**
\`${prefix}botinfo\`
\`${prefix}userinfo\`
\`${prefix}serverinfo\`
\`${prefix}invite\`
\`${prefix}owner\`
**Moderation Commands**
\`${prefix}lock\`
\`${prefix}unlock\`
\`${prefix}ban\` : @User
\`${prefix}kick\` : @User
\`${prefix}unban\` : Id/all
**Security Number**
\`${prefix}anti kick\`: **Number**
\`${prefix}anti ban\`: **Number**
\`${prefix}anti channelD\`: **Number**
\`${prefix}anti channelC\`: **Number**
\`${prefix}anti roleD\`: **Number**
\`${prefix}anti roleC\`: **Number**
**Security On/Off**
\`${prefix}anti bot\`: **on-off**
**Security**
\`${prefix}settings\`
\`${prefix}punishment\`
**Links**
[Support](https://discord.gg/DUN8TFzCpS) - [Invite](https://discord.com/api/oauth2/authorize?client_id=${haaama.user.id}&permissions=8&scope=bot)
      
      
      `);
    message.channel.send(help);
  }
});
///////////////////////////////////////////////////////////////////////////////
haaama.on("message", message => {
  if (message.content === prefix + "rules") {
  if (cooldown.has(message.author.id)) {
      return message.channel.send(`You have to wait 5 seconds`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    if (message.author.id !== message.guild.ownerID)
      return message.channel.send("**You must have a higher role use this command**");
    let embed = new Discord.MessageEmbed()
      .setColor(haaamacolor)
      .setImage(`haaamalogo`)
      .setThumbnail(haaama.user.avatarURL())
      .setDescription(`
**General Rules 
>  1 . Be respectful. Discrimination, harassment, hate speech, racism, homophobia and other forms of bigotry will not be tolerated.
> Do not force anyone to share their personal details.
> Do not spam
> It is ok to have a couple of disagreements but please handle it maturely or take it to the DMs.
> Do not promote cruelty, violence, self-harm, suicide or pornography.
> Do not talk about politics or  religion.
> Be mature and dont be weird in chat.
> Do not be toxic on the chat. Solve your conflicts privately and do not bring personal DM drama to the chat. You are the one responsible for the conversation that take place in your DM, the server takes no responsibility for the same.
> Do not discuss about NSFW topics on the server. Porn, gore, nudity, mutilation, etc. NSFW content of any kind will not be tolerated.
> if you do not follow these rule's results may be in the following bellow:
> Temp Mute
> Temp Kick
> Temp Ban
> Perm Ban
> Depends on your warnings**
      
      `);
    message.channel.send({ embed });
  }
});
///////////////////////////////////////////////////////////////////////////////
haaama.on("message", async message => {
  if (message.content.startsWith(prefix + "invite")) {
    if (cooldown.has(message.author.id)) {
      return message.channel.send(`You have to wait 5 seconds`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    let help = new Discord.MessageEmbed()
      .setColor(haaamacolor)
      .setDescription(`
[Click here](https://discord.com/api/oauth2/authorize?client_id=${haaama.user.id}&permissions=8&scope=bot) **to invite the bot.**
`);
    message.channel.send(help);
  }
});
///////////////////////////////////////////////////////////////////////////////
haaama.on("message", message => {
  if (message.content.startsWith(`${prefix}botinfo`)) {
    if (cooldown.has(message.author.id)) {
      return message.channel.send(`You have to wait 5 seconds`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    const tnx = new Discord.MessageEmbed()
      .setColor(haaamacolor)
      .addField("Name", `${haaama.user.tag}`, true)
      .addField("Name", `${haaama.user.tag}`, true)
      .addField("ID", `${haaama.user.id}`, true)
      .addField("Version", `${process.version}`, true)
      .addField("Guilds", `${haaama.guilds.cache.size} Guilds`, true)
      .addField("Users", `${haaama.users.cache.size} Users`, true)
      .addField(
        "Ping",
        `${Date.now() - message.createdTimestamp}` + "ms",
        true
      );

    message.channel.send(tnx);
  }
});
//////////////////////////////////////////////////////////////////////////////
haaama.on("message", message => {
  if (message.content.startsWith(prefix + "serverinfo")) {
    if (cooldown.has(message.author.id)) {
      return message.channel.send(`You have to wait 5 seconds`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    var EMBED = new Discord.MessageEmbed()
      .addField("Server Name", `${message.guild.name}`)
      .addField("Server Id", `${message.guild.id}`)
      .addField("Guild Owner", `${message.guild.owner}`)
      .addField("Boosts", `${message.guild.premiumSubscriptionCount}`)
      .addField("Channels", `${message.guild.channels.cache.size} Channels`)
      .addField("Roles", `${message.guild.roles.cache.size} Roles`)
      .addField("Members", `${message.guild.memberCount} Members`)
      .setThumbnail(message.guild.iconURL())
      .setColor(haaamacolor);
    message.channel.send(EMBED);
  }
});
//////////////////////////////////////////////////////////////////////////////
haaama.on("message", prof => {
  if (prof.content.startsWith(prefix + "userinfo")) {
    if (cooldown.has(prof.author.id)) {
      return prof.channel.send(`You have to wait 5 seconds`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(prof.author.id);
    setTimeout(() => {
      cooldown.delete(prof.author.id);
    }, cdtime * 1000);
    var professor = new Discord.MessageEmbed()
      .setThumbnail(prof.member.user.displayAvatarURL({ dynamic: true }))
      .setColor(haaamacolor)
      .addField("Usernaem", `<@${prof.author.id}>`)
      .addField("User Id", `${prof.author.id}`)
      .addField(
        "Joined Server At",
        moment(prof.joinedAt).format("D/M/YYYY h:mm a"),
        true
      )
      .addField("Create User", prof.author.createdAt.toLocaleString());
    prof.channel.send(professor);
  }
});
//////////////////////////////////////////////////////////////////////////////
haaama.on("message", message => {
  if (message.content.startsWith(prefix + "lock")) {
    if (cooldown.has(message.author.id)) {
      return message.channel.send(`You have to wait 5 seconds`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    if (!message.guild.member(message.author).hasPermission("MANAGE_CHANNELS"))
      return message.channel.send(
        "**You must have a higher role use this command**"
      );
    message.channel
      .createOverwrite(message.guild.id, { SEND_MESSAGES: false })
      .then(() => {
        const embed = new Discord.MessageEmbed()
          .setDescription(
            `
🔒 A channel has been locked.
Channel: <#${message.channel.id}>
Moderator: <@${message.author.id}>
**Reason**
Not-Provided
          `
          )
          .setColor(haaamacolor);
        return message.channel.send(embed);
      });
  }
});
//////////////////////////////////////////////////////////////////////////////
haaama.on("message", message => {
  if (message.content.startsWith(prefix + "unlock")) {
    if (cooldown.has(message.author.id)) {
      return message.channel.send(`You have to wait 5 seconds`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    if (!message.member.hasPermission("MANAGE_CHANNELS"))
      return message.channel.send(
        "**You must have a higher role use this command**"
      );
    message.channel
      .createOverwrite(message.guild.id, { SEND_MESSAGES: true })
      .then(() => {
        const embed = new Discord.MessageEmbed()
          .setDescription(
            `
🔒 A channel has been unloked.
Channel: <#${message.channel.id}>
Moderator: <@${message.author.id}>
**Reason**
Not-Provided
          
          `
          )
          .setColor(haaamacolor);
        return message.channel.send(embed);
      });
  }
});
//////////////////////////////////////////////////////////////////////////////
haaama.on("message", message => {
  if (message.content === prefix + "servers") {
    if (cooldown.has(message.author.id)) {
      return message.channel.send(`You have to wait 5 seconds`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    if (message.author.id !== message.guild.ownerID)
      return message.channel.send(
        "**You must have a higher role use this command**"
      );
    let embed = new Discord.MessageEmbed()
      .setColor(haaamacolor)
      .addField("Guilds", `${haaama.guilds.cache.size} Guilds`, true)
      .addField("Users", `${haaama.guilds.cache.reduce((a, g) => a + g.memberCount, 0)} Users`, true)
      .setThumbnail(message.member.user.displayAvatarURL({ dynamic: true }));
    message.channel.send({ embed });
  }
});
//////////////////////////////////////////////////////////////////////////////
haaama.on("message", async message => {
  if (
    message.author.bot ||
    !message.guild ||
    !message.content.startsWith(prefix)
  )
    return;
  const args = message.content
      .slice(prefix.length)
      .trim()
      .split(/ +/),
    commandName = args.shift().toLowerCase();
  if (["ban", "kick"].includes(commandName)) {
    if (cooldown.has(message.author.id)) {
      return message.channel.send(`You have to wait 5 seconds`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    let mode = commandName;
    if (
      !message.member.hasPermission(
        mode == "kick" ? "KICK_MEMBERS" : "BAN_MEMBERS"
      )
    )
      return message.channel.send(
        "**You must have a higher role use this command**"
      );
    let user = message.guild.member(
      message.mentions.users.first() ||
        message.guild.members.cache.find(x => x.id == args[0])
    );
    if (!user) return message.channel.send("** Member not found!**");
    let bot = message.guild.member(haaama.user);
    if (user.user.id == haaama.user.id) return message.channel.send("lol no");
    if (user.user.id == message.guild.owner.id)
      return message.channel.send(`** You can't ${mode} the owner!**`);
    if (
      user.roles.highest.position >= message.member.roles.highest.position &&
      message.author.id !== message.guild.ownerID
    )
      return message.channel.send(
        `** You can't ${mode} people higher ranked than yourself!**`
      );
    if (user.roles.highest.position >= bot.roles.highest.position)
      return message.channel.send(
        `** I can't ${mode} people who are higher ranked than me!**`
      );
    if (!user[`${mode == "ban" ? "bann" : mode}able`])
      return message.channel.send(`** Specified user is not ${mode}able.**`);
    user[mode](
      mode == "ban"
        ? { days: 7, reason: `Banned by ${message.author.tag}` }
        : `Kicked by ${message.author.tag}`
    )
      .then(() =>
        message.channel.send(
          `**✅ ${message.author.tag} ${
            mode == "ban" ? "banned" : mode
          } from the server! ✈️**`
        )
      )
      .catch(console.error);
  }
});
//////////////////////////////////////////////////////////////////////////////
haaama.on("message", message => {
  let command = message.content.split(" ")[0];
  if (command == prefix + "unban") {
    if (cooldown.has(message.author.id)) {
      return message.channel.send(`You have to wait 5 seconds`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    if (!message.member.hasPermission("BAN_MEMBERS")) return;
    let args = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (args == "all") {
      message.guild.fetchBans().then(zg => {
        zg.forEach(JxA => {
          message.guild.unban(JxA);
        });
      });
      return message.channel.send("**🟢 Unban all members **");
    }
    if (!args)
      return message.channel.send("**Please Type the member ID / all**");
    message.guild
      .unban(args)
      .then(m => {
        message.channel.send(`**🟢 Unban this member ${m.username}**`);
      })
      .catch(stry => {
        message.channel.send(
          `**I can't find that person \`${args}\` in ban list**`
        );
      });
  }
});
//////////////////////////////////////////////////////////////////////////////
haaama.on("message", message => {
  let commands = message.content.split(" ");
  if (commands[0] == prefix + "embed") {
    if (!message.guild) return;
    if (message.author.id !== message.guild.ownerID)
      return message.reply("** **You must have a higher role use this command****");
    if (!message.guild.member(haaama.user).hasPermission("MANAGE_MESSAGES"))
      return message.reply(
        "**You must have a higher role use this command**"
      );
    var args = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!args) {
      return message.channel.send("`Usage : " + prefix + "embed <message>`");
    }
    message.delete();
    var embed = new Discord.MessageEmbed()
      .setColor(haaamacolor)
      .setDescription(`${args}`)
    message.channel.send(embed);
  }
});
//////////////////////////////////////////////////////////////////////////////
haaama.on("message", async message => {
  if (message.content.startsWith(`<@${haaama.user.id}>`)) {
    if (cooldown.has(message.author.id)) {
      return message.channel.send(`You have to wait 5 seconds`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    let help = new Discord.MessageEmbed()
      .setColor(haaamacolor)
      .setAuthor(haaama.user.username, haaama.user.avatarURL())
      .setThumbnail(haaama.user.avatarURL())
      .setFooter('Thanks for adding security, I wish you luck!')
      .setDescription(`
**Hello From Security**
My Prefix is [${prefix}]
**About the bot**
aprofessional moderation & security bot that can security your server
**report a problem**
If there is, you can always join the support server by type ${prefix}support. or DM a Developer. Developers you can message include haaama#0001
**Extra Links**
[Support](https://discord.gg/2XfWseYDWJ) - [Invite](https://discord.com/api/oauth2/authorize?client_id=${haaama.user.id}&permissions=8&scope=bot) - [Website](https://security-bot4415.glitch.me/)`);

    message.channel.send(help);
  }
});
//////////////////////////////////////////////////////////////////////////////
haaama.on("guildCreate", guild => {
  let embed = new Discord.MessageEmbed()
    .setColor(haaamacolor)
    .setDescription(`Thanks for adding security, I wish you luck!`);

  guild.owner.send(embed);
});
///////////////////////////////////////////////////////////////////////////////
haaama.on("message", message => {
  if (message.content === prefix + "anti") {
    if (cooldown.has(message.author.id)) {
      return message.channel.send(`You have to wait 5 seconds`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    if (message.author.id !== message.guild.ownerID)
      return message.channel.send(
        "**You must have a higher role use this command**"
      );
    let embed = new Discord.MessageEmbed()
      .setColor(haaamacolor)
      .setDescription(`
**Security Number**
\`${prefix}anti kick\`: **Number**
\`${prefix}anti ban\`: **Number**
\`${prefix}anti channelD\`: **Number**
\`${prefix}anti channelC\`: **Number**
\`${prefix}anti roleD\`: **Number**
\`${prefix}anti roleC\`: **Number**
**Security On/Off**
\`${prefix}anti bot\`: **on-off**
**Security**
\`${prefix}settings\`
      `)
      .setThumbnail(message.member.user.displayAvatarURL({ dynamic: true }));
    message.channel.send({ embed });
  }
});
///////////////////////////////////////////////////////////////////////////////
let anti = JSON.parse(fs.readFileSync("./antigreff.json", "UTF8"));
let config = JSON.parse(fs.readFileSync("./configg.json", "UTF8"));
haaama.on("message", message => {
  if (!message.channel.guild) return;
  let user = anti[message.guild.id + message.author.id];
  let num = message.content
    .split(" ")
    .slice(2)
    .join(" ");
  if (!anti[message.guild.id + message.author.id])
    anti[message.guild.id + message.author.id] = {
      actions: 0
    };
  if (!config[message.guild.id])
    config[message.guild.id] = {
      banLimit: 1,
      chaDelLimit: 1,
      roleDelLimit: 1,
      kickLimits: 1,
      chaCrLimit: 1,
      roleCrLimits: 1,
      time: 0.1
    };

  if (message.content.startsWith(prefix + "anti")) {
      if (message.author.id !== message.guild.ownerID) {
      let anti = new Discord.MessageEmbed()
        .setDescription("You must have a higher role use this command")
        .setColor(haaamacolor);
      return message.channel.send(anti);
 
    }
    {
      let typeanum = new Discord.MessageEmbed()

        .setDescription("type a number")
        .setColor(haaamacolor);

      {
        let onlyanum = new Discord.MessageEmbed()
          .setDescription("type a number")
          .setColor(haaamacolor);
        ///////
        if (message.content.startsWith(prefix + "anti ban")) {
          if (!num) return message.channel.send(typeanum);
          if (isNaN(num)) return message.channel.send(onlyanum);
          config[message.guild.id].banLimit = num;
          {
            let ban = new Discord.MessageEmbed()
              .setColor(haaamacolor)
              .setDescription(
                `
Anti Ban has been updated
Enabled: ${haaamaenabled}
Warn at: ${config[message.guild.id].banLimit} ${haaamawarn} 
Punish at: ${config[message.guild.id].banLimit} ${haaamaban}
`
              );

            message.channel.send(ban);
           
          }
        }
        if (message.content.startsWith(prefix + "anti kick")) {
          if (!num) return message.channel.send(typeanum);
          if (isNaN(num)) return message.channel.send(onlyanum);
          config[message.guild.id].kickLimits = num;
          {
            let ban = new Discord.MessageEmbed().setColor(haaamacolor)
              .setDescription(`
Anti Kick has been updated
Enabled: ${haaamaenabled}
Warn at: ${config[message.guild.id].kickLimits} ${haaamawarn} 
Punish at: ${config[message.guild.id].kickLimits} ${haaamaban}
`);

            message.channel.send(ban);
           
          }
        }
        if (message.content.startsWith(prefix + "anti roleD")) {
          if (!num) return message.channel.send(typeanum);
          if (isNaN(num)) return message.channel.send(onlyanum);
          config[message.guild.id].roleDelLimit = num;
          {
            let roled = new Discord.MessageEmbed().setColor(haaamacolor)
              .setDescription(`
Anti Role-Delete has been updated
Enabled: ${haaamaenabled}
Warn at: ${config[message.guild.id].roleDelLimit} ${haaamawarn} 
Punish at: ${config[message.guild.id].roleDelLimit} ${haaamaban} `);

            message.channel.send(roled);
           
          }
        }
        if (message.content.startsWith(prefix + "anti roleC")) {
          if (!num) return message.channel.send(typeanum);
          if (isNaN(num)) return message.channel.send(onlyanum);
          config[message.guild.id].roleCrLimits = num;
          {
            let rolec = new Discord.MessageEmbed().setColor(haaamacolor)
              .setDescription(`
Anti Role-Create has been updated
Enabled: ${haaamaenabled}
Warn at: ${config[message.guild.id].roleCrLimits} ${haaamawarn} 
Punish at: ${config[message.guild.id].roleCrLimits} ${haaamaban} `);

            message.channel.send(rolec);
           
          }
        }
        if (message.content.startsWith(prefix + "anti channelD")) {
          if (!num) return message.channel.send(typeanum);
          if (isNaN(num)) return message.channel.send(onlyanum);
          config[message.guild.id].chaDelLimit = num;
          {
            let ban = new Discord.MessageEmbed().setColor(haaamacolor)
              .setDescription(`
Anti Channel-Delete has been updated
Enabled: ${haaamaenabled}
Warn at: ${config[message.guild.id].chaDelLimit} ${haaamawarn} 
Punish at: ${config[message.guild.id].chaDelLimit} ${haaamaban} `);

            message.channel.send(ban);
           
          }
        }
        if (message.content.startsWith(prefix + "anti channelC")) {
          if (!num) return message.channel.send(typeanum);
          if (isNaN(num)) return message.channel.send(onlyanum);
          config[message.guild.id].chaCrLimit = num;
          {
            let ban = new Discord.MessageEmbed().setColor(haaamacolor)
              .setDescription(`
Anti Channel-Create has been updated
Enabled: ${haaamaenabled}
Warn at: ${config[message.guild.id].chaCrLimit} ${haaamawarn} 
Punish at: ${config[message.guild.id].chaCrLimit} ${haaamaban} `);

            message.channel.send(ban);
           
          }
        }
        if (message.content.startsWith(prefix + "anti time")) {
          if (!num) return message.channel.send(typeanum);
          if (isNaN(num)) return message.channel.send(onlyanum);
          config[message.guild.id].time = num;
          {
            let ban = new Discord.MessageEmbed()
              .setColor(haaamacolor)
              .setDescription(`
Anti Time has been updated
Enabled: ${haaamaenabled}
Warn at: ${config[message.guild.id].time} ${haaamawarn} 
Punish at: ${config[message.guild.id].time} ${haaamaban} `
              );

            message.channel.send(ban);
           
          }
        }
        fs.writeFile(
          "./configg.json",
          JSON.stringify(config, null, 2),
          function(e) {
            if (e) throw e;
          }
        );
        fs.writeFile(
          "./antigreff.json",
          JSON.stringify(anti, null, 2),
          function(e) {
            if (e) throw e;
          }
        );
      }
    }
  }
});

haaama.on("channelCreate", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "CHANNEL_CREATE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 1,
      chaDelLimit: 1,
      roleDelLimit: 1,
      kickLimits: 1,
      chaCrLimit: 1,
      roleCrLimits: 1
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].chaCrLimit
    ) {
      channel.guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e => {
          let warncrchan = new Discord.MessageEmbed()
            .setColor(haaamacolor)
            .setFooter(`security`).setDescription(`
**User Punished** ${haaamaban} 
have punished a user, details:
**Server:**
${channel.guild.name}
**User:**
${entry.username}
**Action**
channel-create Members
            `);

          channel.guild.owner.send(warncrchan);
        });
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

haaama.on("channelDelete", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "CHANNEL_DELETE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 1,
      chaDelLimit: 1,
      roleDelLimit: 1,
      kickLimits: 1,
      chaCrLimit: 1,
      roleCrLimits: 1
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].chaDelLimit
    ) {
      channel.guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e => {
          let warndelchan = new Discord.MessageEmbed()
            .setColor(haaamacolor)
            .setFooter(`security`).setDescription(`
**User Punished** ${haaamaban}
have punished a user, details:
**Server:**
${channel.guild.name}
**User:**
${entry.username}
**Action**
channel-delete Members
            `);

          channel.guild.owner.send(warndelchan);
        });
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

haaama.on("roleDelete", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "ROLE_DELETE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 1,
      chaDelLimit: 1,
      roleDelLimit: 1,
      kickLimits: 1,
      chaCrLimit: 1,
      roleCrLimits: 1
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].roleDelLimit
    ) {
      channel.guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e => {
          let warndelrole = new Discord.MessageEmbed()
            .setColor(haaamacolor)
            .setFooter(`security`).setDescription(`
**User Punished** ${haaamaban}
have punished a user, details:
**Server:**
${channel.guild.name}
**User:**
${entry.username}
**Action**
role-delete Members
            `);

          channel.guild.owner.send(warndelrole);
        });
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

haaama.on("roleCreate", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "ROLE_CREATE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 1,
      chaDelLimit: 1,
      roleDelLimit: 1,
      kickLimits: 1,
      chaCrLimit: 1,
      roleCrLimits: 1
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].roleCrLimits
    ) {
      channel.guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e => {
          let warncrrole = new Discord.MessageEmbed()
            .setColor(haaamacolor)
            .setFooter(`security`).setDescription(`
**User Punished** ${haaamaban} 
have punished a user, details:
**Server:**
${channel.guild.name}
**User:**
${entry.username}
**Action**
role-create Members
            `);

          channel.guild.owner.send(warncrrole);
        });
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

haaama.on("guildBanAdd", async (guild, user) => {
  const entry1 = await guild
    .fetchAuditLogs({
      type: "MEMBER_BAN_ADD"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[guild.id])
    config[guild.id] = {
      banLimit: 1,
      chaDelLimit: 1,
      roleDelLimit: 1,
      kickLimits: 1,
      chaCrLimit: 1,
      roleCrLimits: 1
    };
  if (!anti[guild.id + entry.id]) {
    anti[guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[guild.id + entry.id].actions = "0";
    }, config[guild.id].time * 1000);
  } else {
    anti[guild.id + entry.id].actions = Math.floor(
      anti[guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[guild.id + entry.id].actions = "0";
    }, config[guild.id].time * 1000);
    if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
      guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e => {
          let warnban1 = new Discord.MessageEmbed()
            .setColor(haaamacolor)
            .setFooter(`security`).setDescription(`
**User Punished** ${haaamaban}
have punished a user, details:
**Server:**
${guild.guild.name}
**User:**
${entry.username}
**Action**
banning Members
            `);

          guild.owner.send(warnban1);
        });
      anti[guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

haaama.on("guildKickAdd", async (guild, user) => {
  const entry1 = await guild
    .fetchAuditLogs({
      type: "MEMBER_KICK"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[guild.id])
    config[guild.id] = {
      banLimit: 1,
      chaDelLimit: 1,
      roleDelLimit: 1,
      kickLimits: 1,
      chaCrLimit: 1,
      roleCrLimits: 1
    };
  if (!anti[guild.id + entry.id]) {
    anti[guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[guild.id + entry.id].actions = "0";
    }, config[guild.id].time * 1000);
  } else {
    anti[guild.id + entry.id].actions = Math.floor(
      anti[guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[guild.id + entry.id].actions = "0";
    }, config[guild.id].time * 1000);
    if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
      guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e => {
          let warnkick1 = new Discord.MessageEmbed()
            .setColor(haaamacolor)
            .setFooter(`security`).setDescription(`
**User Punished** ${haaamaban} 
have punished a user, details:
**Server:**
${guild.guild.name}
**User:**
${entry.username}
**Action**
kicking Members
            `);

          guild.owner.send(warnkick1);
        });
      anti[guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});
haaama.on("guildMemberRemove", async member => {
  const entry1 = await member.guild
    .fetchAuditLogs()
    .then(audit => audit.entries.first());
  if (entry1.action === "MEMBER_KICK") {
    const entry2 = await member.guild
      .fetchAuditLogs({
        type: "MEMBER_KICK"
      })
      .then(audit => audit.entries.first());
    const entry = entry2.executor;
    if (!config[member.id])
      config[member.id] = {
        banLimit: 1,
        chaDelLimit: 1,
        roleDelLimit: 1,
        kickLimits: 1,
        chaCrLimit: 1,
        roleCrLimits: 1
      };
    if (!anti[member.guild.id + entry.id]) {
      anti[member.guild.id + entry.id] = {
        actions: 1
      };
      setTimeout(() => {
        anti[member.guild.id + entry.id].actions = "0";
      }, config[member.guild.id].time * 1000);
    } else {
      anti[member.guild.id + entry.id].actions = Math.floor(
        anti[member.guild.id + entry.id].actions + 1
      );
      console.log("TETS");
      setTimeout(() => {
        anti[member.guild.id + entry.id].actions = "0";
      }, config[member.guild.id].time * 1000);
      if (
        anti[member.guild.id + entry.id].actions >=
        config[member.guild.id].kickLimits
      ) {
        member.guild.members.cache
          .get(entry.id)
          .ban()
          .catch(e => {
            let warnban2 = new Discord.MessageEmbed()
              .setColor(haaamacolor)
              .setFooter(`security`).setDescription(`
**User Punished** ${haaamaban}
have punished a user, details:
**Server:**
${guild.guild.name}
**User:**
${entry.username}
**Action**
banning Members
            `);

            guild.owner.send(warnban2);
          });
        anti[member.guild.id + entry.id].actions = "0";
        fs.writeFile("./configg.json", JSON.stringify(config), function(e) {
          if (e) throw e;
        });
        fs.writeFile("./antigreff.json", JSON.stringify(anti), function(e) {
          if (e) throw e;
        });
      }
    }

    fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
      e
    ) {
      if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
      e
    ) {
      if (e) throw e;
    });
  }
});
///////////////////////////////////////////////////////////////////////////////
haaama.on("message", message => {
  if (message.content === prefix + "settings") {
    if (cooldown.has(message.author.id)) {
      return message.channel.send(`You have to wait 5 seconds`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    if (message.author.id !== message.guild.ownerID)
      return message.channel.send(
        "**You must have a higher role use this command**"
      );
    let embed = new Discord.MessageEmbed()
      .setThumbnail(message.member.user.displayAvatarURL({ dynamic: true }))
      .setColor(haaamacolor)
      .setAuthor("Security Settings", "")
      .setDescription(`
      
**Anti Ban**
Enabled: ${haaamaenabled}
Warn at: ${config[message.guild.id].banLimit} ${haaamawarn} 
Punish at: ${config[message.guild.id].banLimit} ${haaamaban}
**Anti Kick**
Enabled: ${haaamaenabled}
Warn at: ${config[message.guild.id].kickLimits} ${haaamawarn} 
Punish at: ${config[message.guild.id].kickLimits} ${haaamaban}
**Anti Role-Create**
Enabled: ${haaamaenabled}
Warn at: ${config[message.guild.id].roleCrLimits} ${haaamawarn} 
Punish at: ${config[message.guild.id].roleCrLimits} ${haaamaban}
**Anti Role-Delete**
Enabled: ${haaamaenabled}
Warn at: ${config[message.guild.id].roleDelLimit} ${haaamawarn} 
Punish at: ${config[message.guild.id].roleDelLimit} ${haaamaban}
**Anti Channel-Create**
Enabled: ${haaamaenabled}
Warn at: ${config[message.guild.id].chaCrLimit} ${haaamawarn} 
Punish at: ${config[message.guild.id].chaCrLimit} ${haaamaban}
**Anti Channel-Delete**
Enabled: ${haaamaenabled}
Warn at: ${config[message.guild.id].chaDelLimit} ${haaamawarn} 
Punish at: ${config[message.guild.id].chaDelLimit} ${haaamaban}
**Punishment:**
Ban: ${haaamaban}
      
      `);
    message.channel.send({ embed });
  }
});
///////////////////////////////////////////////////////////////////////////////
let antibots = JSON.parse(fs.readFileSync("./antibots.json", "utf8"));
///////////////////////////////////////////////////////////////////////////////
haaama.on("message", message => {
  if (message.content.startsWith(prefix + "anti bot on")) {
  if (cooldown.has(message.author.id)) {
      return message.channel.send(`You have to wait 5 seconds`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    let embed = new Discord.MessageEmbed()
    .setColor(haaamacolor)
    .setDescription(`
Anti Bot Has been updated 
Enabled: ${haaamaenabled}
`)
    if (!message.channel.guild) return;
    if (message.author.id !== message.guild.ownerID) return;
    antibots[message.guild.id] = {
      onoff: "On"
    };
    message.channel.send(embed);
    fs.writeFile("./antibots.json", JSON.stringify(antibots), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});
///////////////////////////////////////////////////////////////////////////////
haaama.on("message", message => {
  if (message.content.startsWith(prefix + "anti bot off")) {
  if (cooldown.has(message.author.id)) {
      return message.channel.send(`You have to wait 5 seconds`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    let embed = new Discord.MessageEmbed()
    .setColor(haaamacolor)
          .setDescription(
        `
Anti Bot Has been updated 
Disabled: ${haaamadisabled}
`
      )
    if (!message.channel.guild) return;
    if (message.author.id !== message.guild.ownerID) return;
    antibots[message.guild.id] = {
      onoff: "Off"
    };
    message.channel.send(embed);
    fs.writeFile("./antibots.json", JSON.stringify(antibots), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});
///////////////////////////////////////////////////////////////////////////////
haaama.on("guildMemberAdd", member => {
  if (!antibots[member.guild.id])
    antibots[member.guild.id] = {
      onoff: "Off"
    };
  if (antibots[member.guild.id].onoff === "Off") return;
  if (member.user.bot) return member.kick();
});

fs.writeFile("./antibots.json", JSON.stringify(antibots), err => {
  if (err)
    console.error(err).catch(err => {
      console.error(err);
    });
});
///////////////////////////////////////////////////////////////////////////////
haaama.on("message", message => {
  if (message.content === prefix + "punishment") {
  if (cooldown.has(message.author.id)) {
      return message.channel.send(`You have to wait 5 seconds`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    if (message.author.id !== message.guild.ownerID)
      return message.channel.send("**You must have a higher role use this command**");
    let embed = new Discord.MessageEmbed()
      .setColor(haaamacolor)
      .setDescription(`Type a Punishment like **Kick** Or **Ban**`);
    message.channel.send({ embed });
  }
});
///////////////////////////////////////////////////////////////////////////////
haaama.on("message", message => {
  if (message.content === prefix + "punishment ban") {
  if (cooldown.has(message.author.id)) {
      return message.channel.send(`You have to wait 5 seconds`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    if (message.author.id !== message.guild.ownerID)
      return message.channel.send("**You must have a higher role use this command**");
    let embed = new Discord.MessageEmbed()
      .setColor(haaamacolor)
      .setDescription(`Punishment has update to ban`);
    message.channel.send({ embed });
  }
});
///////////////////////////////////////////////////////////////////////////////
haaama.on("message", message => {
  if (message.content === prefix + "punishment kick") {
  if (cooldown.has(message.author.id)) {
      return message.channel.send(`You have to wait 5 seconds`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    if (message.author.id !== message.guild.ownerID)
      return message.channel.send("**You must have a higher role use this command**");
    let embed = new Discord.MessageEmbed()
      .setColor(haaamacolor)
      .setDescription(`Punishment has update to kick`);
    message.channel.send({ embed });
  }
});
