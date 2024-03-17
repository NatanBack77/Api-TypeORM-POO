import "reflect-metadata";
import express from "express";
import { Database } from "./dataSource";

const app = express();
Database.initialize()
	.then(() => {
		app.listen(30001, () => {
			console.log("App Running");
		});
	})
	.catch((err) => {
		console.log(err);
	});
