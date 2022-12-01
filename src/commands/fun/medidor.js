const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("medidor")
    .setDescription("Mide tu hombria"),
  async execute(interaction, client) {
    let sortOption = Math.floor(Math.random() * 6);
    switch (sortOption) {
      case 1:
        const embed1 = new EmbedBuilder().setTitle(
          `${interaction.user.tag} Aqui estan los resultados`
        ).setDescription(`**Soy re gay admitelo y ya** :rainbow_flag: 

        <:lb_g:1041141028410892400><:l2_g:1041140818037186610><:l2_g:1041140818037186610><:l2_g:1041140818037186610><:l2_g:1041140818037186610><:lb3_g:1041140962027634808>  `);
        await interaction.reply({ embeds: [embed1] });
        break;

      case 2:
        const embed2 = new EmbedBuilder().setTitle(
          `${interaction.user.tag} Aqui estan los resultados`
        )
          .setDescription(`**Te estas demorando en salir del closet** :rainbow_flag: 

        <:lb_g:1041141028410892400><:l_g:1041140864954679309><:l2_g:1041140818037186610><:l2_g:1041140818037186610><:l2_g:1041140818037186610><:lb3_g:1041140962027634808>  `);
        await interaction.reply({ embeds: [embed2] });
        break;

      case 3:
        const embed3 = new EmbedBuilder().setTitle(
          `${interaction.user.tag} Aqui estan los resultados`
        )
          .setDescription(`**Eres un gay termino Medio sigues indeciso** :rainbow_flag: 
  
          <:lb_g:1041141028410892400><:l_g:1041140864954679309><:l_g:1041140864954679309><:l2_g:1041140818037186610><:l2_g:1041140818037186610><:lb3_g:1041140962027634808>  `);
        await interaction.reply({ embeds: [embed3] });
        break;

      case 4:
        const embed4 = new EmbedBuilder().setTitle(
          `${interaction.user.tag} Aqui estan los resultados`
        )
          .setDescription(`**Eres un gay termino Medio sigues indeciso** :rainbow_flag: 
    
            <:lb_g:1041141028410892400><:l_g:1041140864954679309><:l_g:1041140864954679309><:l_g:1041140864954679309><:l2_g:1041140818037186610><:lb3_g:1041140962027634808>  `);
        await interaction.reply({ embeds: [embed4] });
        break;

      case 5:
        const embed5 = new EmbedBuilder().setTitle(
          `${interaction.user.tag} Aqui estan los resultados`
        ).setDescription(`**Sos todo un Macho** :sunglasses: 
      
              <:lb_g:1041141028410892400><:l_g:1041140864954679309><:l_g:1041140864954679309><:l_g:1041140864954679309><:l_g:1041140864954679309><:lb3_g:1041140962027634808>  `);
        await interaction.reply({ embeds: [embed5] });
        break;
      case 6:
        const embed6 = new EmbedBuilder().setTitle(
          `${interaction.user.tag} Aqui estan los resultados`
        ).setDescription(`**Todo un Macho alfa** :sunglasses: 
        
                <:lb_g:1041141028410892400><:l_g:1041140864954679309><:l_g:1041140864954679309><:l_g:1041140864954679309><:l_g:1041140864954679309><:lb4_g:1041140905538752612>  `);
        await interaction.reply({ embeds: [embed6] });
        break;
    }
  },
};
