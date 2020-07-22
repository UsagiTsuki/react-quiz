/**
 * メインコンテンツ
 *
 */
import { FC, useState, useCallback } from 'react';
import styled from 'styled-components';
import SectionTitle from '@/components/atoms/titles/section-title';
import GridLinkList from '@/components/organisms/grid-link-list';
import QuizModelType from '@/models/sources/quiz.model';
import { InOrderRightSlide, InOrderRightSlideChildren } from '@/components/atoms/animations/in-order-right-slide';
type Props = {
  isLoading: boolean;
  quizList: QuizModelType[];
  listCount: number;
  handleClick: (quizId: number) => void;
};

const Root = styled.div`
  padding: 24px;
  background: #ecf1f7;
  border-radius: 4px;
`;

const MainHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Count = styled.div`
  font-size: 1.2rem;
  font-family: 'MuseoModerno', cursive;
  color: ${props => props.theme.textColors.black};
  letter-spacing: 2px;
`;

const ListWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 16px;
  padding-top: 32px;
`;

const Main: FC<Props> = props => {
  const { quizList, listCount, isLoading } = props;

  return (
    <Root>
      <MainHeader>
        <SectionTitle title={`クイズ一覧`} />
        <Count>
          {listCount}
          <span style={{ fontSize: '0.8rem' }}>件</span>
        </Count>
      </MainHeader>
      <InOrderRightSlide>
        <ListWrap>
          {quizList
            ? quizList.map((quiz, i) => {
                return (
                  <InOrderRightSlideChildren number={i} key={quiz.id}>
                    <GridLinkList
                      title={quiz.name}
                      tagName={quiz.category_name || null}
                      key={quiz.id}
                      handleClick={() => props.handleClick(quiz.id)}
                      isActive={quiz.is_active}
                    />
                  </InOrderRightSlideChildren>
                );
              })
            : null}
        </ListWrap>
      </InOrderRightSlide>
    </Root>
  );
};

export default Main;
