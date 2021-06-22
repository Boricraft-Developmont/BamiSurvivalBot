const Discord = require("discord.js")




module.exports = function (msg, ab, pc, m, args) {
    const votes = new Discord.MessageEmbed()
    .setColor('#4287f5')
    .setTitle('Votes')
    .addFields(
        { name: 'Votes voor CookieRookie en Boricraft', value: ab },
        { name: 'Votes voor PaniniNotFound en Crazy_Frog2', value: pc },
        { name: 'Votes voor MasterMaks0817', value: m },
    )
    .setTimestamp()
    .setFooter('Votes opgehaald om');
    
    msg.channel.send(votes)
}