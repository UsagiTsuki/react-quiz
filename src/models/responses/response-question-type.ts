type ResponseQuestionType = {
  contents: {
    id: string;
    // クイズID
    quiz_id: number;
    // 問題番号
    question_number: number;
    // 問題文
    question_text: string;
    // 回答１
    answer1: string;
    // 回答２
    answer2: string;
    // 回答３
    answer3: string;
    // 回答４
    answer4: string;
    // 正解
    correct_answer: string;
    // 入力可否
    is_input: boolean;
    created_at: string;
    updated_at: string;
  }[];
  totalCount: number;
};

export default ResponseQuestionType;
