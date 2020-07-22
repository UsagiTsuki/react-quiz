/**
 * 問題コンテンツ
 *
 */
import { FC, useState, useCallback } from 'react';
import styled from 'styled-components';
import QuestionModelType from '@/models/sources/question.model';
import QuestionAnswerSelect from '@/components/organisms/question-answer-select';
import QuestionAnswerInput from '@/components/organisms/question-answer-input';
import { answerMapType } from '@/hooks/use-question';

type Props = {
  isLoading: boolean;
  question: QuestionModelType;
  mapAnswer: answerMapType;
};

const Root = styled.div``;

const MainHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Contents = styled.div`
  height: 50vh;
`;

const QMark = styled.div`
  font-size: 1.6rem;
  font-family: 'MuseoModerno';
  font-weight: bold;
  padding-right: 16px;
  color: ${props => props.theme.colors.secondary};
`;

const QuestionContents: FC<Props> = props => {
  const { question, mapAnswer, isLoading } = props;

  return (
    <Root>
      <MainHeader>
        <QMark>Q.{question.question_number}</QMark>
        <div dangerouslySetInnerHTML={{ __html: question.question_text }} />
      </MainHeader>
      <Contents>
        {question.is_input ? (
          <QuestionAnswerInput mapAnswer={mapAnswer} question={question} />
        ) : (
          <QuestionAnswerSelect mapAnswer={mapAnswer} question={question} />
        )}
      </Contents>
    </Root>
  );
};

export default QuestionContents;
