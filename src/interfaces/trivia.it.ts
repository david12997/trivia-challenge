export interface ITriviaAPI {
    fetchQuestions(amount: number | undefined, difficulty: string | undefined, type: string | undefined): Promise<any>;
  }