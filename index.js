const axios = require("axios");

const botId = ""; 
const apitoken = "";  // do not put your discord token put your api token from your http://guildedbots.gg/discord/bot/yourbotid on the manage tab


const commands = [
  {
    name: "shorten",
    syntax: "/shorten `url`",
    description: "shorten a url",
  },
  {
    name: "help",
    syntax: "/help",
    description: "display help information",
  },
];

commands.forEach(command => {
  axios
    .post(`http://api.guildedbots.gg/api/bots/${botId}/commands`, {
      botId: botId,
      name: command.name,
      command: command.name,
      syntax: command.syntax,
      description: command.description,
      token: apitoken
    })
    .then((response) => {
      console.log(`Command '${command.name}' posted successfully:`, response.data);
    })
    .catch((error) => {
      console.error(`Error posting command '${command.name}':`, error.response.data);
    });
});
