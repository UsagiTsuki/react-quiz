/**
 * 問題回答のフォーマット 選択ver
 *
 */
import { FC } from 'react';
import styled from 'styled-components';
import QuestionModelType from '@/models/sources/question.model';
import NomalRadio from '@/components/atoms/radios/nomal-radio';
import { answerMapType } from '@/hooks/use-question';

type Props = {
  question: QuestionModelType;
  mapAnswer: answerMapType;
};

const Root = styled.div``;
const RadioList = styled.ul`
  padding-top: 48px;
  > li {
    padding-bottom: 24px;
  }
`;

const QuestionAnswerSelect: FC<Props> = props => {
  const { question, mapAnswer } = props;

  return (
    <Root>
      <RadioList>
        {[...Array(4)].map((_, i) => (
          <li key={i}>
            <NomalRadio
              name={question.id}
              id={question[`answer${i + 1}`]}
              text={question[`answer${i + 1}`]}
              checked={mapAnswer.map[question.id] === question[`answer${i + 1}`]}
              handleChange={mapAnswer.setCheck}
            />
          </li>
        ))}
      </RadioList>
    </Root>
  );
};

export default QuestionAnswerSelect;
