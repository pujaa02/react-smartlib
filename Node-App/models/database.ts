import Db from 'mysql2-async'
import dotenv from "dotenv";
dotenv.config();
const con = new Db({
    host: process.env.HOST,
    user: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    database: process.env.DATABASE,
    dateStrings: true,
    skiptzfix: true
});


export default con;