console.log("Enabling Bot");

const Discord = require('discord.js');
const client = new Discord.Client();
const fetch = require("node-fetch");
require("dotenv").config();

client.on("ready", readyDiscord);
function readyDiscord() {
    console.log("Bot ready");
 }

const commandHandler = require("./commands");

client.on("message", commandHandler);

client.login(process.env.TOKEN);