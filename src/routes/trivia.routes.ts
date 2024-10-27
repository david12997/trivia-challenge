import express from 'express';
import { TriviaAPIFactory } from './../factories/trivia.factory';

const router = express.Router();

router.get('/opentdb/questions', async (req, res, next) => {
    const { amount, difficulty, type } = req.query;

    try {
      
        const triviaAPI = TriviaAPIFactory.create('opentdb');
        const questions = await triviaAPI.fetchQuestions(Number(amount), difficulty as string, type as string);
  
        res.json(questions);

    } catch (error) {
        console.error(error);
        next(error); // Pass the error to the error handling middleware
    }
});

// Add more trivia API routes here

export default router;