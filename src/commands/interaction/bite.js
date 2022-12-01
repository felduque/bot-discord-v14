const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const fetch = require('node-fetch');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('mordisco')
        .setDescription('Muerde a alguien')
        .addUserOption((o) => o.setName("usuario").setDescription("Menciona un usuario")
    ),
    async execute(interaction, client) {
        let member = interaction.options.getMember("usuario");
        let url = 'https://api.daimon-bot.ga/anime/sfw/bite';
        let respuesta = await fetch(url).then(response => response.json());
        let name = respuesta.name;
       let link = respuesta.url;
        if (!member){
         const embed1 = new EmbedBuilder()
         .setDescription(`<:right:1031757865247060058> **${interaction.user.tag}** esta mordelon`)
         .setImage(link)
         .setFooter({text: `Anime: ${name}`})
         .setColor('FF0055')
         await interaction.reply({embeds: [embed1]});
        }else{
         const embed = new EmbedBuilder()
         .setDescription(`<:right:1031757865247060058> **${interaction.user.tag}** le pego un mordisco a **${member.user.tag}**`)
         .setImage(link)
         .setFooter({text: `Anime: ${name}`})
         .setColor('FF0055')
         await interaction.reply({embeds: [embed]});
        }


    } 
}

// const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
// const fetch = require('node-fetch');


// module.exports = {
//     data: new SlashCommandBuilder()
//         .setName('hentaila')
//         .setDescription('Reclama Baka Baka'),
//     async execute(interaction, client) {
//          fetch('https://www3.hentaila.com/api/episodes?auth=XiYGysnFPRjxG9H6IWMzBgK32abTorrF', { 
//             method: 'GET'
//           })
//           .then(function(response) { return response.json(); })
//           .then(function(json) {
//             console.log(json['data'][0].title)
//           });
         
        
//       const embed1 = new EmbedBuilder()
//       .setTitle(` ${json['data'][0].title}`)
//       .setDescription(`:right: Pronto estara listo`)
//       .setColor('FF0055')
//       await interaction.reply({embeds: [embed1]});
     


//     } 
// }