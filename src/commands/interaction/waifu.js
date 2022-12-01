const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const fetch = require('node-fetch');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('waifu')
        .setDescription('Obten una hermosa waifu aleatoria'),
    async execute(interaction, client) {
        let url = 'https://api.waifu.pics/sfw/waifu';
        let respuesta = await fetch(url).then(response => response.json());
        let link = respuesta.url;


         const embed1 = new EmbedBuilder()
         .setDescription(`<:right:1031757865247060058> **${interaction.user.tag}** Aqui tienes tu hermosa Waifu`)
         .setImage(link)
         .setColor('FF0055')
         await interaction.reply({embeds: [embed1]});
    } 
}