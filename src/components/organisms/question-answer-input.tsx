/**
 * 問題回答のフォーマット 入力ver
 *
 */
import { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import QuestionModelType from '@/models/sources/question.model';
import InputSearch from '@/components/atoms/inputs/input-search';
import { answerMapType } from '@/hooks/use-question';

type Props = {
  question: QuestionModelType;
  mapAnswer: answerMapType;
};

const Root = styled.div`
  width: 220px;
`;
const InputRoot = styled.div`
  padding-top: 48px;
  > input {
    border: 1px solid #ddd;
    padding: 8px 8px 8px 4px;
  }
`;

const QuestionAnswerInput: FC<Props> = props => {
  const { question, mapAnswer } = props;

  return (
    <Root>
      <InputRoot>
        <InputSearch name={question.id} value={mapAnswer.map[question.id] || ''} handleChange={mapAnswer.setInput} />
      </InputRoot>
    </Root>
  );
};

export default QuestionAnswerInput;
