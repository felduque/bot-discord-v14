const {
  SlashCommandBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
} = require("discord.js");
const { execute } = require("../../events/client/ready");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("animefenix")
    .setDescription("Te lleva a la pagina de anifenix"),
  async execute(interaction, client) {
    const button = new ButtonBuilder()
      .setCustomId("animefenix")
      .setLabel("Click Aqui")
      .setStyle(ButtonStyle.Primary);

    await interaction.reply({
      components: [new ActionRowBuilder().addComponents(button)],
    });
  },
};
