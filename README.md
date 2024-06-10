# Bot Command Setup

This script is for setting up commands for your Discord bot on Guilded Bots API.

## Setup

1. Install axios if you haven't already:

    ```bash
    npm install axios
    ```

2. Fill in your bot ID and API token in the script:

    ```javascript
    const botId = ""; 
    const apitoken = "";  // do not put your discord token put your api token from your http://guildedbots.gg/discord/bot/yourbotid on the manage tab
    ```

3. Define your commands in the `commands` array:

    ```javascript
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
      // Add more commands as needed
    ];
    ```

4. Run the script:

    ```bash
    node index.js
    ```

   This will post each command to the Guilded Bots API.