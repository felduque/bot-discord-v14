const {
  SlashCommandBuilder,
  SelectMenuBuilder,
  ActionRowBuilder,
  SelectMenuOptionBuilder,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("paginas")
    .setDescription("Retorna una lista con todas las paginas del servidor"),
  async execute(interaction, client) {
    const menu = new SelectMenuBuilder()
      .setCustomId(`menu-pag`)
      .setMinValues(1)
      .setMaxValues(1)
      .setPlaceholder('Click Aqui')
      .setOptions(
        new SelectMenuOptionBuilder({
          label: `AnimeFenix`,
          value: `https://animefenix.com/`,
        }),
        new SelectMenuOptionBuilder({
          label: `Ytlandia`,
          value: `https://ytlandia.org/`,
        }),
        new SelectMenuOptionBuilder({
          label: `Hentaila +18`,
          value: `https://hentaila.com`,
        })
      );
      
    await interaction.reply({
      content: `\n :movie_camera:| **Animefenix**: Es hora de seguir tus animes favoritos totalmente **Gratis** \n\n :newspaper:| **Ytlandia** Mantente al tanto de las noticias mas importantes del anime \n\n :underage:| **Hentaila** Visita el rincon mas oscuro del anime :eyes:  bajo tu responsabilidad\n\n`,
      components: [new ActionRowBuilder().addComponents(menu)],
    });
  },
};
