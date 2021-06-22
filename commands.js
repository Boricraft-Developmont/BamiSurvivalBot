const vote = require('./commands/vote.js');
const showvotes = require('./commands/showresults.js');

const commands = { vote, showvotes };
let voted = []
let ab = 0;
let pc = 0;
let m = 0;



module.exports = async function (msg) {
    if (msg.channel.type  === "dm" && msg.author.bot === false){
        let votename = msg.channel.lastMessage.content;
        if (voted.includes(msg.author.id)) { return msg.channel.send("Jij hebt al gevote"); }
        switch(votename){
            case "Boricraft":
                voted.push(msg.author.id);
                console.log("vote accepted from " + msg.author.username);
                console.log("for " + votename);
                msg.channel.send("Uw vote is Geaccepteerd");
                ab = ab + 1;
            break;
            case "CookieRookie":
                voted.push(msg.author.id);
                console.log("vote accepted from " + msg.author.username);
                console.log("for " + votename);
                msg.channel.send("Uw vote is Geaccepteerd");
                ab = ab + 1;
            break;
            case "PaniniNotFound":
                voted.push(msg.author.id);
                console.log("vote accepted from " + msg.author.username);
                console.log("for " + votename);
                msg.channel.send("Uw vote is Geaccepteerd");
                pc = pc + 1;
            break;
            case "Crazy_Frog2":
                voted.push(msg.author.id);
                console.log("vote accepted from " + msg.author.username);
                console.log("for " + votename);
                msg.channel.send("Uw vote is Geaccepteerd");
                pc = pc + 1;
            break;
            case "MasterMaks0817":
                voted.push(msg.author.id);
                console.log("vote accepted from " + msg.author.username);
                console.log("for " + votename);
                msg.channel.send("Uw vote is Geaccepteerd");
                m = m + 1;
            break;
            default:
                msg.channel.send("Dit is geen kandidaat. Je kunt kiezen uit\nBoricraft\nCookieRookie\nPaniniNotFound\nCrazy_Frog2\nMasterMaks0817");

        }
    }
    let tokens = msg.content.split(" ");
    let command = tokens.shift();
    if (command.charAt(0) === '&'){
        command = command.substring(1);
        commands[command](msg, ab, pc, m, tokens);
    }
}