const { AttachmentBuilder, SlashCommandBuilder } = require("discord.js");
const { profileImage } = require("discord-arts");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("getbanner")
    .setDescription("Crea un banner"),
  async execute(interaction, client) {
    if (interaction.commandName == "getbanner") {
      const discordUser =interaction.options.getUser("user") || interaction.user;
      await interaction.deferReply();
      const bufferImg = await profileImage(discordUser);
      const imgAttachment = new AttachmentBuilder(bufferImg, "profile.png");

      await interaction.followUp({ files: [imgAttachment] });
    }

  },
};
