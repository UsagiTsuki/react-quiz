/**
 * クイズ問題データモデル
 *
 * "はてな" はデータ整形項目
 */
type QuestionModelType = {
  id: string;
  quiz_id: number;
  question_number: number;
  question_text: string;
  answer1: string;
  answer2: string;
  answer3: string;
  answer4: string;
  correct_answer: string;
  is_input: boolean;
  created_at: string;
  updated_at: string;
};

export default QuestionModelType;
