import express from 'express';
import { TriviaAPIFactory } from './../factories/trivia.factory';

const router = express.Router();

// Dynamic route to handle multiple trivia APIs
router.get('/:apiTrivia/questions', async (req, res, next) => {

    const {apiTrivia} = req.params;
    const { amount, difficulty, type } = req.query;

    try {
      
        const triviaAPI = TriviaAPIFactory.create(apiTrivia);
        const questions = await triviaAPI.fetchQuestions(Number(amount), difficulty as string, type as string);
  
        res.json(questions);

    } catch (error) {
        console.error(error);
        next(error); // Pass the error to the error handling middleware
    }
});

// Add more trivia API routes here

export default router;