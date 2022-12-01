const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const { execute } = require("../../events/client/ready");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("botinfo")
    .setDescription("Datos del bot"),
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
      .setTitle(`Hola soy ${client.user.tag}`)
      .setDescription(
        `Fui creado el 15 de Octubre del 2022  gracias a las ideas conjuntas de AnimeFenix esperamos que el proyecto siga creciendo a tal manera que cada vez la comunidad se vea mas implicada en llevar a cabo este proyecto conjunto`
      )
      .setColor(0x0099ff)
      .setImage(client.user.displayAvatarURL())
      .setThumbnail(client.user.displayAvatarURL())
      .addFields(
        { name: "**Mis Desarrolladores**", value: "Kmzekett#7817" },
        { name: "\u200B", value: "\u200B" },
        { name: "Pagina de Anime", value: "Animefenix.com", inline: true },
        { name: "Pagina de Noticias", value: "ytlandia.org", inline: true }
      )
      .addFields({ name: "Pagina Hentai", value: "hentaila.com", inline: true })
      .setTimestamp()
      .setFooter({ text: "Si quieres colaborar en el desarrollo del bot: Kmzekett#7817",
    });
    await interaction.reply({
      embeds: [embed],
    });
  },
};
