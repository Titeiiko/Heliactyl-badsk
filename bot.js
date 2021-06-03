const Discord = require('discord.js');
const client = new Discord.Client();

module.exports.load = async function(app, db) {
    client.on('ready', async () => {
      console.log("You are running Heliactyl 3.2.1!");
        
      let channel = client.channels.cache.get("810598810862485504")
      
      client.users.cache.forEach(user => {
		  if (db.get("package-" + user.id) == "booster" || db.get("package-" + user.id) == "2x booster") {
              channel.send(`<@${user.id}> has the ${db.get("package-" + user.id)} plan!`)
          }
      })
    })
    client.login("ODA0NDUwNTE4OTA5ODQ1NTk0.YBMg7Q.QHG4Tzw51EW1m0nIIlHtDSoqTss");
}
