export interface ServerConfig {
	enabled: boolean;
	protocols: Array<Protocol>;
}

export interface Protocol {
	id: string;
	name: string;
	networks: Array<string>;
	roles: Array<Role>;
}

export interface Role {
	id: string;
	name: string;
}

// export interface VerfiedUser is here but ill not put it in until i get there in the code
