import express from 'express';
import user from './user.routes.js';
import estudio from './estudio.routes.js';
import ensaio from './ensaio.routes.js';
import login from './login.routes.js';

const router = express.Router();

router.use('/user', user);
router.use('/estudio', estudio);
router.use('/ensaio', ensaio);
router.use('/login', login);

export default router;