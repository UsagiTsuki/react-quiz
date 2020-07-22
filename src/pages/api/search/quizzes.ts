/**
 * [ 改善メモ ]
 * - ビジネスロジックの分離
 */
import QuizModelType from '@/models/sources/quiz.model';
import { RequestQuizModel } from '@/models/requests/request-quiz-type';
import ResponseQuizType from '@/models/responses/response-quiz-type';
import { doMapping } from '@/utils/object-mapper';
import { getQueryCount } from '@/utils/object-query-count';

const quizData: QuizModelType[] = [
  {
    id: 1,
    name: '基礎知識問題',
    details: 'HTML5.1の基本的な書式と各部の名称について身につけましょう。',
    category_id: '1',
    slug: 'html-basic',
    created_at: '2020-07-10 12:00:00',
    updated_at: '2020-07-10 12:00:00'
  },
  {
    id: 2,
    name: '基礎要素とカテゴリー',
    details: 'HTML5ではインラインレベル要素、ブロックレベル要素が廃止され、より詳細な分類ができました。それぞれの意味を理解しましょう。',
    category_id: '1',
    slug: 'html-basic-element',
    created_at: '2020-07-10 12:00:00',
    updated_at: '2020-07-10 12:00:00'
  },
  {
    id: 3,
    name: 'サブ系の要素',
    details: 'すべての要素に共通して指定できる属性についての理解をしましょう。',
    category_id: '1',
    slug: 'html-sub-element',
    created_at: '2020-07-10 12:00:00',
    updated_at: '2020-07-10 12:00:00'
  },
  {
    id: 4,
    name: '画像などの要素問題',
    details: '画像の仕様が変わりました。内容をきちんと把握しておきましょう。',
    category_id: '1',
    slug: 'html-img-object',
    created_at: '2020-07-10 12:00:00',
    updated_at: '2020-07-10 12:00:00'
  },
  {
    id: 5,
    name: 'その他の要素についての問題',
    details: '重要ですが忘れやすい要素についてもきちんと理解しておきましょう',
    category_id: '1',
    slug: 'html-other-element',
    created_at: '2020-07-10 12:00:00',
    updated_at: '2020-07-10 12:00:00'
  }
];

export default (req, res) => {
  const { query } = req;
  const mapRequest = new RequestQuizModel();
  let filterData = quizData;
  // 必要なパラメータのみに限定
  doMapping(query, mapRequest);

  switch (getQueryCount(mapRequest)) {
    case 0:
      break;
    case 1:
      // [ 片方のみの条件 ]
      const filterDatas = Object.entries(mapRequest).map(param => {
        return quizData.filter(quiz => quiz[param[0]] == param[1]);
      });
      filterData = [...filterDatas[0], ...filterDatas[1], ...filterDatas[2]];
      break;
    default:
      // [ 交差 ] // slug増えた分が未対応、実際使うときに修正
      const filterIds = Object.entries(mapRequest).map(param => {
        return quizData.filter(quiz => quiz[param[0]] == param[1]).map(quiz => quiz.id);
      });
      const intersection = filterIds[0].filter(quizId => filterIds[1].includes(quizId));
      filterData = quizData.filter(param => intersection.includes(param.id));
      break;
  }

  const response: ResponseQuizType = {
    contents: [...filterData],
    totalCount: filterData.length
  };

  res.status(200).json(response);
};
