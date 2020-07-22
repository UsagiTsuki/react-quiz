import { FC, useEffect } from 'react';
import styled from 'styled-components';
import LayoutPage from '@/pages/layout';
import { useQuestion } from '@/hooks/use-question';
import ResponseQuestionType from '@/models/responses/response-question-type';
import QuizModelType from '@/models/sources/quiz.model';
import NomalButton from '@/components/atoms/buttons/nomal-button';
import QuestionContents from '@/components/organisms/question-contents';
import { getQuizzes, getQuizBySlug, getQuestionsByQuizId } from '@/services/axios-api-lists';
import QuestionResult from '@/components/organisms/question-result';

type staticProps = {
  props: {
    responseQuestionLists: ResponseQuestionType;
    quiz: QuizModelType;
    slug: string;
  };
};

const HeaderWrap = styled.div`
  padding: 16px 24px 10px 0;
  @media screen and (min-width: ${props => props.theme.breakpoints.sm}px) {
    padding: 24px 24px 24px 24px;
  }
`;

const MainContents = styled.div`
  height: calc(100vh - 93px - 16px);
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 3;
  display: grid;
  background: #ecf1f7;
  border-radius: 4px;
`;

const MainWrap = styled.div`
  width: calc(100vw - 220px - 48px - 16px);
  height: calc(100vh - 93px - 16px - 48px);
  margin: 24px;
  background: #fff;
  padding: 64px;
  border-radius: 4px;
`;
const Title = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
  color: ${props => props.theme.textColors.black};
`;

const SubTitle = styled.div`
  font-size: 1rem;
  font-weight: bold;
  color: ${props => props.theme.textColors.black};
  margin-top: 0.5rem;
`;

const ButtonWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const QuestionPage = props => {
  const { quiz, responseQuestionLists, slug } = props;
  const question = useQuestion(responseQuestionLists);

  return (
    <LayoutPage>
      <HeaderWrap>
        <Title>{quiz.name}</Title>
        <SubTitle>{quiz.details}</SubTitle>
      </HeaderWrap>
      <MainContents>
        <MainWrap>
          {!question.isResult ? (
            <>
              <QuestionContents question={question.selectedQuestion} mapAnswer={question.mapAnswer} isLoading={false} />
              <ButtonWrap>
                <NomalButton fullwidth={false} height={40} color={`primary`} text={`前へ`} handleClick={question.prev} />
                {question.current === 9 ? (
                  <NomalButton fullwidth={false} height={40} color={`primary`} text={`結果画面へ`} handleClick={question.toggleResult} />
                ) : (
                  // <NomalButton fullwidth={false} height={40} color={`primary`} text={`次へ`} handleClick={question.next} />
                  <NomalButton fullwidth={false} height={40} color={`primary`} text={`結果画面へ`} handleClick={question.toggleResult} />
                )}
              </ButtonWrap>
            </>
          ) : (
            <QuestionResult question={question} slug={slug} />
          )}
        </MainWrap>
      </MainContents>
    </LayoutPage>
  );
};

export const getStaticPaths = async () => {
  const { data } = await getQuizzes();
  const paths = data.contents.map(quiz => `/questions/${quiz.slug}`);
  return {
    paths,
    fallback: false
  };
};

export const getStaticProps = async ({ params }): Promise<staticProps> => {
  const { slug } = params;
  const { data } = await getQuizBySlug(slug);
  const quizId = data.contents ? data.contents[0].id : '';
  const { data: responseQuestionLists } = await getQuestionsByQuizId(quizId);

  return { props: { responseQuestionLists, quiz: data.contents[0], slug } };
};

export default QuestionPage;
