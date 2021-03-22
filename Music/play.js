////////////////////////////
//////CONFIG LOAD///////////
////////////////////////////
const { play } = require("../include/play");
const { Client, Collection, MessageEmbed } = require("discord.js");
const { attentionembed } = require("../util/attentionembed");
const { PREFIX } = require(`../config.json`);
const ytsr = require("youtube-sr")

////////////////////////////
//////COMMAND BEGIN/////////
////////////////////////////
module.exports = {
  name: "play",
  aliases: ["p"],
  description: "(p)Plays song from YouTube/Stream",
  cooldown: 1.5,
  edesc: `Type this command to play some music.\nUsage: ${PREFIX}play <TITLE | URL>`,

async execute(message, args, client) {
    //If not in a guild return
    if (!message.guild) return;
    //define channel
    const { channel } = message.member.voice;
    //get serverqueue
    const serverQueue = message.client.queue.get(message.guild.id);
    //If not in a channel return error
    if (!channel) return attentionembed(message, "Please join a Voice Channel first");
    //If not in the same channel return error
    if (serverQueue && channel !== message.guild.me.voice.channel)
      return attentionembed(message, `You must be in the same Voice Channel as me`);
    //If no args return
    if (!args.length)
      return attentionembed(message, `Usage: ${message.client.prefix}play <YouTube URL | Video Name | Soundcloud URL>`);
    message.react("<:emoji_4:815583574983966720>").catch(console.error);
    const permissions = channel.permissionsFor(message.client.user);
    if (!permissions.has("CONNECT"))
      return attentionembed(message, "I need permissions to join your channel!");
    if (!permissions.has("SPEAK"))
      return attentionembed(message, "I need permissions to speak in your channel");
const search = args.join(" ");
    const videoPattern = /^(https?:\/\/)?(www\.)?(m\.)?(youtube\.com|youtu\.?be)\/.+$/gi;
    const urlValid = videoPattern.test(args[0]);
    const queueConstruct = {
      textChannel: message.channel,
      channel,
      connection: null,
      songs: [],
      loop: false,
      volume: 69,
      filters: [],
      realseek: 0,
      playing: true
    };
    let songInfo = null;
    let song = null;
    try {
      if (serverQueue) {
        if (urlValid) {
          message.channel.send(new MessageEmbed().setColor("YELLOW")
            .setDescription(`**<:emoji_49:814468558930182195> Searching <:emoji_75:815251307807375381> [\`LINK\`](${args.join(" ")})**`))
        }
        else {
          message.channel.send(new MessageEmbed().setColor("YELLOW")
            .setDescription(`**<:emoji_49:814468558930182195> Searching <:emoji_75:815251307807375381> \`${args.join(" ")}\`**`))
        }
      } else {
        queueConstruct.connection = await channel.join();
        message.channel.send(new MessageEmbed().setColor("YELLOW")
          .setDescription(`** <:emoji_67:815251304162394203> Joined \`${channel.name}\` 📄 bound \`#${message.channel.name}\`**`)
          .setFooter(`By: ${message.author.username}#${message.author.discriminator}`))
        if (urlValid) { 
          message.channel.send(new MessageEmbed().setColor("YELLOW")
            .setDescription(`**<:emoji_49:814468558930182195> Searching <:emoji_75:815251307807375381> [\`LINK\`](${args.join(" ")})**`))
        }
        else {
          message.channel.send(new MessageEmbed().setColor("YELLOW")
            .setDescription(`**<:emoji_49:814468558930182195> Searching <:emoji_75:815251307807375381> \`${args.join(" ")}\`**`))
        }
        queueConstruct.connection.voice.setSelfDeaf(true);
        queueConstruct.connection.voice.setDeaf(true);
      }
    }
catch {
    }
    if (urlValid) {
      try {
        songInfo = await ytsr.searchOne(search) ;
        song = {
          title: songInfo.title,
          url: songInfo.url,
          thumbnail: songInfo.thumbnail,
          duration: songInfo.durationFormatted,
       };
      } catch (error) {
        if (error.statusCode === 403) return attentionembed(message, "Max. uses of api Key, please refresh!");
        console.error(error);
        return attentionembed(message, error.message);
      }
    }
    else {
      try {
        songInfo = await ytsr.searchOne(search) ;
        song = {
          title: songInfo.title,
          url: songInfo.url,
          thumbnail: songInfo.thumbnail,
          duration: songInfo.durationFormatted,
       };
      } catch (error) {
        console.error(error);
        return attentionembed(message, error);
      }
    }
    let thumb = "https://cdn.discordapp.com/attachments/748095614017077318/769672148524335114/unknown.png"
    if (song.thumbnail === undefined) thumb = "https://cdn.discordapp.com/attachments/748095614017077318/769672148524335114/unknown.png";
    else thumb = song.thumbnail.url;
    if (serverQueue) {
      let estimatedtime = Number(0);
      for (let i = 0; i < serverQueue.songs.length; i++) {
        let minutes = serverQueue.songs[i].duration.split(":")[0];
        let seconds = serverQueue.songs[i].duration.split(":")[1];
        estimatedtime += (Number(minutes)*60+Number(seconds));
      }
      if (estimatedtime > 60) {
        estimatedtime = Math.round(estimatedtime / 60 * 100) / 100;
        estimatedtime = estimatedtime + " Minutes"
      }
      else if (estimatedtime > 60) {
        estimatedtime = Math.round(estimatedtime / 60 * 100) / 100;
        estimatedtime = estimatedtime + " Hours"
      }
      else {
        estimatedtime = estimatedtime + " Seconds"
      }
serverQueue.songs.push(song);
      const newsong = new MessageEmbed()
        .setTitle("<:emoji_3:815583549326360635>"+song.title)
        .setURL(song.url)
        .setColor("YELLOW")
        .setImage(thumb)
        .setThumbnail(`https://media.discordapp.net/attachments/815252825012568085/815266512414703656/image0.png`)
         .addField("<:emoji_4:815583574983966720> Requested by:", `\`${message.author.username}#${message.author.discriminator}\``, true)
        .addField("<:emoji_6:815597861651611698> Length:", `\`${song.duration} Minutes\``, true)
        .addField("<:emoji_5:815583611008843796> Volume:", `\`100\``, true)
        .addField("<:emoji_73:815251306268328000> Position in queue:", `**\`${serverQueue.songs.length - 1}\`**`, true)
        return serverQueue.textChannel
        .send(newsong)
        .catch(console.error);

    }
  //////////////////////////////////////////////////////////////////////////
    queueConstruct.songs.push(song);
    message.client.queue.set(message.guild.id, queueConstruct);
    try {
      play(queueConstruct.songs[0], message, client);
    } catch (error) {
      console.error(error);
      message.client.queue.delete(message.guild.id);
      await channel.leave();
      return attentionembed(message, `Could not join the channel: ${error}`);
    }
  }
};
  //////////////////////////////////////////////////////////////////////////
