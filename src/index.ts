import express from 'express';
import cors from 'cors';
import path from 'path';
import triviaRoutes from './routes/trivia.routes';
import viewRoutes from './routes/views.routes';
import { errorHandler } from './middlewares/error.handler';

const app = express();
const PORT = 3009;

// Enable CORS for all routes
app.use(cors());


app.use(express.static(path.join(__dirname, '../trivia/dist')));

// Use view routes
app.use('/', viewRoutes);


/*
    API routes :
    - /api/opentdb/questions
*/
app.use('/api', triviaRoutes);

// Use the error handling middleware
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

