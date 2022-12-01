module.exports = {
  data: {
    name: `animefenix`
  },
  async execute(interaction, client ){
    await interaction.reply({
      content: `https://animefenix.com/`
    });
  }
}