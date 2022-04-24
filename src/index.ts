import "dotenv/config";
import Rolebot from "./rolebot";

// this is elegant. i like this. im not sure how this works but i like this.

// arrow function with process.env.bot_token declared at the end? how does this work.

((BOT_TOKEN) => {
	if (!BOT_TOKEN) {
		console.log("// 🔥 BOT_TOKEN not found! Ask @bloomingbridges //");
		process.exit(1);
	}

	// TODO Set up a way of letting Rolebot know the db has been updated /////////

	// INIT //////////////////////////////////////////////////////////////////////
	new Rolebot(BOT_TOKEN);
	//////////////////////////////////////////////////////////////////////////////
})(process.env.BOT_TOKEN);
