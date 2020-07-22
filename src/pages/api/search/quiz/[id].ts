import ResponseQuizType from '@/models/responses/response-quiz-type';

type quizId = number;

export default (req, res) => {
  const { query: quizId, method } = req;
  const resData: ResponseQuizType = {
    contents: {
      id: 1,
      name: '',
      details: '',
      created_at: '',
      updated_at: ''
    },
    totalCount: 0,
    offset: 0,
    limit: 0
  };
  res.status(200).json();
};
