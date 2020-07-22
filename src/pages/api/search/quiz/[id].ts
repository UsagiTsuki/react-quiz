import ResponseQuizType from '@/models/responses/response-quiz-type';

type quizId = number;

export default (req, res) => {
  const { query: quizId, method } = req;
  const resData: ResponseQuizType = {
    contents: [
      {
        id: 1,
        name: '',
        details: '',
        slug: '',
        category_id: '',
        created_at: '',
        updated_at: ''
      }
    ],
    totalCount: 0
  };
  res.status(200).json();
};
