import "reflect-metadata";
import { DataSource } from "typeorm";

export const Database = new DataSource({
	type: "postgres",
	host: "localhost",
	port: 5432,
	username: "root",
	password: "root",
	database: "code_drops-code",
	entities: [`${__dirname}/**/migrations/*.{ts,js}`],
	migrations: [`${__dirname}/**/entities/*.{ts,js}`],
});
