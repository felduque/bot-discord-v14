const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("8ball")
    .setDescription("Preguntale algo!!")
    .addStringOption((a) => a.setName("texto").setDescription("Haz tu pregunta").setRequired(true)),
    async execute(interaction, client) {
      let pregunta = interaction.options.getString("texto");

      let respuestas = [
        'Si',
        'No',
        'Tal vez',
        'Podria ser',
        'Definitivamente Si',
        'Un rotundo No',
        'Ni puta idea',
        'Sabra tu puta madre',
        'Busca en google',
        'Lo unico que se es que eres Peruano'
      ]

      const sort = respuestas[Math.floor(Math.random() * respuestas.length)]

      const embed = new EmbedBuilder()
        .setTitle('TRAIGO MI SABIDURIA PARA ILUMINARTE')
        .setColor('#00FFAC')
        .setDescription(`**Pregunta:** <:pixel_symbol_question:1032028037035851828> ${pregunta} \n\n  **Respuesta:**<:right:1031757865247060058>  ${sort}`)
      
      await interaction.reply({embeds: [embed]});

    }
}