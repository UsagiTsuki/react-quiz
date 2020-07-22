/**
 * 問題の結果画面
 *
 */
import { FC, useEffect } from 'react';
import styled from 'styled-components';
import { questionType } from '@/hooks/use-question';
import QuestionResultModelType from '@/models/sources/question-result.model';
import SectionTitle from '@/components/atoms/titles/section-title';
import EvaluationText from '@/components/atoms/texts/evaluation-text';
import ProgressBar from '@/components/atoms/animations/progress-bar.tsx';
import NomalButton from '@/components/atoms/buttons/nomal-button';
import MultiLink from '@/components/atoms/links/multi-link';
import moment from 'moment-timezone';

type Props = {
  question: questionType;
  slug: string;
};

const Root = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

// 左側
const ResultList = styled.div`
  flex-grow: 1;
  flex-shrink: 2;
`;

// 右側
const ResultContents = styled.div`
  flex-basis: 400px;
  flex-shrink: 1;
  border-left: 1px solid ${props => props.theme.colors.pale};
  padding-left: 48px;
`;

const ResultUl = styled.ul`
  padding-top: 24px;
`;

const ResultLi = styled.li`
  padding: 8px 0;
  display: flex;
  align-items: center;
`;

// 「Q.1」などの表示
const QMark = styled.div`
  width: 60px;
  font-size: 1.2rem;
  font-family: 'MuseoModerno';
  font-weight: bold;
  color: ${props => props.theme.colors.primary};
`;

// 「○」「×」の表記
const ResultMark = styled.div`
  width: 40px;
  font-size: 1.4rem;
  font-family: 'MuseoModerno';
  font-weight: bold;
  padding-right: 16px;
  color: ${props => props.theme.colors.secondary};
`;

// 正解テキスト
const CorrectText = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  color: ${props => props.theme.colors.pale};
`;

// プログレスのラップ
const ProgressWrap = styled.div`
  padding: 24px 0;
`;

// プログレスのラップ
const ProgressText = styled.div`
  font-family: 'MuseoModerno';
  font-size: 2rem;
  font-weight: bold;
  color: ${props => props.theme.colors.primary};
  display: flex;
  justify-content: flex-end;
`;

const ButtonWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const QuestionResult: FC<Props> = props => {
  const { question, slug } = props;
  const { resultList } = question;

  /**
   * 結果データをStorage保存
   * - マウント時にデータは揃ってる為、isResultなどは不要
   */
  useEffect(() => {
    const storageQuestion = JSON.parse(localStorage.getItem(slug)) || [];
    const now = moment().tz('Asia/Tokyo');
    const saveStorageData: QuestionResultModelType = {
      time: now.format('YYYY-MM-DD HH:mm:ss'),
      count: storageQuestion.length + 1,
      question_count: question.resultList.length,
      correct_count: question.resultList.count
    };
    localStorage.setItem(slug, JSON.stringify([...storageQuestion, saveStorageData]));
  }, []);

  /**
   * 評価順
   */
  const evaluationNumber = () => {
    if (resultList.count === 10) return 1;
    if (resultList.count <= 9 && resultList.count >= 8) return 2;
    if (resultList.count <= 7 && resultList.count >= 5) return 3;
    if (resultList.count <= 4 && resultList.count >= 2) return 4;
    if (resultList.count <= 3 && resultList.count >= 0) return 5;
  };

  return (
    <Root>
      <ResultList>
        <SectionTitle title={`集計結果`} />
        <ResultUl>
          {resultList.lists.map((item, key) => (
            <ResultLi key={key}>
              <QMark>{item.qmark}</QMark>
              <ResultMark>{item.result}</ResultMark>
              <CorrectText>{item.correct_answer}</CorrectText>
            </ResultLi>
          ))}
        </ResultUl>
      </ResultList>
      <ResultContents>
        <EvaluationText id={evaluationNumber()} />
        <ProgressWrap>
          <ProgressText>{`${resultList.count * 10}%`}</ProgressText>
          <ProgressBar percent={resultList.count * 10} />
        </ProgressWrap>
        <ButtonWrap>
          <NomalButton fullwidth={false} height={40} color={`primary`} text={`再度受ける`} />
          <MultiLink href={`/`}>
            <NomalButton fullwidth={false} height={40} color={`primary`} text={`一覧に戻る`} />
          </MultiLink>
        </ButtonWrap>
      </ResultContents>
    </Root>
  );
};

export default QuestionResult;
