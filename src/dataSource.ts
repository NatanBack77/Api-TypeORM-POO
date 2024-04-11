import "reflect-metadata";
import "dotenv/config";
import { DataSource } from "typeorm";

const host = process.env.POSTGRES_HOST || "localhost";
export const Database = new DataSource({
	type: "postgres",
	host: host,
	port: 5432,
	username: process.env.POSTGRES_USER,
	password: process.env.POSTGRES_USER,
	database: process.env.POSTGRES_DB,
	entities: [`${__dirname}/**/entities/*.{ts,js}`],
	migrations: [`${__dirname}/**/migrations/*.{ts,js}`],
});
