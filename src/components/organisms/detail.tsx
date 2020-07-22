/**
 * 詳細コンテンツ
 *
 */
import { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import QuizModelType from '@/models/sources/quiz.model';
import QuestionResultModelType from '@/models/sources/question-result.model';
import NomalButton from '@/components/atoms/buttons/nomal-button';
import { LeftTransition } from '@/components/atoms/animations/left-transition';
import MultiLink from '@/components/atoms/links/multi-link';

type Props = {
  isLoading: boolean;
  quiz: QuizModelType;
};

const Root = styled.div`
  height: 100%;
  padding: 24px;
  margin-right: 24px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 200px 1fr 50px;
`;

const Title = styled.p`
  font-size: 1rem;
  font-weight: bold;
`;

const Detail = styled.p`
  font-size: 0.8rem;
  color: ${props => props.theme.colors.primary};
  padding-top: 10px;
`;

const NoImage = styled.div`
  width: 100%;
  padding: 32px 0;
  border-radius: 4px;
  background: #efefef;
  font-size: 0.9rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.pale};
`;

type QuestionResultType = {
  display: 'block' | 'none';
};
const QuestionResult = styled.div<QuestionResultType>`
  width: 100%;
  padding: 32px 0;
  display: ${({ display }) => display};
`;

const QuestionResultLi = styled.li`
  display: flex;
  font-size: 0.8rem;
  color: ${props => props.theme.colors.primary};
  margin-top: 8px;
  > div {
    padding-right: 8px;
  }
  > div:last-child {
    font-weight: bold;
    color: ${props => props.theme.colors.secondary};
  }
`;

const Border = styled.hr`
  margin: 16px 0;
  color: ${props => props.theme.colors.pale};
`;

const Main: FC<Props> = props => {
  const { quiz, isLoading } = props;
  const resultLists = (JSON.parse(localStorage.getItem(quiz.slug)) as QuestionResultModelType[]) || [];

  const filterResultList = () => {
    return resultLists.length <= 5 ? resultLists : resultLists.filter(result => result.count >= resultLists.length - 4);
  };

  return (
    <LeftTransition>
      <Root>
        <div>
          <Title>{quiz.name}</Title>
          <Detail>{quiz.details}</Detail>
          <Border />
          <NoImage>
            <p>No Image</p>
          </NoImage>
          <QuestionResult display={resultLists.length ? 'block' : 'none'}>
            <Title>過去回答内容</Title>
            <ul>
              {filterResultList().map((result, i) => (
                <QuestionResultLi key={i}>
                  <div>{result.count}回目</div>
                  <div>{result.time}</div>
                  <div>{`${result.correct_count}/${result.question_count}`}</div>
                </QuestionResultLi>
              ))}
            </ul>
          </QuestionResult>
        </div>
        <div></div>
        <MultiLink href={{ pathname: `questions/[slug]` }} as={`questions/${quiz.slug}`}>
          <NomalButton fullwidth={true} height={40} color={`primary`} text={`解いてみる`} />
        </MultiLink>
      </Root>
    </LeftTransition>
  );
};

export default Main;
