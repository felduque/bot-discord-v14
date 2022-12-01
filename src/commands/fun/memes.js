const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const hispamemes = require("hispamemes");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("meme")
    .setDescription("Meme Aleatorio "),
    async execute(interaction, client) {
      const meme = hispamemes.meme(); //Hacemos que se genere/cambie el meme de manera random

        const embed = new EmbedBuilder()
        .setTitle("Meme")
        .setColor("BLUE")
        .setImage(meme)

        await interaction.reply({embeds: [embed]});

    }
}