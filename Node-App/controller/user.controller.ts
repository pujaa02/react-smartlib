import { INTEGER, Model } from "sequelize";
import sequelize from "../models/sequalize";
import { DataTypes } from "sequelize";


export interface UserAttri extends Model {
    id: string;
    user_id: string;
    fname: string;
    lname: string;
    email: string;
    phone: string;
    gender: string;
    bd: string;
    password: string
    access_key: string;
    isdeleted: string;
    createdAt?: Date;
    updatedAt?: Date;
}

const phoneValidationRegex: RegExp = /\d{3}-\d{3}-\d{4}/
const User = sequelize.define<UserAttri>("users", {
    user_id: {
        type: INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    fname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            validator: function (v: string) {
                return phoneValidationRegex.test(v);
            },
        }
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    bd: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
    },
    access_key: {
        type: DataTypes.STRING,
    },
    isdeleted: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: '0'
    },
});

export default User;
