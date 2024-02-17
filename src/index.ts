import express from 'express';
import path from 'path';

const app = express();
const PORT = 3009;

app.use(express.static(path.join(__dirname, '../trivia/dist')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../trivia/dist', 'index.html'));
});

app.get('/trivia', (req, res) => {
    res.sendFile(path.join(__dirname, '../trivia/dist', 'index.html'));
});

app.get('/trivia/results', (req, res) => {
    res.sendFile(path.join(__dirname, '../trivia/dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});