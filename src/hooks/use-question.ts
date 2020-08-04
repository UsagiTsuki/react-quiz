/**
 * 問題と回答を扱うフック
 *
 * - 現在の問題番号を管理（初期は０）
 * - 現在の問題を管理
 * - 現在の問題の回答内容を管理
 */
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import QuestionModelType from '@/models/sources/question.model';
import ResponseQuestionType from '@/models/responses/response-question-type';

export type numberType = {
  current: number;
  next: any;
  prev: any;
  clear: () => void;
};

export type questionType = numberType & {
  current: number;
  next: any;
  prev: any;
  selectedQuestion: QuestionModelType;
  mapAnswer: any;
  isResult: boolean;
  resultList: { lists: resultListType[]; length: number; count: number };
  toggleResult: any;
};

export type answerMapType = {
  map: any;
  setCheck: any;
  setInput: any;
  clear: () => void;
};

/**
 * 結果オブジェクト
 */
export type resultListType = {
  id: string;
  qmark: string;
  result: string;
  correct_answer: string;
};

/**
 * 問題番号を管理するフック
 * @param maxLength
 */
const useNumber = (maxLength: number) => {
  const [current, setCurrent] = useState(0);

  /**
   * 次の番号をセット
   */
  const next = useCallback(() => {
    current < maxLength - 1 && setCurrent(current + 1);
  }, [current]);

  /**
   * 前の番号をセット
   */
  const prev = useCallback(() => {
    current > 0 && setCurrent(current - 1);
  }, [current]);

  return <numberType>{
    current,
    next,
    prev,
    clear: useCallback(() => {
      setCurrent(0);
    }, [])
  };
};

const useAnswerMapData = () => {
  const [data, setData] = useState({});

  /**
   * 回答データを保存する
   * @param id input要素のID.指定の回答文が返ってくる
   * @param name ラジオグループ名。クイズのIDが返ってくる
   */
  const setCheck = useCallback(
    e => {
      const { target } = e;
      const { id, name } = target;
      setData({ ...data, [name]: id });
    },
    [data]
  );

  /**
   * 回答データを保存する
   * @param id input要素のID.指定の回答文が返ってくる
   * @param name ラジオグループ名。クイズのIDが返ってくる
   */
  const setInput = useCallback(
    e => {
      const { target } = e;
      const { value, name } = target;
      setData({ ...data, [name]: value });
    },
    [data]
  );

  return <answerMapType>{
    map: data,
    setCheck,
    setInput,
    clear: useCallback(() => {
      setData({});
    }, [])
  };
};

/**
 * 問題フック
 * @param data
 */
export const useQuestion = (data: ResponseQuestionType) => {
  const number = useNumber(data.contents.length);
  const map = useAnswerMapData();
  const [isResult, setIsResult] = useState(false);
  const [resultList, setResultList] = useState({});

  /**
   * 選択された問題を返す
   */
  const selectedQuestion = useMemo(() => {
    return data.contents[number.current];
  }, [number.current]);

  /**
   * 結果を集計
   */
  const aggregateLists = useMemo(() => {
    return data.contents.map(question => {
      return <resultListType>{
        id: question.id,
        qmark: `Q.${question.question_number}`,
        result: map.map[question.id] === question.correct_answer ? '✔' : '×',
        correct_answer: question.correct_answer
      };
    });
  }, [map]);

  const toggleResult = useCallback(() => {
    const resultOutput = {
      lists: aggregateLists,
      length: data.contents.length,
      count: aggregateLists.reduce((prev, question) => prev + (question.result === '✔' ? 1 : 0), 0)
    };
    setResultList(resultOutput);
    // 結果画面表示フラグをON
    setIsResult(x => !x);
  }, [aggregateLists]);

  const clear = useCallback(() => {
    setIsResult(false);
    setResultList({});
    number.clear();
    map.clear();
  }, []);

  return <questionType>{
    current: number.current,
    next: number.next,
    prev: number.prev,
    selectedQuestion,
    mapAnswer: map,
    isResult,
    resultList,
    toggleResult,
    clear
  };
};
