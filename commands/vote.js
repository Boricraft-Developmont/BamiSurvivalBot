

module.exports = function (msg, args) {
    console.log(msg.author.id)
    if (msg.author.id == "401649984677871619"){
    msg.channel.send("@everyone Stuur mij een dm om te kiezen voor president.\nVoorbeeld:\nBoricraft")
    } else {
        msg.channel.send("Jij hebt geen rechten om deze command uit te voeren")
    }
}