const Discord = require("discord.js");
const YTDL = require("ytdl-core");
const PREFIX = "*";
const EVERYONE = "@";
const YouTube = require("simple-youtube-api")

var client = new Discord.Client();

const youtube = new YouTube("AIzaSyDE684AY4Th50yKvN7lZ9GroJiFvF5yjy8");

const queue = new Map();

var bot = new Discord.Client();

var servers = {};

bot.on("ready", function () {
    bot.user.setGame("|ErléalysBot V2 - *help |", "https://www.twitch.tv/zelkiax")
    bot.user.setUsername("ErléalysBot - V2")
    console.log("*``*___*``*");
    console.log("ErléalysBot V2 - Connecté");
        console.log("*``*___*``*");
});


var zelkiaxRandomMessage = [
    "Zelkiax, c'est un bogosse !",
    "Zelkiax le plus beau !",
    "Zelkiax est moins fort que mon créateur :p",
    "Zelkiax > PX",
    "Zelkiax est tro for",
    "Zelkiax cheat",
    "Hier, j'ai ez Zelkiax dans la rue :o",
    "Zelkiax <3",
    "Zelkiax est c**, j'ai rien dit, c un bogosse :o",
    "Zelkiax t tro bo",
    "Zelkiax > Lounaaa"
];

var swakiRandomMessage = [
    "Zelkiax + Swaki = SwaKiax <3 <3",
    "Swaki + Zelkiax <3",
    "Swaki mange des kiwis ! ",
    "Swaki, la femme de Zelkiax :D",
    "Zelkiax est tro bo",
    "Swakiiiiiiiiiiiiiiiiiiii",
    "O_o Swaki, ikawS O_o",
    "Zelkiax <3",
    "*grande moderatore*",
    "Swaki > Zelkiax"
];

var wordRandomMessage = [
    " un animal XD",
    " un fruit o_o",
    " Zelkiax MDR",
    " ma mè.. Oups, c'est vrai, je n'ai pas de mère je suis un robot!",
    " un sport",
    " une musique",
    " mes créateurs ! :3"
    ];


var lounaaaRandomMessage = [
    "Lounaaa, la plus grande designeuse",
    "Je suis plus fort en gfx que Lounaa",
    "Lounaaa > Zelkiax",
    "Wallah tu huzuni toi",
    "Lounaaa stop cheat plz",
    "Go duel HikaBrain, j'suis sur que j'te 5-0",
    "Fait moi 24 Renders, 6 Miniatures et 28 Bannières plzz"
];

var randomMusicRadio = [
    "https://www.youtube.com/watch?v=MXzfG_Id0SU",
    "https://www.youtube.com/watch?v=fDBiG9rwRKM",
    "https://www.youtube.com/watch?v=dpmmOZDdUec",
    "https://www.youtube.com/watch?v=ezAPaI-sD8s",
    "https://www.youtube.com/watch?v=rldeeWjsxrE",
    "https://www.youtube.com/watch?v=2C5CjxbFzt4",
    "https://www.youtube.com/watch?v=2048Nr6aLiQ",
    "https://www.youtube.com/watch?v=g4wkOyOMe4Y",
    "https://www.youtube.com/watch?v=dT2owtxkU8k",
    "https://www.youtube.com/watch?v=u2UJSF8Yy6w",
    "https://www.youtube.com/watch?v=3tmd-ClpJxA",
    "https://www.youtube.com/watch?v=ClU3fctbGls",
    "https://www.youtube.com/watch?v=J_ub7Etch2U",
    "https://www.youtube.com/watch?v=2Vv-BfVoq4g",
    "https://www.youtube.com/watch?v=qN4ooNx77u0",
    "https://www.youtube.com/watch?v=PVjiKRfKpPI",
    "https://www.youtube.com/watch?v=7wtfhZwyrcc"
];

bot.on('message', function(message) {

        if(message.content === 'Salut') {
            message.reply('Bonjour')
        }

        if(message.content === 'Salut') {
            message.reply('Bonjour')
        }

        if(message.content === 'cool le bot') {
            message.channel.sendMessage("Merci, c'est XeCrafT et Azecko, mes créateurs qui m'ont développés ! :D")
        }

        if(message.content === 'genial le bot') {
            message.channel.sendMessage("Merci, c'est XeCrafT et Azecko, mes créateurs qui m'ont développés ! :D")
        }

        if(message.content === 'Zelkiax') {
            message.channel.sendMessage(zelkiaxRandomMessage[Math.floor(Math.random() * zelkiaxRandomMessage.length)]);
            message.delete();
        }
            if(message.content === 'Azecko') {
            message.channel.sendMessage("Azecko, il est grave bo ^^")
            message.delete();
        }
    
         if(message.content === 'azecko') {
            message.channel.sendMessage("Azecko, il est grave bo ^^")
            message.delete();
        }
    
          if(message.content === 'Swaki') {
            message.channel.sendMessage(swakiRandomMessage[Math.floor(Math.random() * swakiRandomMessage.length)]);
            message.delete();
        }
    
        if(message.content === 'Lounaaa') {
            message.channel.sendMessage(lounaaaRandomMessage[Math.floor(Math.random() * lounaaaRandomMessage.length)]);
            message.delete();
        }

        if(message.content === 'XeCrafT') {
            message.channel.sendMessage("On ne juge pas un développeur! :o")
        }
    
        if(message.content === 'mod') {
            message.channel.sendMessage("Zelki'Mod")
        }
    
            if(message.content === 'xecraft') {
            message.channel.sendMessage("On ne juge pas un développeur! :o")
        }
        
        if(message.content === 'sa va') {
            message.channel.sendMessage("Je vais toujours bien, je suis un robot!")
        }

        if(message.content === 'salut') {
            message.channel.sendMessage('Bonjour')
        }
        if(message.content === 'Qui est la') {
            message.channel.sendMessage("MOIII")
        }
        if(message.content === 'Bye') {
            message.channel.sendMessage('À Bientôt ! ^^')
        }
        if(message.content === 'bye') {
            message.channel.sendMessage('À Bientôt ! ^^')
        }
        if(message.content === 'wsh') {
            message.channel.sendMessage('wshh frr')
        }
    
    
    
    });

bot.on("guildMemberAdd", function(member) {
    member.guild.channels.find("name", "principal").sendMessage(member.toString() + " Bienvenue sur le discord de **Zelkiax** ! :white_check_mark: -  N'hésite pas à faire la commande z!help :D");
    member.addRole(member.guild.roles.find("name", "» ✔ Subs ✔ ●"));
    bot.user.setGame("Zelki'Bot | z!help | " + bot.users.size + " Membres !", "https://www.twitch.tv/zelkiax")
});

bot.on("guildMemberRemove", function(member) {
    bot.user.setGame("Zelki'Bot | z!help | " + bot.users.size + " Membres !", "https://www.twitch.tv/zelkiax")
});


bot.on("message", async function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split (" ");

    var args2 = message.content.split(" ").slice(1);

    var suffix = args2.join(" ");

    var reason = args2.slice(1).join(" ");
    
    var reasontimed = args2.slice(2).join(' ')

 //   var roleAnniv = member.guild.roles.find("name", "» 🍰 ANNIV' 🍰 ● ")

    var user = message.mentions.users.first();
    
    var guild = message.guild;
    
    var member = message.member;

    var roleJoueur= member.guild.roles.find("name", "membres")
    
    var roleMute = member.guild.roles.find("name", "»  ⌛ Zelki' Mute [S]")
    
    var modlog = member.guild.channels.find("name", "log")
    
    var user = message.mentions.users.first();
    
    const serverQueue = queue.get(message.guild.id);

    const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';


    switch (args[0].toLowerCase()) {
        case "membres":
            message.reply("Nous sommes " + (bot.users.size - 5) + " membres sur le discord !");
        break
        case "unmute":
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.sendMessage("Tu ne peux exécuter cette commande.");
        if(!modlog) return message.reply("Je ne trouve pas de channel log.");
        var member = message.mentions.members.first();
        if (message.mentions.users.size < 1) return message.reply("Hum, à quelle personne j'enleve le unmute?")
        member.removeRole(roleMute)
        message.channel.sendMessage(user.toString() + " a bien été unmute ✅")
        
        var embed = new Discord.RichEmbed()
        .addField("Commande :", "UNMUTE")
        .addField("Utilisateur :", user.username)
        .addField("Modérateur :", message.author.username)
        .addField("Heure:", message.channel.createdAt)
        .setColor("#01A9DB")
        .setAuthor(message.author.username, message.author.avatarURL)
        .setTimestamp()
        member.guild.channels.find("name", "log").sendEmbed(embed);
        break;
        case "mute":
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.sendMessage("Tu n'as pas la permission.");
        if(!modlog) return message.reply("Je ne trouve pas de channel mod-log.");  
        let time = parseInt(args2[1]) * 60000;
        if(!time) return message.reply("Tu as oublié le temps.")
        if (!reasontimed) return message.reply("Tu as oublié la raison.")
        var member = message.mentions.members.first();
        if (message.mentions.users.size < 1) return message.reply("Tu as oublié de préciser qui je dois Mute.")
        message.channel.sendMessage(member.toString() + " a bien été mute. ✅")
        member.addRole(roleMute)
        setTimeout(() => { member.removeRole(roleMute); }, time);

        var embed = new Discord.RichEmbed()
        .addField("Action :", "Mute")
        .addField("Utilisateur :", user.toString())
        .addField("Modérateur :", message.author.toString())
        .addField("Raison :", reasontimed)
        .addField("Temps :", args2[1] + " minute(s)")
        .setColor(0x808000)
        .setAuthor(message.author.username, message.author.avatarURL)
        .setTimestamp()
        member.guild.channels.find("name", "log").sendEmbed(embed);
        break;
            case "help":
            var embed = new Discord.RichEmbed()
            .addField("z!ban", "Cette commande permet de bannir un utilisateur ! Pour l'utiliser, faites z!ban @(utilisateur) (raison)")
                .addField("z!kick", "Cette commande permet de kick un utilisateur ! Pour l'utiliser, faites z!kick @(utilisateur) (raison)")
                .addField("z!purge", "Cette commande permet de supprimé des messages beaucoup plus rapidement ! Pour l'utiliser, faites z!purge (nombredemessages)")
                .addField("z!mute", "Cette commande permet de muté un utilisateur pendant un certain temps. Pour l'utiliser, faites z!timedmute @(utilisateur) (temps) (raison)")
                .addField("z!unmute", "Cette commande permet d'unmute un utilisateur. Pour l'utiliser, faites z!unmute @(utilisateur)")
                .addField("z!ping", "Grâce à cette commande, tu pourras savoir ton ping !")
                .addField("z!twitter", "Vous donne le twitter de Zelkiax !")
                .addField("z!instagram", "Vous donne le instagram de Zelkiax !")
                .addField("z!snapchat", "Vous donne le snapchat de Zelkiax !")
                .addField("z!play", "Jouer une musique ! N'oubliez pas le lien ! z!play <url youtube>")
                .addField("z!skip", "Skip une musique !")
                .addField("z!stop", "Stop la musique !")
                .setColor("#01A9DB")
                .setFooter("Idée de commande ? Proposer en MP!")
                .setAuthor(message.author.username, message.author.avatarURL)
                .setDescription("Voici les commandes du bot !")
                .setTimestamp()
                message.delete()
                message.channel.sendEmbed(embed)
            break;
            case "grade":
            var embed = new Discord.RichEmbed()
                .addField("» ❗️🔰 ADMIN' 🔰 ❗️ ●", "Grade réservé aux administraueur du discord.")
                .addField("» 🔧Grand(e)-Modo' 🔧️● ", "Personne qui se charge de garder le discord calme/respecteueux !")
                .addField("»  📛 Modow' 🔥 ● ", "Personne qui se charge de garder le discord calme/respecteueux !")
                .addField("» 🤖 Grand(e)-Dév' 🤖 ● ", "Personne qui à développé des trucs pour @ZELKIAX#6224 !")
                .addField("» 🎬 YouTubeur(euse) 🎥 ● ", "Grade résérvé aux youtubeurs ayant plus de **XXX** Abonnés ! :o")
                .addField("» 👌 Ami(e) 👌 ● ", "Grade résérvé aux amis du staff !")
                .addField("» ✔ Subs ✔ ● ", "Votre premier grade dès que vous rentrer sur ce discord ! | Abonnés de @ZELKIAX#6224 !")
                .addField("» 🎧BOT🎧 ●  🎥 ● ", "Grade résérvé aux bots du discord dont moi ! :p")
                .setColor("##01A9DB")
                .setDescription("Sur ce discord, il y a plein de grades ! Pour tout les goût ! Voici les grades les plus utilisé sur ce discord: ")
               .setFooter("Et voilà ! Des questions ? N'hésiter pas à mp Zelkiax :D")
                .setColor("#01A9DB")
                message.delete()
                message.channel.sendEmbed(embed);
            break;
                

        case "kick":
            if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.sendMessage("Tu ne peux exécuter cette commande. :x:");
            if(!modlog) return message.reply("Je ne trouve pas de channel log.");
            if (reason.length < 1) return message.reply("Tu as oublié la raison.");
            if (message.mentions.users.size < 1) return message.reply("Tu n'as pas mis son pseudo au complet ! :o")
            message.guild.member(user).kick();
            message.channel.send(user.toString() + " a bien été kick ✅")

            var embed = new Discord.RichEmbed()
            .addField("Commande :", "KICK")
            .addField("Utilisateur :", user.username)
            .addField("Modérateur :", message.author.username)
            .addField("Raison : ", reason)
            .addField("Heure:", message.channel.createdAt)
            .setColor("#01A9DB")
            .setAuthor(message.author.username, message.author.avatarURL)
            .setTimestamp()
            member.guild.channels.find("name", "log").sendEmbed(embed);
            bot.channels.get('373240336169828353').sendMessage(":white_check_mark: Le joueur " + user.username + " à bien été kick pour: " + reason);
       
            message.delete();
            break;
        case "ban":
            if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.sendMessage("Tu ne peux exécuter cette commande.");
            if(!modlog) return message.reply("Je ne trouve pas de channel log.");
            if (reason.length < 1) return message.reply("Tu as oublié la raison.");
            if (message.mentions.users.size < 1) return message.reply("Tu as oublié de préciser qui je dois bannir..")
            
            message.guild.ban(user, 2);
            message.channel.send(user.toString() + " a bien été banni ✅")

            var embed = new Discord.RichEmbed()
            .addField("Commande :", "BAN")
            .addField("Utilisateur :", user.username)
            .addField("Modérateur :", message.author.username)
            .addField("Raison : ", reason)
            .addField("Heure:", message.channel.createdAt)
            .setColor("#01A9DB")
            .setAuthor(message.author.username, message.author.avatarURL)
            .setTimestamp()
            member.guild.channels.find("name", "log").sendEmbed(embed);
            
            bot.channels.get('373240336169828353').sendMessage(":white_check_mark: Le joueur " + user.username + " à bien été kick pour: " + reason);
            
            message.delete();
            break;
        case "purge":
            if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.sendMessage("Tu ne peux exécuter cette commande.");
            var messagecount = parseInt(args2.join(" "));
            message.channel.fetchMessages({
                limit: messagecount
            }).then(messages => message.channel.bulkDelete(messagecount));
                        message.delete()
            var embed = new Discord.RichEmbed()
            .addField("Commande :", "PURGE")
            .addField("Modérateur :", message.author.username)
            .addField("Message supprimé", messagecount)
            .addField("Heure:", message.channel.createdAt)
            .setColor("#01A9DB")
            .setFooter("Ouf ! Sa as fait un bon ménage dans le channel ! ^^")
            message.delete()
            member.guild.channels.find("name", "log").sendEmbed(embed);
            break;;


       case "twitter":
       message.reply('Voici le compte twitter de Zelkiax: https://twitter.com/zelkiax_');
       message.delete();
       break;
       
       case "instagram":
       message.reply('Voici le compte instagram de Zelkiax: https://www.instagram.com/zelkiax/');
       message.delete();
       break
       
       case "snapchat":
       message.reply("Zelkiax est le compte snapchat de Zelkiax, il est grave bogosse en vrai. Je t'invite à aller voir! :D");
       message.delete();
       break
       
       case "mod":
       message.reply("Zelki'Mod");
       message.delete();
       break

            
       case "Zelkiax":
       message.channel.sendMessage(zelkiaxRandomMessage[Math.floor(Math.random() * zelkiaxRandomMessage.length)]);
       message.delete();
       break;   
       case "ping":
        message.channel.sendMessage("Pong! Tu as actuellement `" + bot.ping + " ms !` :D");
        message.delete();
        break; 
            
         case "word":
          message.reply('Le mot: ' + "**" + suffix + "**" + ' me fait penser à' + wordRandomMessage[Math.floor(Math.random() * wordRandomMessage.length)]);
          message.delete();
          break;
        case "play":
        const searchString = args.slice(1).join(' ')
                const voiceChannel = message.member.voiceChannel;
                if (!voiceChannel) return message.channel.send("[Zelki'Bot Musique] - Tu dois être dans un channel vocal.");
                const permissions = voiceChannel.permissionsFor(message.client.user)
                if (!permissions.has('CONNECT')) {
                    return message.channel.send("[Zelki'Bot Musique] - Je ne peux pas rejoindre ton channel vocal.")
                }
                if (!permissions.has('SPEAK')) {
                    return message.channel.send("[Zelki'Bot Musique] - Je n'ai pas les permissions pour parler dans ton channel vocal.")
                }

                try {
                    var video = await youtube.getVideo(url);
                } catch (error) {
                    try {
                        var videos = await youtube.searchVideos(searchString, 1);
                        var video = await youtube.getVideoByID(videos[0].id);
                    } catch (err) {
                        console.error(err)
                        return message.channel.send("[Zelki'Bot Musique] - Je ne parvient pas à trouver cela.");
                    }
                }
                console.log(video);
                const song = {
                    id: video.id,
                    title: video.title,
                    url: `https://www.youtube.com/watch?v=${video.id}`
                };
                if (!serverQueue) {
                    const queueConstruct = {
                        textChannel: message.channel,
                        voiceChannel: voiceChannel,
                        connection: null,
                        songs: [],
                        volume: 5,
                        playing: true
                    };
                    queue.set(message.guild.id, queueConstruct);

                    queueConstruct.songs.push(song);

                    try {
                        var connection = await voiceChannel.join();
                        queueConstruct.connection = connection;
                        play(message.guild, queueConstruct.songs[0]);
                    } catch (error) {
                        console.error(`[Zelki'Bot Musique] - Je ne peux pas rejoindre le channel vocal : ${error}`)
                        queue.delete(message.guild.id);
                        return message.channel.send(`[Zelki'Bot Musique] - Je ne peux pas rejoindre le channel vocal : ${error}`)
                    }
                } else {
                    serverQueue.songs.push(song);
                    console.log(serverQueue.songs);
                    return message.channel.send(`[Zelki'Bot Musique] - *${song.title}** a été ajouté à la queue !`)
                }
        break;
        case "stop":
            if (!message.member.voiceChannel) return message.channel.send("[Zelki'Bot Musique] - Tu dois être dans un channel vocal pour faire cette commande.")
            if (!serverQueue) return message.channel.send("[Zelki'Bot Musique] - Rien n'est entrain d'être jouer alors je ne peux pas stop de son(s) !")
            serverQueue.songs = [];
            message.member.voiceChannel.leave()
        break;
        case "skip":
        if (!message.member.voiceChannel) return message.channel.send("[Zelki'Bot Musique] - Tu dois être dans un channel vocal pour faire cette commande.")
                if (!serverQueue) return message.channel.send("[Zelki'Bot Musique] - Rien n'est entrain d'être jouer alors je ne peux pas skip de son !")
                serverQueue.connection.dispatcher.end()
        break;
        case "np":
        if (!serverQueue) return message.channel.send("[Zelki'Bot Musique] - Rien n'est entrain d'être jouer")
        return message.channel.send(`[Zelki'Bot Musique] - Entrain d'être joué : **${serverQueue.songs[0].title}**`);
        break;
        case "volume":
            if (!message.member.voiceChannel) return message.channel.send("[Zelki'Bot Musique] - Tu dois être dans un channel vocal pour faire cette commande.")
            if (!serverQueue) return message.channel.send("[Zelki'Bot Musique] - Rien n'est entrain d'être joué.")
            if (!args[1]) return message.channel.send("[Zelki'Bot Musique] - Le volume courent est : **" + serverQueue.volume + "**");
            serverQueue.volume = args[1];
            serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 5);
            return message.channel.send(`J'ai changer le volume pour : **${args[1]}**`)
        break;
        case "queue":
            if (!serverQueue) return message.channel.send("[Zelki'Bot Musique] - Rien n'est entrain d'être joué.");
            return message.channel.send(`
-_**Sons dans la queue:**_-
${serverQueue.songs.map(song => `**-** ${song.title}`).join('\n')}
**Maintenant joué:** ${serverQueue.songs[0].title}
        `);
        break;
        case "pause":
            if (serverQueue && serverQueue.playing) {
                serverQueue.playing = false;
                serverQueue.connection.dispatcher.pause();
                return message.channel.send("[Zelki'Bot Musique] - J'ai mis la musique en pause !")
            }
            return message.channel.send("[Zelki'Bot Musique] - Rien n'est entrain d'être jouer.")
        break;
        case "unpause":
            if (serverQueue && !serverQueue.playing) {
                serverQueue.playing = true;
                serverQueue.connection.dispatcher.resume();
                return message.channel.send("[Zelki'Bot Musique] - Musique relancée !")
            }
            return message.channel.send("[Zelki'Bot Musique] - Rien n'est entrain d'être jouer.")
        break;           
               
            
            
            
            /* ALIAS */
            
            
            
            
            
            
            message.channel.sendMessage("Commande invalide ^^ Fait z!help pour voir toutes les commandes disponibles !")
    }
});

function play(guild, song) {
    const serverQueue = queue.get(guild.id);

    if (!song) {
        serverQueue.voiceChannel.leave();
        queue.delete(guild.id);
        return;
    }

    const dispatcher = serverQueue.connection.playStream(YTDL(song.url))
    .on('end', () => {
        console.log("Le son est fini !");
        serverQueue.songs.shift();
        play(guild, serverQueue.songs[0]);
    })
    .on('error', error => console.error(error));
dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

serverQueue.textChannel.send("[Zelki'Bot Musique] - Musique joué : **" + song.title + "** !")
}


bot.login(process.env.TOKEN);
