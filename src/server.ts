import "reflect-metadata";
import express from "express";
import { Database } from "./dataSource";
import { routes } from "./routes";


const app = express();
app.use(express.json())


Database.initialize()
	.then(() => {
    app.use(routes)
	app.listen(3000, () => {
			console.log("App Running");
		});
	})
	.catch((err) => {
		console.log(err);
	});

