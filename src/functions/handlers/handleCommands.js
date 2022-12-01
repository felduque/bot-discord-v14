const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
const fs = require("fs");

module.exports = (client) => {
  client.handleCommands = async () => {
    const commandFolders = fs.readdirSync("./src/commands");
    for (const folder of commandFolders) {
      const commandFiles = fs
        .readdirSync(`./src/commands/${folder}`)
        .filter((file) => file.endsWith(".js"));

      const { commands, commandArray } = client;
      for (const file of commandFiles) {
        const command = require(`../../commands/${folder}/${file}`);
        commands.set(command.data.name, command);
        commandArray.push(command.data.toJSON());
        // console.log(`El comando: ${command.data.name} fue pasado por el controlador`);
      }
    }
    const clientId = ""; // Aqui la ID del Bot
    const guildId = ""; // Aqui la ID del servidor en que se usara
    const rest = new REST({ version: "9" }).setToken(process.env.token);
    try {
      console.log("Inciando reinicio de comandos / ");

      await rest.put(Routes.applicationGuildCommands(clientId, guildId), {
        body: client.commandArray,
      });

      console.log("El reinicio de los comandos / se termino con exito");
    } catch (error) {
      console.error(error);
    }
  };
};
