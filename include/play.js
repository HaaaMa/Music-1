////////////////////////////
//////CONFIG LOAD///////////
////////////////////////////
const ytdl = require("discord-ytdl-core");
const { canModifyQueue } = require("../util/MilratoUtil");
const { Client, Collection, MessageEmbed, splitMessage, escapeMarkdown,MessageAttachment } = require("discord.js");
const { attentionembed } = require("../util/attentionembed"); 
const createBar = require("string-progressbar");
const lyricsFinder = require("lyrics-finder");
////////////////////////////
//////COMMAND BEGIN/////////
////////////////////////////
module.exports = {
  async play(song, message, client, filters) {
    //VERY MESSY CODE WILL BE CLEANED SOON!
    const { PRUNING, SOUNDCLOUD_CLIENT_ID } = require("../config.json");

    const queue = message.client.queue.get(message.guild.id);
    
    if (!song) {
      queue.channel.leave();
      message.client.queue.delete(message.guild.id);
      const endembed = new MessageEmbed().setColor("#FF0000")
        .setAuthor(`Music Queue ended.`, "https://cdn.discordapp.com/emojis/769915194066862080.png")
      return queue.textChannel.send(endembed).catch(console.error);
    }

    let stream = null;
    let streamType = song.url.includes("youtube.com") ? "opus" : "ogg/opus";
    let isnotayoutube=false;        
    let seekTime = 0;
    let oldSeekTime = queue.realseek;
    let encoderArgstoset;
    if (filters === "remove") {
        queue.filters = ['-af','dynaudnorm=f=200'];
        encoderArgstoset = queue.filters;
        try{
          seekTime = (queue.connection.dispatcher.streamTime - queue.connection.dispatcher.pausedTime) / 1000 + oldSeekTime;
        } catch{
          seekTime = 0;
        } 
          queue.realseek = seekTime;
    } else if (filters)
    {
      try{
        seekTime = (queue.connection.dispatcher.streamTime - queue.connection.dispatcher.pausedTime) / 1000 + oldSeekTime;
      } catch{
        seekTime = 0;
      } 
        queue.realseek = seekTime;
        queue.filters.push(filters)
        encoderArgstoset = ['-af', queue.filters]
    }
 

    try {
      if (song.url.includes("youtube.com")) {
         stream = ytdl(song.url, {
          filter: "audioonly",
          opusEncoded: true,
          encoderArgs: encoderArgstoset,
          bitrate: 320,
          seek: seekTime, 
          quality: "highestaudio",
          liveBuffer: 40000,
          highWaterMark: 1 << 25, 
  
      });
      } else if (song.url.includes(".mp3") || song.url.includes("baseradiode")) {
        stream = song.url;
        isnotayoutube = true;
      }
    } catch (error) {
      if (queue) {
        queue.songs.shift();
        module.exports.play(queue.songs[0], message);
      }

      console.error(error);
      return attentionembed(message, `Error: ${error.message ? error.message : error}`);
    }

    queue.connection.on("disconnect", () => message.client.queue.delete(message.guild.id));   
    
    if(isnotayoutube){
      console.log("TEST")
      const dispatcher = queue.connection
      .play(stream)
      .on("finish", () => {
        if (collector && !collector.ended) collector.stop();

        if (queue.loop) {
          let lastSong = queue.songs.shift();
          queue.songs.push(lastSong);
          module.exports.play(queue.songs[0], message);
        } else {
          queue.songs.shift();
          module.exports.play(queue.songs[0], message);
        }
    })
    .on("error", (err) => {
      console.error(err);
      queue.songs.shift();
      module.exports.play(queue.songs[0], message);
    });
  dispatcher.setVolumeLogarithmic(queue.volume / 100);
    }else{
      const dispatcher = queue.connection
      .play(stream, { type: streamType })
      .on("finish", () => {
        if (collector && !collector.ended) collector.stop();
  
        if (queue.loop) {
          let lastSong = queue.songs.shift();
          queue.songs.push(lastSong);
          module.exports.play(queue.songs[0], message);
        } else {
          queue.songs.shift();
          module.exports.play(queue.songs[0], message);
        }
      })
      .on("error", (err) => {
        console.error(err);
        queue.songs.shift();
        module.exports.play(queue.songs[0], message);
      });
    dispatcher.setVolumeLogarithmic(queue.volume / 100);
    }
    
  let thumb;
    if (song.thumbnail === undefined) thumb = "https://cdn.discordapp.com/avatars/806840212608909344/bf2d9853ffc2b48775c0cf9f8932a189.png?size=2048";
    else thumb = song.thumbnail.url;

    try {
      const newsong = new MessageEmbed()
        .setTitle("<:emoji_3:815583549326360635> "+song.title)
        .setURL(song.url)
        .setColor("#FF0000")
        .setThumbnail(thumb)
        .addField("<:emoji_4:815583574983966720> Requested by:", `\`${message.author.username}#${message.author.discriminator}\``, true)
        .addField("<:emoji_6:815597861651611698> Length:", `\`${song.duration} Minutes\``, true)
        .addField("<:emoji_5:815583611008843796> Volume:", `\`100\``, true)

      var playingMessage = await queue.textChannel.send(newsong);
      

      await playingMessage.react("<:emoji_59:81446855945>"); //skip
      await playingMessage.react("<:emoji_55:814468559362>"); //pause
      await playingMessage.react("<:emoji_53:81446855915759>"); //loop
      await playingMessage.react("<:emoji_54:814468559237>"); //stop
      await playingMessage.react("<:emoji_61:8144685>"); //np
    } catch (error) {
      console.error(error);
    }



    const filter = (reaction, user) => user.id !== message.client.user.id;
    var collector = playingMessage.createReactionCollector(filter, {
      time: song.duration > 0 ? song.duration * 1000 : 600000
    });

    collector.on("collect", async (reaction, user) => {
      if (!queue) return;
      const member = message.guild.member(user);

      switch (reaction.emoji.name) {
       
        //np
        case "<:emoji_61:814468559597207572>":
        reaction.users.remove(user).catch(console.error);
        const song = queue.songs[0];
        //get current song duration in s
        let minutes = song.duration.split(":")[0];   
        let seconds = song.duration.split(":")[1];    
        let ms = (Number(minutes)*60+Number(seconds));   
        //get thumbnail
        let thumb;
        if (song.thumbnail === undefined) thumb = "https://cdn.discordapp.com/attachments/748095614017077318/769672148524335114/unknown.png";
        else thumb = song.thumbnail.url;
        //define current time
        const seek = (queue.connection.dispatcher.streamTime - queue.connection.dispatcher.pausedTime) / 1000;
        //define left duration
        const left = ms - seek;
        //define embed
        let nowPlaying = new MessageEmbed()
          .setTitle("Now playing")
          .setDescription(`[**${song.title}**](${song.url})`)
          .addField("<:emoji_4:815583574983966720> Requested by:", `\`${message.author.username}#${message.author.discriminator}\``, true)
          .addField("<:emoji_6:815597861651611698> Length:", `\`${song.duration} Minutes\``, true)
          .setColor("#FF0000")
          //if its a stream
          if(ms >= 10000) {
            nowPlaying.addField("\u200b", "🔴 LIVE", false);
            //send approve msg
            return message.channel.send(nowPlaying);
          }
          //If its not a stream 
          if (ms > 0 && ms<10000) {
            nowPlaying.addField("\u200b", "**[" + createBar((ms == 0 ? seek : ms), seek, 25, "▬", "⚪️")[0] + "]**\n**" + new Date(seek * 1000).toISOString().substr(11, 8) + " / " + (ms == 0 ? " ◉ LIVE" : new Date(ms * 1000).toISOString().substr(11, 8))+ "**" , false );
            //send approve msg
            return message.channel.send(nowPlaying);
          }
        
        break;
        //skip
        case "<:emoji_59:814468559454994452>":
          queue.playing = true;
          reaction.users.remove(user).catch(console.error);
          if (!canModifyQueue(member)) return;
          queue.connection.dispatcher.end();
          const skipembed = new MessageEmbed().setColor("#FF0000").setAuthor(`${user.username} skipped the song.`, "https://cdn.discordapp.com/attachments/748633941912584333/753201474691137647/next.png")
          queue.textChannel.send(skipembed).catch(console.error);

          collector.stop();

          break;
        //pause
        case "<:emoji_55:814468559362588682>":
          reaction.users.remove(user).catch(console.error);
          if (!canModifyQueue(member)) return;
          if (queue.playing) {
            queue.playing = !queue.playing;
            queue.connection.dispatcher.pause(true);
            const pausemebed = new MessageEmbed().setColor("#FF0000")
              .setAuthor(`${user.username} paused the music.`, "https://cdn.discordapp.com/emojis/769912238236106793.png")
            queue.textChannel.send(pausemebed).catch(console.error);
          } else {
            queue.playing = !queue.playing;
            queue.connection.dispatcher.resume();
            const playembed = new MessageEmbed().setColor("#FF0000")
              .setAuthor(`${user.username} resumed the music!`, "https://cdn.discordapp.com/emojis/769912238236106793.png")
            queue.textChannel.send(playembed).catch(console.error);
          }
          break;
          //loop  
        case "<:emoji_53:814468559157592125>":
          reaction.users.remove(user).catch(console.error);
          if (!canModifyQueue(member)) return;
          queue.loop = !queue.loop;
          const loopembed = new MessageEmbed().setColor("#FF0000")
            .setAuthor(`Loop is now ${queue.loop ? " enabled" : " disabled"}`, "https://cdn.discordapp.com/emojis/769913064194834511.png")
          queue.textChannel.send(loopembed).catch(console.error);
          break;
          //stop
        case "<:emoji_54:814468559237283860>":
          reaction.users.remove(user).catch(console.error);
          if (!canModifyQueue(member)) return;
          queue.songs = [];
          const stopembed = new MessageEmbed().setColor("#FF0000").setAuthor(`${user.username} stopped the music!`, "https://cdn.discordapp.com/emojis/769915194066862080.png")
          queue.textChannel.send(stopembed).catch(console.error);
          try {
            queue.connection.dispatcher.end();
          } catch (error) {
            console.error(error);
            queue.connection.disconnect();
          }
          collector.stop();
          break;

        default:
          reaction.users.remove(user).catch(console.error);
          break;
      }
    });

    collector.on("end", () => {
      playingMessage.reactions.removeAll().catch(console.error);
      if (PRUNING && playingMessage && !playingMessage.deleted) {
        playingMessage.delete({ timeout: 3000 }).catch(console.error);
      }
    });
  }
};
