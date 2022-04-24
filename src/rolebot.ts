// creating another Class template for Rolebot.
// lets try to do this myself
// lets gather all the info id need for a rolebot

import Store from "./store";
import { CLIENT_OPTIONS } from "./config";
import Discord, { Client } from "discord.js";
import { Guild } from "discord.js";

// config files connecting to the rolebot
// intents for the rolebot
// instructions for the rolebot
// eventhandlers for the rolebot

// rolebot will need access to the db Store
// rolebot will need access to the discord Client

// brainstorming/referencing Miro for all the things the rolebot will need to do...

// link/unlink wallet
// channel announcments, guild announcements, admin announcemnets
// send  DM to user
// assign me some roles based off my wallet
// help function
// write/read Store
// pause/resume rolebot
// share profile
// discover whoami
// settings
// present link to emblemdao more info
// assess onchain activity
// unlock new channels once badge is earned

export default class Rolebot {
	operational: boolean = false;
	// why does this get away with this? this.operational does not need to be declared in constructor?

	client: Client;
	store: Store;

	constructor(token: string) {
		this.client = new Discord.Client(CLIENT_OPTIONS);
		this.store = new Store();
		this.registerEventHandlers();
		this.client.login(token);
	}

	/**
	 * Method to setup Event Handlers. Just to RubberDuck... you are registering events in a second stream of processing to listen for the 'x' event emitted from Client. Then you're having it bind the method e.g onReady to a property of the Class Rolebot.
	 */
	public registerEventHandlers() {
		this.client.on("ready", this.onReady.bind(this));
		this.client.on("guildCreate", this.onGuildCreate.bind(this));
		this.client.on("messageCreate", this.client.onMessageCreate.bind(this));
	}

	/**
	 * Creates an OPERATIONAL = TRUE thing...
	 * FloQuestion: How did you learn this functionality? What tipped you off to implement this strategy of operational: boolean = false and utilize it throughout the rolebot structure?
	 */
	public onReady() {
		this.operational = true;
		console.log("/ / OPERATIONAL / /");
	}

	/**
	 * Method that registers when the bot joins a Guild (server). When I add "name" as a parameter of the method despite it being a property from "guildCreate" the whole thing breaks. Whats up with that. tried
	 */
	public onGuildCreate(guild: Guild) {}
	// interface clientName {
	// 	client: Client;
	// 	guild: string;
	// }

	// 	this.client.on("guildCreate", (client: Client, guild: Guild) => {
	// 		console.log(
	// 			`Thank you ${client.name} for adding RoleBot to ${guild.name}`
	// 		);
	// 	});
	// }

	/**
	 * onMessageCreate when a message... THIS IS THE FUNCTION SLASH LIST OF THE BOT? Unsure of this logic. Switch logic
	 */
	public onMessageCreate() {}
}
