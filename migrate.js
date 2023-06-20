import connection from "./config/db.js";
import User from "./models/User.js";
import Estudio from "./models/Estudio.js";
import Ensaio from "./models/Ensaio.js";

const migrate = async () => {
    try {
        const result = await connection.sync();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

migrate();