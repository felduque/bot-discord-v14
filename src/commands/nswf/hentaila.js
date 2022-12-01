const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const fetch = require('node-fetch');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('hentaila')
        .setDescription('Ultimos Capitulos de Hentaila'),
    async execute(interaction, client) {
         let api = await fetch(''); //Si deseas el api de hentaila habla con el propietario :C
         let json = await api.json();

        const embed1 = new EmbedBuilder()
        .setTitle(`<:bell_icon:1031758574336098354> **Ultimos Capitulos en los siguientes Hentai**`)
        .setDescription(`
         1 °**${json['data'][1].title} **
         <:Discord_Link:1040665314960081007> https://hentaila.com/ver/${json['data'][1].slug}
         ━━━━━━━༺༻━━━━━━━━━━━━━━༺༻━━━━━━━
         2 °**${json['data'][2].title}** 
         <:Discord_Link:1040665314960081007> https://hentaila.com/ver/${json['data'][2].slug}
         ━━━━━━━༺༻━━━━━━━━━━━━━━༺༻━━━━━━━
         3 °**${json['data'][3].title} **
         <:Discord_Link:1040665314960081007> https://hentaila.com/ver/${json['data'][3].slug}
         ━━━━━━━༺༻━━━━━━━━━━━━━━༺༻━━━━━━━
         4 °**${json['data'][4].title} **
         <:Discord_Link:1040665314960081007> https://hentaila.com/ver/${json['data'][4].slug}
         ━━━━━━━༺༻━━━━━━━━━━━━━━༺༻━━━━━━━
         5 °**${json['data'][5].title} **
         <:Discord_Link:1040665314960081007> https://hentaila.com/ver/${json['data'][5].slug}
         ━━━━━━━༺༻━━━━━━━━━━━━━━༺༻━━━━━━━
         6 °**${json['data'][6].title} **
         <:Discord_Link:1040665314960081007> https://hentaila.com/ver/${json['data'][6].slug}
         ━━━━━━━༺༻━━━━━━━━━━━━━━༺༻━━━━━━━
         7 °**${json['data'][7].title} **
         <:Discord_Link:1040665314960081007> https://hentaila.com/ver/${json['data'][7].slug}
         ━━━━━━━༺༻━━━━━━━━━━━━━━༺༻━━━━━━━
         8 °**${json['data'][8].title} **
         <:Discord_Link:1040665314960081007> https://hentaila.com/ver/${json['data'][8].slug}
         ━━━━━━━༺༻━━━━━━━━━━━━━━༺༻━━━━━━━
         9 °**${json['data'][9].title} **
         <:Discord_Link:1040665314960081007> https://hentaila.com/ver/${json['data'][9].slug}
         ━━━━━━━༺༻━━━━━━━━━━━━━━༺༻━━━━━━━
         10 °**${json['data'][10].title} **
         <:Discord_Link:1040665314960081007> https://hentaila.com/ver/${json['data'][10].slug}
         ━━━━━━━༺༻━━━━━━━━━━━━━━༺༻━━━━━━━
         11 °**${json['data'][11].title} **
         <:Discord_Link:1040665314960081007> https://hentaila.com/ver/${json['data'][11].slug}
         ━━━━━━━༺༻━━━━━━━━━━━━━━༺༻━━━━━━━
         12 °**${json['data'][12].title} **
         <:Discord_Link:1040665314960081007> https://hentaila.com/ver/${json['data'][12].slug}
         ━━━━━━━༺༻━━━━━━━━━━━━━━༺༻━━━━━━━
         13 °**${json['data'][13].title} **
         <:Discord_Link:1040665314960081007> https://hentaila.com/ver/${json['data'][13].slug} `)
        .setColor('FF0055')
        await interaction.reply({embeds: [embed1]});
    } 
}