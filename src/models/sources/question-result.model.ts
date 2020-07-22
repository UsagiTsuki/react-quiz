/**
 * クイズ問題 回答結果データモデル
 */
type QuestionResultModelType = {
  // 結果画面が表示された時間
  time: string;
  // 何回目の回答か
  count: number;
  // 問題数
  question_count: number;
  // 正答数
  correct_count: number;
};

export default QuestionResultModelType;
