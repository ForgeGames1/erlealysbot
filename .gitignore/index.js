const Discord = require("discord.js");

const TOKEN = "MzYzNjI0MzQ5MDYxNjExNTIw.DLD7Kg.rTpTI-SHkNbQdxAPIv7Z8O9gH94";
const PREFIX = "*";

var client = new Discord.Client();

var bot = new Discord.Client();

var servers = {};

bot.on("ready", function () {
    bot.user.setGame('Erlealys - *help')
    console.log("Connecté");
});

bot.on("guildMemberAdd", function(member) {
    member.guild.channels.find("name", "bienvenue").sendMessage(member.toString() + " Bienvenue sur le discord Erlealys ! Tu veux plus d'info ? va dans ce channel: #annonces");
    member.addRole(member.guild.roles.find("name", "Membres"));
});

bot.on("guildMemberRemove", function(member) {
    member.guild.channels.find("name", "bienvenue").sendMessage(member.toString() + "A quitté le discord ! :(");
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split (" ");

    var args2 = message.content.split(" ").slice(1);

    var suffix = args2.join(" ");

    var reason = args.slice(1).join(" ");

    var user = message.mentions.users.first();
    
    var guild = message.guild;
    
    var member = message.member;

    var roleMembre= member.guild.roles.find("name", "Membres")
    
    var roleMute = member.guild.roles.find("name", "Mute")
    
    var modlog = member.guild.channels.find("name", "mod-log")

    switch (args[0].toLowerCase()) {
        case "unmute":
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.sendMessage("Tu ne peux exécuter cette commande.");
        if(!modlog) return message.reply("Je ne trouve pas de channel mod-log.");
        var member = message.mentions.members.first();
        if (message.mentions.users.size < 1) return message.reply("Hum, à quelle personne j'enleve le unmute?")
        member.removeRole(rolemute)
        message.channel.sendMessage("@" + user.username + " a bien été unmute")
        
        var embed = new Discord.RichEmbed()
            .addField("Commande :", "UNMUTE")
        .addField("Utilisateur :", user.username)
        .addField("Modérateur :", message.author.username)
        .addField("Heure:", message.channel.createdAt)
        .setColor("#FFFF00")
        .setAuthor(message.author.username, message.author.avatarURL)
        .setTimestamp()
        member.guild.channels.find("name", "mod-log").sendEmbed(embed);
        break;
        case "mute":
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.sendMessage("Tu ne peux exécuter cette commande.");
        if(!modlog) return message.reply("Je ne trouve pas de channel mod-log.");
        var member = message.mentions.members.first();
        if (message.mentions.users.size < 1) return message.reply("Hum, à quelle personne je met le mute ?")
        member.addRole(roleMute)
        message.channel.sendMessage("@" + user.username + " a bien été mute.")
        
        var embed = new Discord.RichEmbed()
            .addField("Commande :", "MUTE")
        .addField("Utilisateur :", user.username)
        .addField("Modérateur :", message.author.username)
        .addField("Heure:", message.channel.createdAt)
        .setColor("#FFFF00")
        .setAuthor(message.author.username, message.author.avatarURL)
        .setTimestamp()
        member.guild.channels.find("name", "mod-log").sendEmbed(embed);
        break;
            
            case "help":
            var embed = new Discord.RichEmbed()
            .addField("*ban", "Cette commande permet de bannir un utilisateur ! Pour l'utiliser, faites *ban @(utilisateur)")
                .addField("*kick", "Cette commande permet de kick un utilisateur ! Pour l'utiliser, faites *kick @(utilisateur)")
                .addField("*purge", "Cette commande permet de supprimé des messages beaucoup plus rapidement ! Pour l'utiliser, faites *purge (nombredemessages)")
                .addField("*mute", "Cette commande permet de mute un utilisateur. Pour l'utiliser, faites *mute @(utilisateur)")
                .addField("*unmute", "Cette commande permet d'unmute un utilisateur. Pour l'utiliser, faites *unmute @(utilisateur)")
                .addField("*ping", "Grâce à cette commande, tu pourras savoir ton ping !")
                .addField("*launcher", "Vous donne le lien du téléchargement du launcher !")
                .addField("*sortie", "Vous donne la sortie du jeu !")
                .addField("*twitter", "Vous donne le twitter de Erléalys !")
                .addField("*facebook", "Vous donne la page facebook de Erléalys !")
                .setColor("#FFFF00")
                .setFooter("Idée de commande ? Proposer en MP!")
                .setAuthor(message.author.username, message.author.avatarURL)
                .setDescription("Voici les commandes du bot !")
                .setTimestamp()
                message.delete()
                message.channel.sendEmbed(embed);
            break;
            case "grade":
            var embed = new Discord.RichEmbed()
                .addField("Fondateur", "Grade pour les fondateurs de Erléalys")
                .addField("Administrateur", "Personne de confiance et/ou ami irl de confiance.")
                .addField("Modérateur+", "Modérateur qui as **toute** les permissions du serveurs. Son rôle est le même que @Modérateur")
                .addField("Modérateur", "Modérateur qui se charge de surveiller vos propos dans le tchat ! -- RC[OFF]")
                .addField("Graphiste", "Graphiste ayant contribué à Erléalys")
                .addField("Le Sang", "Grade réservé aux meilleurs ! :D")
                .addField("FriendIRL", "Amis **IRL** de XeCrafT")
                .addField("Friend", "Amis de XeCrafT dans le monde des jeux vidéos ! **O_o**")
                .addField("Youtuber", "Youtubeur possédant 500 abonnés ou plus.")
                .addField("Membre", "La plus part possède ce grade donc inutile de l'expliquer.")
                .addField("Mute", "Si un @Modérateur ou un @Modérateur+ vous surprends en train de dire des propos déplacé, ce grade vous serai assigné.")
                .setColor("##FFFF00")
                .setDescription("Voici les grades disponible sur ce discord:")
                .setColor("#FFFF00")
                message.delete()
                if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("Tu n'as pas la permission.");
            message.channel.sendEmbed(embed);
            break;
        case "regles":
            var embed = new Discord.RichEmbed()
                .addField("Insulte/Menace", "Grade mute 10min. Si l'utilisateur continue, ce sera un kick.")
                .addField("Menace Irl", "Ban **permanant**.")
                .addField("Publicité hors du channel #pub", "Ban **permanant**.")
                .addField("Tag avec un @everyone", "Grade mute 12h. Si l'utilisateur continue, ce sera un ban **permamant**.")
                .addField("Parler d'autre jeu sur les salons textuels", "Grade mute 5h. Si l'utilisateur continue, ce sera un **BAN**")
                .setAuthor(message.author.username, message.author.avatarURL)
                .setColor("#FFFF00")
                .setFooter("Respecter les règles est importants pour respecter les autres. Vous voulez un ajouts ? Demandez le moi en privée !")
                .setTimestamp()
                .setDescription("Règles de ce discord.")
                message.delete()
                if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("Tu ne peux exécuter cette commande.");
            message.channel.sendEmbed(embed);
            break;
        case "say":
            if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("Tu ne peux exécuter cette commande.");
            message.channel.sendMessage(suffix)
            console.log(suffix)
            break;
        case "kick":
            if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.sendMessage("Tu ne peux exécuter cette commande.");
            if(!modlog) return message.reply("Je ne trouve pas de channel mod-log.");
            if (reason.length < 1) return message.reply("Tu as oublié la raison.");
            if (message.mentions.users.size < 1) return message.reply("Tu as oublié de préciser qui je dois kick.")
            message.guild.member(user).kick();

            var embed = new Discord.RichEmbed()
            .addField("Commande :", "KICK")
            .addField("Utilisateur :", user.username)
            .addField("Modérateur :", message.author.username)
             .addField("Heure:", message.channel.createdAt)
            .setColor("#FFFF00")
            .setAuthor(message.author.username, message.author.avatarURL)
            .setTimestamp()
            member.guild.channels.find("name", "mod-log").sendEmbed(embed);
            message.react(":poop:")
            break;
        case "ban":
            if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.sendMessage("Tu ne peux exécuter cette commande.");
            if(!modlog) return message.reply("Je ne trouve pas de channel mod-log.");
            if (reason.length < 1) return message.reply("Tu as oublié la raison.");
            if (message.mentions.users.size < 1) return message.reply("Tu as oublié de préciser qui je dois bannir.")
            message.guild.ban(user, 2);

            var embed = new Discord.RichEmbed()
            .addField("Commande :", "BAN")
            .addField("Utilisateur :", user.username)
            .addField("Modérateur :", message.author.username)
             .addField("Heure:", message.channel.createdAt)
            .setColor("#FFFF00")
            .setAuthor(message.author.username, message.author.avatarURL)
            .setTimestamp()
            member.guild.channels.find("name", "mod-log").sendEmbed(embed);
            break;
        case "purge":
            if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.sendMessage("Tu ne peux exécuter cette commande.");
            var messagecount = parseInt(args2.join(" "));
            message.channel.fetchMessages({
                limit: messagecount
            }).then(messages => message.channel.bulkDelete(messagecount));

            var embed = new Discord.RichEmbed()
            .addField("Commande :", "PURGE")
            .addField("Modérateur :", message.author.username)
            .addField("Message supprimé", messagecount)
            .addField("Heure:", message.channel.createdAt)
            .setColor("#FFFF00")
            .setFooter("Ouf ! Sa as fait un bon ménage dans le channel ! ^^")
            message.delete()
            member.guild.channels.find("name", "mod-log").sendEmbed(embed);
            break;
            
                   case "site":
       message.reply('Voici le site: http://erlealys.net');
       break;

       case "info":

       break;

       case "facebook":
       message.reply('Voici la page facebook: https://www.facebook.com/erlealys/');
       break;

       case "twitter":
       message.reply('Voici le compte twitter du jeu: https://twitter.com/erlealys');
       break;

       case "sortie":
       message.reply('le jeu devrais sortir fin 2017, début 2018 !');
       break;

       case "launcher":
       message.reply('le launcher du jeu a une maintenance. Veuillez réessayer plus tard.');
       break;
            
            default:
            message.channel.sendMessage("Commande invalide ^^")
    }
});

bot.login("MzQ0MDk0NDM4NzY4OTAyMTQ0.DL0_CA.6O4J_Ew34bASxJNHJ9KR8xNbbxU");
