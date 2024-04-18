import express from "express";
import mongoose from 'mongoose';
import { port, mongoDBURL } from "./config.js";
import { Book } from "./models/bookModel.js";
import booksroute from "./routes/booksRoute.js";
import cors from 'cors';

const app = express();

app.use(cors());

/** 
app.use(cors({
    origin:'http://locahost:3000',
    methods:['GET','POST','PUT','DELETE'],
    allowedHeaders:['Content-Type'],
}));
**/
app.use(express.json());

app.get("/", (req, res) => {
    console.log(req);
    res.send("Hello World");
});

app.use("/books",booksroute);

mongoose.connect(mongoDBURL)
    .then(() => {
        console.log("App connected to database");
        app.listen(port, () => {
            console.log("Server started");
        });
    })
    .catch((error) => {
        console.error("Error connecting to database:", error);
    });

