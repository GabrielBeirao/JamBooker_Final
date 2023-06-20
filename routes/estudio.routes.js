import express from "express";
import Estudio from '../models/Estudio.js';

const estudio = express.Router();

estudio.get('/', (req, res) => {
    res.send('Rota de Estudioes');
});

estudio.post("/register", async (req, res) => {
    
    const { name, type, description, address } = req.body;

    const alreadyExistsEstudio = await Estudio.findOne({ where: { name } }).catch(
        (err) => {
            console.log("Error: ", err);
        }
    );

    if (alreadyExistsEstudio) {
        return res.status(409).json({ message: "Estudio already registered!" });
    }

    const newEstudio = new Estudio({ name, type, description, address });
    const savedEstudio = await newEstudio.save().catch((err) => {
        console.log("Error: ", err);
        res.status(500).json({ error: "Sorry! Could not register the estudio" });
    });

    if (savedEstudio) res.json({ message: "New Estudio Registered!" });
});

estudio.get('/find', async (req, res) => {
    const estudios = await Estudio.findAll().catch(
        (err) => {
            console.log(err)
        }
    );

    if (estudios){
        return res.json({estudios})
    } else {
        return null
    }
})

export default estudio;