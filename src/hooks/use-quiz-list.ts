/**
 * クイズリストを扱うフック
 *
 * - APIから取得したデータを管理
 * - データを整形
 * - データのフィルタを受け入れ
 * - タグIDを名前に変換
 * - 特定リストクリック判定
 *
 * - 入力バウンス制御（外だし可？）
 *
 */
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Tags from '@/consts/tag';
import QuizModelType from '@/models/sources/quiz.model';
import ResponseQuizType from '@/models/responses/response-quiz-type';

export type quizType = {
  lists: any;
  listCount: number;
  inputText: string;
  selectedQuiz: QuizModelType;
  onChange: any;
  onClick: any;
  onSet: any;
};

/**
 * 検索フック
 *
 * フォーマット済データを受け取り、絞り込み結果を返す
 *
 * [ 主な責務 ]
 * - 入力値の管理
 * - 最終的なレスポンスデータ出力
 *  L 初期データと整形後データも集約
 */
const useFilterSearach = () => {
  const [quizLists, setQuizLists] = useState([]);
  const [inputText, setInputText] = useState('');

  /**
   * 入力検索内容の絞込データを出力
   */
  const filteredList = useMemo(() => {
    return !inputText ? quizLists : quizLists.filter(list => list.name.includes(inputText));
  }, [quizLists, inputText]);

  return {
    quizLists,
    inputText,
    filteredList,
    fetchList: lists => setQuizLists(lists),
    changeInput: useCallback(
      e => {
        setInputText(e.target.value);
      },
      [inputText]
    )
  };
};

/**
 * クイズリストフック
 * : SSG対応のために初期データを受け取れる仕様
 *
 * [ 主な責務 ]
 * - APIからデータ取得
 * - データの共通整形処理
 */
export const useQuizList = (data: ResponseQuizType) => {
  const search = useFilterSearach();
  // 詳細用データ
  const [selectedQuiz, setSelectedQuiz] = useState({});

  /**
   * APIの初期データをセット
   */
  useEffect(() => {
    if (data) {
      const formatLists = formatQuizList(data.contents);
      search.fetchList(formatLists);
    }
  }, [data]);

  /**
   * データの整形処理
   * - DBにないカラムもここで初期として定義
   * @param contents
   */
  const formatQuizList = contents => {
    return contents.map(quiz => {
      const tag = Tags.filter(tag => tag.id === quiz.category_id)[0];
      return {
        ...quiz,
        category_name: tag.name || '???',
        is_active: quiz.is_active || false
      };
    });
  };

  /**
   * 選択されたリストをアクティブにする処理
   * @param id :quizId
   */
  const setActiveQuizList = (id: number) => {
    return search.quizLists.map(quiz => {
      return {
        ...quiz,
        is_active: quiz.id === id ? !quiz.is_active : false
      };
    });
  };

  /**
   * 選択した単一リストのフィルター処理
   */
  const setSelect = id => {
    const formatActive = setActiveQuizList(id);
    search.fetchList(formatActive);
    const selectedQuiz = formatActive.filter(quiz => quiz.id === id && quiz.is_active === true);
    setSelectedQuiz(selectedQuiz[0] || {});
  };

  return <quizType>{
    lists: search.filteredList,
    listCount: search.filteredList.length || 0,
    inputText: search.inputText,
    selectedQuiz: selectedQuiz,
    onChange: search.changeInput,
    onClick: useCallback(id => setSelect(id), [search.quizLists]),
    onSet: setSelect
  };
};
