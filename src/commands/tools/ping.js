const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Retornar mi ping actual'),
    async execute(interaction, client) {
      const message = await interaction.deferReply({
        fetchReply: true
      });

      const newMessage = `:part_alternation_mark:  **Latencia acutal:** ${client.ws.ping} \n :white_flower: **Ping:** ${message.createdTimestamp - interaction.createdTimestamp}`
      await interaction.editReply({
          content: newMessage
      });

    } 
}

