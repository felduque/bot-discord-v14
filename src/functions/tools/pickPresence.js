const { ActivityType } = require('discord.js')
 
module.exports = (client) => {
  client.pickPresence = async () => {
    const options = [
      {
        type: ActivityType.Watching,
        text: 'animefenix.com',
        status: 'online'
      },
      {
        type: ActivityType.Watching,
        text: 'comandos /ayuda',
        status: 'online'
      },
      {
        type: ActivityType.Streaming,
        text: 'twitch.tv/untaltioyt',
        status: 'dnd'
      }
    ];
    const option = Math.floor(Math.random() * options.length);

    await client.user
    .setPresence({
      activities: [
        {
        name: options[option].text,
        type: options[option].type,
      },
    ],
      status: options[option].status,
    })
  }
}