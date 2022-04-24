import { Guild } from "discord.js";
import dotenv from "dotenv";
import { ClientOptions, Intents } from "discord.js";

dotenv.config();

// FIREBASE CONFIG

export const firebaseConfig = {
	apiKey: "AIzaSyC1f4sJFFQ8dIPfQYStVyl5flyYV_H8o9U",
	authDomain: "datapushertofirebase.firebaseapp.com",
	projectId: "datapushertofirebase",
	storageBucket: "datapushertofirebase.appspot.com",
	messagingSenderId: "156992438079",
	appId: "1:156992438079:web:c565fb2e1bd8cbb034dd8a",
	measurementId: "G-B9BL80HTZK",
};

// FIREBASE JSON INFO

export const STORE_DB_INFO_JSON =
	__dirname + "datapushertofirebase-firebase-adminsdk-hm2tq-cd8257bb24.json";

// FIREBASE COLLECTION NAMES
export const ADDR_DB = "addresses";
export const CONF_DB = "configurations";

// DISCORDBOT TOKEN is in .env file

// DISCORDBOT CLIENTOPTIONS

// When dealing with a big class thats imported (Client), keep documentation open as I'm building

export const CLIENT_OPTIONS: ClientOptions = {
	intents: [
		Intents.FLAGS.GUILDS,
		Intents.FLAGS.GUILD_MESSAGES,
		Intents.FLAGS.DIRECT_MESSAGES,
	],
	partials: ["MESSAGE", "CHANNEL", "GUILD_MEMBER"],
};

// DISCORDBOT MY SERVERID

export const DISCORD_GUILD_ID = 957994950711193600;
