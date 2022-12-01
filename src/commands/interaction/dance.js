const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const fetch = require('node-fetch');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('bailar')
        .setDescription('Hora de bailar')
        .addUserOption((o) => o.setName("usuario").setDescription("Menciona un usuario")
    ),
    async execute(interaction, client) {
        let member = interaction.options.getMember("usuario");
        let url = 'https://api.daimon-bot.ga/anime/sfw/dance';
        let respuesta = await fetch(url).then(response => response.json());
        let name = respuesta.name;
       let link = respuesta.url;
        if (!member){
         const embed1 = new EmbedBuilder()
         .setDescription(`<:right:1031757865247060058> **${interaction.user.tag}** esta bailando Aweboo`)
         .setImage(link)
         .setFooter({text: `Anime: ${name}`})
         .setColor('FF0055')
         await interaction.reply({embeds: [embed1]});
        }else{
         const embed = new EmbedBuilder()
         .setDescription(`<:right:1031757865247060058> **${interaction.user.tag}** hace un baile sexy a **${member.user.tag}**`)
         .setImage(link)
         .setFooter({text: `Anime: ${name}`})
         .setColor('FF0055')
         await interaction.reply({embeds: [embed]});
        }


    } 
}