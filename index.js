const { SlashRegister } = require("justhanz-plugin")
const { Client } = require('discord.js');
require("dotenv").config(); // dot env install npm i dotenv then make file .env and write token={yourbottokenwithourBracket}

const client = new Client({
    intents: [32767],
    partials: ["USER", "MESSAGE", "CHANNEL", "REACTION", "GUILD_MEMBER"],

});
const han = new SlashRegister({
    client,
    GuildID: "818834485474492426", // GuildID,RoleID,ChannelID value should be snowflake
    RoleID: "832166572596527140",
    ChannelID: "867789411395043368", //all of the above  are required cant be empty
    //NameTag: "[CIVIL]", // optional this addition will put a tag next to the target name
    Message: "{member} Just Registered As {RoleName} in {GuildName}", //this message logs so default are {member} Just Registered As {isRegistered} use console.log(han.MessageSyntax) to view all available syntax
    includeUnderline: false, // if it true member nickname should be include "_" (underline) when they request default are false you can remove it tho
    Announce: false, // message will appear as ephemeral when the value are false conversely the other way around default are false
    MinNameLength: 5, //default of min max name length are  higher than 0  and lower than  32
    MaxNameLength: 32,
})

han.listener()
client.on("ready", async () => {
    console.log(client.user.username + " Ready ")
    han.slashDeploy()

});
console.log(han.credit) // this for credit remove/ comment this if you dont want
console.log(han.MessageSyntax) // to view all Message Syntax that available this optional you can remove it tho
client.login(process.env.token)//use env to make your token secure