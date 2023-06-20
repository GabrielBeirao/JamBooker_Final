import { Sequelize } from "sequelize";
import connection from "../config/db.js";
import Estudio from "./Estudio.js";
import User from "./User.js";

const Ensaio = connection.define(
    'ensaio',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        idUser: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'users',
                key: 'id'
            }
        },
        idEstudio: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'estudios',
                key: 'id'
            }
        },
        data: {
            type: Sequelize.STRING,
            allowNull: false
        },
        hora: {
            type: Sequelize.STRING,
            allowNull: false
        },
    }
);

Ensaio.belongsTo(Estudio, {
    foreignKey: 'idEstudio'
});

Ensaio.belongsTo(User, {
    foreignKey: 'idUser'
});

export default Ensaio;