const {
  SlashCommandBuilder,
  EmbedBuilder,
  AttachmentBuilder,
} = require("discord.js");
const { profileImage } = require("discord-arts");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("userinfo")
    .setDescription("Mira la informacion de algun usuario!!")
    .addUserOption((o) =>
      o.setName("usuario").setDescription("Menciona un usuario")
    ),
  async execute(interaction, client) {
    let member = interaction.options.getMember("usuario") || interaction.member;
    await interaction.deferReply();
    const bufferImg = await profileImage(member);
    const imgAttachment = new AttachmentBuilder(bufferImg, "profile.png");

    const embed = new EmbedBuilder()
      .setAuthor({
        name: `${member.user.tag}`,
        iconURL: `${member.user.displayAvatarURL({ dynamic: true })}`,
      })
      .setImage("attachment://profile.png")
      .addFields(
        { name: "ID:", value: `${member.user.id}`, inline: true },
        {
          name: "Apodo:",
          value: `${member.nickname || "Ninguno"}`,
          inline: true,
        },
        {
          name: "Fecha de creacion de cuenta:",
          value: `<t:${parseInt(member.user.createdTimestamp / 1000)}:f>`,
          inline: false,
        },
        {
          name: "Miembro de este servidor desde",
          value: `<t:${parseInt(member.joinedTimestamp / 1000)}:f>`,
          inline: false,
        }
      )
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 2048 }))
      .setColor("Random");
    await interaction.followUp({ embeds: [embed], files: [imgAttachment] });
  },
};
