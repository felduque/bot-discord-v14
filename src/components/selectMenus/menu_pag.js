module.exports = {
  data: {
    name: `menu-pag`,
  },
  async execute(interaction, client) {
    await interaction.reply({
      content: `**Esperamos que disfrutes de la pagina** \n \n :link:  ${interaction.values[0]}`,
    });
  },
};
