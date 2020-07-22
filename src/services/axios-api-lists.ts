import axios from 'axios';
import ResponseQuizType from '@/models/responses/response-quiz-type';
import ResponseQuestionType from '@/models/responses/response-question-type';

type quizType = {
  data: ResponseQuizType;
};

type questionType = {
  data: ResponseQuestionType;
};

const QUIZ_API_URL = process.env.QUIZ_API_URL || '';
const API_URL = process.env.API_URL || '';
const API_KEY = process.env.API_KEY || '';

/**
 * クイズリストの取得
 */
export const getQuizzes = async (): Promise<quizType> => {
  return axios.get(`${QUIZ_API_URL}/api/search/quizzes`);
};

/**
 * スラッグを条件にクイズを取得
 */
export const getQuizBySlug = async (slug): Promise<quizType> => {
  return axios.get(`${QUIZ_API_URL}/api/search/quizzes?slug=${slug}`);
};

/**
 * クイズIDに紐づく問題を取得
 * : 時間があればmodelを作成し、「/api/questions.ts」でパラメータ制限対応を
 */
export const getQuestionsByQuizId = (quizId): Promise<questionType> => {
  const urlParam = `filters=quiz_id[equals]${quizId}`;
  return axios.get(`${API_URL}/questions?${urlParam}`, {
    headers: {
      'Content-type': 'application/json',
      'X-API-KEY': API_KEY
    }
  });
};
