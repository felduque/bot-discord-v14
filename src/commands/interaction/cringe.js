const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const fetch = require('node-fetch');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('cringe')
        .setDescription('Demuestra tu cringe')
        .addUserOption((o) => o.setName("usuario").setDescription("Menciona un usuario")
    ),
    async execute(interaction, client) {
        let member = interaction.options.getMember("usuario");
        let url = 'https://api.waifu.pics/sfw/cringe';
        let respuesta = await fetch(url).then(response => response.json());
       let link = respuesta.url;
        if (!member){
         const embed1 = new EmbedBuilder()
         .setDescription(`<:right:1031757865247060058> **${interaction.user.tag}** tiene Cringe`)
         .setImage(link)
         .setColor('FF0055')
         await interaction.reply({embeds: [embed1]});
        }else{
         const embed = new EmbedBuilder()
         .setDescription(`<:right:1031757865247060058> **${interaction.user.tag}** le da cringe **${member.user.tag}**`)
         .setImage(link)
         .setColor('FF0055')
         await interaction.reply({embeds: [embed]});
        }


    } 
}