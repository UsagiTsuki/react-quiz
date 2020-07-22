/**
 * クイズ問題のAPI
 */
import QuestionModelType from '@/models/sources/question.model';
import { RequestQuestionModel } from '@/models/requests/request-question-type';
import ResponseQuestionType from '@/models/responses/response-question-type';
import { doMapping } from '@/utils/object-mapper';
import { getQueryCount } from '@/utils/object-query-count';
import axios from 'axios';

const questionData: QuestionModelType[] = [
  {
    id: 'xE_TJmI_Z6',
    quiz_id: 1,
    question_number: 1,
    question_text: '要素の開始タグの要素名の後に指定できるものは何か、カナで答えてください',
    answer1: 'フローコンテンツ',
    answer2: 'インタラクティブコンテンツ',
    answer3: 'トランスペアレント',
    answer4: 'フレージング',
    correct_answer: 'トランスペアレント',
    is_input: false,
    created_at: '2020-07-10 12:00:00',
    updated_at: '2020-07-10 12:00:00'
  }
];

export default (req, res) => {
  const { query } = req;
  const mapRequest = new RequestQuestionModel();
  let filterData = questionData;
  // 必要なパラメータのみに限定
  doMapping(query, mapRequest);

  switch (getQueryCount(mapRequest)) {
    case 0:
      break;
    case 1:
      // [ 片方のみの条件 ]
      const filterDatas = Object.entries(mapRequest).map(param => {
        return questionData.filter(quiz => quiz[param[0]] == param[1]);
      });
      filterData = [...filterDatas[0], ...filterDatas[1], ...filterDatas[2]];
      break;
    default:
      // [ 交差 ] // slug増えた分が未対応、実際使うときに修正
      const filterIds = Object.entries(mapRequest).map(param => {
        return questionData.filter(quiz => quiz[param[0]] == param[1]).map(quiz => quiz.id);
      });
      const intersection = filterIds[0].filter(quizId => filterIds[1].includes(quizId));
      filterData = questionData.filter(param => intersection.includes(param.id));
      break;
  }

  const response: ResponseQuestionType = {
    contents: [...filterData],
    totalCount: filterData.length
  };

  res.status(200).json(response);
};
