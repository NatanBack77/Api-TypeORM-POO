import "reflect-metadata";
import express from "express";
import { Database } from "./dataSource";
import { routes } from "./routes";


const app = express();

app.use(express.json())

app.use(routes)
app.get('/',async(req,res)=>{
   res.send("algo")
})
Database.initialize()
	.then(() => {
		app.listen(30001, () => {
			console.log("App Running");
		});
	})
	.catch((err) => {
		console.log(err);
	});

