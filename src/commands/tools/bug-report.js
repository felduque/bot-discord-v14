const {
  SlashCommandBuilder,
  EmbedBuilder,
  PermissionFlagsBits,
  ButtonBuilder,
  ButtonStyle,
  ActionRowBuilder,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("report-bug")
    .setDescription("reporta un bug del bot")
    .addStringOption((a) =>a.setName("comando").setDescription("Que comando presenta problemas.").setRequired(true)) //ponemos las opciones
    .addStringOption((a) => a.setName("bug").setDescription("Describe el problema").setRequired(true)),
  async execute(interaction, client) {
    const comando = interaction.options.getString("comando"); //definimos las opciones
    const bug = interaction.options.getString("bug");

    const solucionado = new ButtonBuilder() //definimos los botones
      .setCustomId("solucionado")
      .setStyle(ButtonStyle.Success)
      .setLabel("Solucionado")
      .setEmoji("🟢");

    const nosolucionado = new ButtonBuilder()
      .setCustomId("nosolucionado")
      .setStyle(ButtonStyle.Danger)
      .setLabel("Sin Solucionar")
      .setEmoji("⛔");

    const borrarreport = new ButtonBuilder()
      .setCustomId("borrarreport")
      .setStyle(ButtonStyle.Danger)
      .setLabel("Eliminado")
      .setEmoji("🗑️");

    const report1 = new ButtonBuilder()
      .setCustomId("report1")
      .setLabel(`Reporte hecho por | ${interaction.user.tag}`)
      .setStyle(ButtonStyle.Primary)
      .setDisabled(true);

    const boton = new ActionRowBuilder().addComponents(
      solucionado,
      nosolucionado,
      borrarreport,
      report1
    ); //ponemos los botones

    const embed1 = new EmbedBuilder() //definimos el embed prencipal
      .setTitle("nuevo reporte") //ponemos el mensaje principal
      .addFields(
        { name: "<:bell_icon:1031758574336098354> Reporte de:", value: `\`${interaction.user.tag}\`` },
        { name: "La ID del usuario es", value: `\`${interaction.user.id}\`` }, 
        { name: "Comando Reportado:", value: `\`${comando}\`` },
        { name: "Descripcion del reporte:", value: `\`${bug}\`` },
        { name: "Servidor donde se origino el reporte", value: `\`${interaction.guild.name}\`` },
        {
          name: "La ID del servidor es:",
          value: `\`${interaction.guild.id}\``,
        },
        {
          name: "Hora del reporte",
          value: `<t:${Math.round(Date.now() / 1000)}:t>`,
        }
      )
      .setColor("Random")
      .setFooter({
        text: `Reporte de ${interaction.user.tag}`,
        iconURL: interaction.user.displayAvatarURL({ dynamic: true }),
      })
      .setTimestamp()
      .setThumbnail(interaction.user.displayAvatarURL({ dynamic: true }));

    const embed2 = new EmbedBuilder() //ponemos los embeds para los botones
      .setTitle(`<:Enemy:1031759925233340467> | Reporte No Solucionado`)
      .setDescription(
        `
          **ID del usuario:**  idUser: ${interaction.user.id} \n\n
          **Nombre** ${interaction.user.tag} \n\n
          **Comando Reportado** ${comando} \n\n
          **Informacion del reporte** ${bug} \n\n
          `
      )
      .setColor("Red");
    const embed3 = new EmbedBuilder()
      .setTitle(`<:Player:1031759958586433599> | Reporte Solucionado`)
      .setDescription(
        `
          **ID del usuario:**  idUser: ${interaction.user.id} \n\n
          **Nombre** ${interaction.user.tag} \n\n
          **Comando Reportado** ${comando} \n\n
          **Informacion del reporte** ${bug} \n\n
          `
      )
      .setColor("Green");

    const borrarEmbed = new EmbedBuilder()
      .setTitle(`<:Robut_Trash:1031764022707634176> | Reporte Borrado"`)
      .setDescription(`El reporte sera elimando en unos segundos`);

    const m = await client.channels.cache
      .get("1030257542586179685")
      .send({ embeds: [embed1], components: [boton], fetchReply: true }); //ponemos el canal donde se enviara el embed principal
    const filtro = (i) => i.user.id === "223516161973682196"; //un filtro
    const collector = m.createMessageComponentCollector({ filter: filtro });
    collector.on("collect", async (i) => {
      //las interaciones de los botones
      if (i.customId === "solucionado") {
        await i.deferUpdate();
        i.editReply({ embeds: [embed3], components: [] }).then((m) =>
          setTimeout(() => m.delete(), 20000)
        );
        interaction.user.send({
          content: `🟢 | **Gracias por reportar el comando defectuoso fue SOLUCIONADO esperamo lo puedas disfrutar**`,
        }).catch(() => {});
      }
      if (i.customId === "nosolucionado") {
        await i.deferUpdate();
        i.editReply({ embeds: [embed2], components: [] }).then((m) =>
          setTimeout(() => m.delete(), 20000)
        );
        interaction.user.send({
          content: `🔴 | ** Gracias por hacer tu reporte pero lamentamos informar que este no fue solucionado y pudo ser por ser por dos motivos**\n 1° El comando fue archivado \n 2° El comando no presentaba ningun problema `,
        }).catch(() => {});
      }
      if (i.customId === "borrarreport") {
        await i.deferUpdate();
        i.editReply({ embeds: [borrarEmbed], components: [] }).then((m) =>
          setTimeout(() => m.delete(), 5000)
        );
        interaction.user.send({ content: `🗑️ | ** Gracias por hacer tu reporte pero lamentamos informar que este fue ELIMINADO y pudo ser por ser por dos motivos**\n 1° No tiene nada que ver el reporte con el bot \n 2° El comando no presentaba ningun problema ` }).catch(() => {});
      }
    });
    interaction.reply({
      content:
        `<:plus_icon:1031755085220429874> | Gracias por enviar tu reporte daremos una pronta respuesta `,
      ephemeral: true,
    });
  },
};
