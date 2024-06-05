import express, { Application, NextFunction } from "express";
const app: Application = express();
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import main from "./routes/router";
dotenv.config();
const port = process.env.PORT;
import cors from "cors";
import path = require("path");

app.use(cookieParser());
import bodyParser from 'body-parser';
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const corsOptions = {
  origin: 'http://localhost:3030',
  methods: 'GET, PUT, POST',
  credentials: true
};
app.use(cors(corsOptions))
app.options('http://localhost:3030', cors(corsOptions));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3030");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
try {
  app.listen(port, () => {
    console.log(`Server is running in port: ${port} `);
    app.use(main);
  });
} catch (error) {
  console.log(`Error: ${error}`);
}
