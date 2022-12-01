const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const fetch = require('node-fetch');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('dormir')
        .setDescription('hora de ir a dormir')
        .addUserOption((o) => o.setName("usuario").setDescription("Menciona un usuario")
    ),
    async execute(interaction, client) {
        let member = interaction.options.getMember("usuario");
        let url = 'https://api.daimon-bot.ga/anime/sfw/sleep';
        let respuesta = await fetch(url).then(response => response.json());
        let name = respuesta.name;
       let link = respuesta.url;
        if (!member){
         const embed1 = new EmbedBuilder()
         .setDescription(`<:right:1031757865247060058> **${interaction.user.tag}** se va a domir`)
         .setImage(link)
         .setFooter({text: `Anime: ${name}`})
         .setColor('FF0055')
         await interaction.reply({embeds: [embed1]});
        }else{
         const embed = new EmbedBuilder()
         .setDescription(`<:right:1031757865247060058> **${interaction.user.tag}** se va a domir con **${member.user.tag}**`)
         .setImage(link)
         .setFooter({text: `Anime: ${name}`})
         .setColor('FF0055')
         await interaction.reply({embeds: [embed]});
        }


    } 
}