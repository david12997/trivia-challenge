import express from 'express';
import path from 'path';

const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../trivia/dist', 'index.html'));
});

router.get('/trivia', (req, res) => {
    res.sendFile(path.join(__dirname, '../../trivia/dist', 'index.html'));
});

router.get('/trivia/results', (req, res) => {
    res.sendFile(path.join(__dirname, '../../trivia/dist', 'index.html'));
});

export default router;