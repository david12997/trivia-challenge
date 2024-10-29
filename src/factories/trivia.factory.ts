import { ITriviaAPI } from '../interfaces/trivia.it';
import { OpenTriviaAdapter } from '../adapters/open.trivia.adapter';

export class TriviaAPIFactory {
    static create(apiType: string): ITriviaAPI {
        switch (apiType) {
            case 'opentdb':
                return new OpenTriviaAdapter();

            case 'the-trivia-api':
                return new OpenTriviaAdapter();
            // Add more cases for other APIs
            default:
                throw new Error('Unknown API type');
        }
    }
}