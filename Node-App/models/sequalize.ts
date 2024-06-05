import { Sequelize, DataTypes } from 'sequelize';
import dotenv from "dotenv";
dotenv.config();

const sequelize = new Sequelize(
    `${process.env.DATABASE}`, `${process.env.DBUSER
    }`, `${process.env.DBPASSWORD}`,
    {
        host: `${process.env.HOST}`,
        dialect: "mysql",
        logging: false
    },

);
sequelize.sync().then(() => {
    console.log("models created succesfully");

}).catch((error) => {
    console.log(error);

})
export default sequelize;