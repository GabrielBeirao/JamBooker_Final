import { Sequelize } from "sequelize";
import connection from '../config/db.js';
import User from "./User.js";
import Restaurant from "./Restaurant.js";

const Review = connection.define(
    'review',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        idUser: {
            type: Sequelize.INTEGER,
            references: {
                model: User,
                key: 'id'
              },
            allowNull: false
        },
        idRestaurant: {
            type: Sequelize.INTEGER,
            references: {
                model: Restaurant,
                key: 'id'
              },
            allowNull: false
        },
        stars: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        comment: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }
)

Review.belongsTo(User, {
    foreignKey: 'idUser'
});

Review.belongsTo(Restaurant, {
    foreignKey: 'idRestaurant'
});

export default Review;