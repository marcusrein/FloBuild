import { cert, initializeApp } from "firebase-admin/app";
import {
	GOOGLE_CERT_JSON,
	ADDR_DB,
	CONF_DB,
	STORE_DB_INFO_JSON,
} from "./config";
import {
	Firestore,
	getFirestore,
	QuerySnapshot,
} from "firebase-admin/firestore";
import { ServerConfig } from "./types";

// this file is the file for connecting to the store database, minimal logic. has an error if connection cant happen.

// FloQuestion: Why did you make ConnectionError a class unto itself? My guess is that there might be many types of db errors that we will have to build into the program and you're starting with this structure as opposed to singular entity. also, Promsie<querysnapshot> has no 'reject' of its promise, correct?

// FloQuestion: for the Super i see its req to be posted as this is an extended class from Error which has a name message and stack parameter. What does "super" pass to... i assume name as its the first thing in Error class, but that doesn't make sense.

// FloQuestion: how does firebase construct the db with the proper "addresses"... ahhh i see - confirm its using the actual 'punchcards' to connect and update verything. why choose this architecture?

// Error message Class that throws at the beginning of all these below VVV

class ConnectionError extends Error {
	constructor() {
		super("Not connected to db");
		this.name = "ConnectionError";
	}
}

// this file has async things that deal with the database.

//this class should login to the database and do things. gonna hop into flo code and figure it out

export default class Store {
	db: Firestore;

	constructor() {
		const APP = initializeApp({ credential: cert(STORE_DB_INFO_JSON) });
		this.db = getFirestore(APP);
	}

	// 1. getVerfiedAccounts is an async function with no parameters that checks if there isn't a db itll throw the error. if there is a db it takes 'gets' a snapshot from the db named "addresses" and returns that collection. Promise<T> is an async thing that will resolve to a T but does nto appear to provide a reject function. lets build that now

	// the two async methods of this Class 'Store' can be called but will then be put on another thread until their promise is fulfilled.
	async getVerifiedAccounts(): Promise<QuerySnapshot> {
		// now if no db, throw error, this should always be the start of these functions
		if (!this.db) throw new ConnectionError();
		const SNAPSHOT = await this.db.collection(ADDR_DB).get();
		return SNAPSHOT;
	}

	// takes an id Promises the interface that you defined ServerConfig that also accepts an interface (the Array<Protocol>). Why did you choose to build this in this way?

	// data inside of document inside of collection

	async getServerConfig(id: string): Promise<ServerConfig> {
		if (!this.db) throw new ConnectionError();
		const DOC = await this.db.collection(CONF_DB).doc(id).get();
		return DOC.data() as ServerConfig;
	}

	// this is not an async function so once it runs it will not hesistate. Why? It appears to be accessing the database? Is it accessing a local copy of the database?

	// Purpose of this function appears to work directly with Rolebot.ts in doing something with adddresses and configurations from config.ts

	onUpdate(
		collection: string,
		callback: (
			snapshot: QuerySnapshot<FirebaseFirestore.DocumentData>
		) => void
	) {
		const QUERY = this.db.collection(collection);
		QUERY.onSnapshot(callback);
	}
}
