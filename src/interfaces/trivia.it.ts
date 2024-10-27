export interface ITriviaAPI {
    fetchQuestions(amount: number, difficulty: string, type: string): Promise<any>;
  }