import { GatewayIntentBits, Client } from "discord.js"
import "dotenv/config"
const client = new Client({ 
    intents: [
        GatewayIntentBits.MessageContent, GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildWebhooks
    ] })

client.login(process.env.token)