import express from "express";
import Ensaio from '../models/Ensaio.js';
import Estudio from '../models/Estudio.js';
import User from "../models/User.js";

const ensaio = express.Router();

ensaio.get('/', (req, res) => {
    res.send('Rota de Ensaios');
});

ensaio.post("/register", async (req, res) => {

    const { idUser, idEstudio, data, hora } = req.body;

    const alreadyExistsEnsaio = await Ensaio.findOne({ where: { idUser, idEstudio } }).catch(
        (err) => {
            console.log("Error: ", err);
        }
    );

    if (alreadyExistsEnsaio) {
        return res.status(409).json({ message: "Ensaio already registered!" });
    }

    const newEnsaio = new Ensaio({ idUser, idEstudio, data, hora });
    const savedEnsaio = await newEnsaio.save().catch((err) => {
        console.log("Error: ", err);
        res.status(500).json({ error: "Sorry! Could not register the Ensaio" });
    });

    if (savedEnsaio) res.json({ message: "New Ensaio Registered!" });
});

ensaio.get('/findByEstudio', async (req, res) => {
    const idEstudio = req.query.idEstudio;
    const ensaios = await Ensaio.findAll({
        where: {
            idEstudio: idEstudio
        },
        include: [{ model: User }]
    }).catch(
        (err) => {
            console.log(err)
        }
    );

    if (ensaios) {
        return res.json({ ensaios })
    } else {
        return null
    }
})

ensaio.get('/findByUser', async (req, res) => {
    const idUser = req.query.idUser;
    const ensaios = await Ensaio.findAll({
        where: {
            idUser: idUser
        },
        include: [{ model: Estudio }]
    }).catch(
        (err) => {
            console.log(err)
        }
    );

    if (ensaios) {
        return res.json({ ensaios })
    } else {
        return null
    }
})

export default ensaio;