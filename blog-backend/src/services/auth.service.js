import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hola desde GET');
});

router.post('/', (req,res) => {
    res.send('Hola desde POST');
});

export default router;
