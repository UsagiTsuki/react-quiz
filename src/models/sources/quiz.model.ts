/**
 * クイズデータモデル
 *
 * "はてな" はデータ整形項目
 */
type QuizModelType = {
  id: number;
  name: string;
  details: string;
  category_id: string;
  slug: string;
  created_at: string;
  updated_at: string;
  category_name?: string;
  is_active?: boolean;
};

export default QuizModelType;
