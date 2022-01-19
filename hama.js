const Discord = require("discord.js");
const Hamaa = new Discord.Client();
Hamaa.on("ready", () => {
  console.log(`Online In Servers`);
  let statuses = [`SHTEK BO STREAMING AKA BNUSA`,];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    Hamaa.user.setActivity(STREAMING, {      
    type: "STREAMING", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
Hamaa.on("ready", () => {
    var join = Hamaa.channels.get(""); ///id Voice
    if (join) join.join();
  });
Hamaa.login(""); ///Token
