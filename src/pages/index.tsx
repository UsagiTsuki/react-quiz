import { NextPage } from 'next';
import styled from 'styled-components';
import LayoutPage from '@/pages/layout';
import Header from '@/components/organisms/header';
import Main from '@/components/organisms/main';
import Detail from '@/components/organisms/detail';
import ResponseQuizType from '@/models/responses/response-quiz-type';
import { useQuizList } from '@/hooks/use-quiz-list';
import { WrapLeftTransition } from '@/components/atoms/animations/left-transition';
import { FadeInUp, WrapFadeInUp } from '@/components/atoms/animations/fade-in-up';
import { getQuizzes } from '@/services/axios-api-lists';

type Props = {};

type staticProps = {
  props: {
    responseQuizLists: ResponseQuizType;
  };
};

const HeaderWrap = styled.div`
  padding: 16px 24px 10px 0;
  @media screen and (min-width: ${props => props.theme.breakpoints.sm}px) {
    padding: 24px 24px 24px 0;
  }
`;

const MainContents = styled.div`
  /* allheight - header - gap*2 */
  height: calc(100vh - 93px - 32px);
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 3;
  display: grid;
  grid-template-columns: 1fr 300px;
`;

const MainWrap = styled.div`
  max-height: 100%;
  margin-right: 24px;
  background: #ecf1f7;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 8px;
    background: ${props => props.theme.colors.primary};
  }
  ::-webkit-scrollbar-thumb {
    color: ${props => props.theme.textColors.black};
    background: ${props => props.theme.colors.secondary};
    border-radius: 0px 0px 10px 10px;
  }
  @media screen and (min-width: ${props => props.theme.breakpoints.sm}px) {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 1;
  }
  @media screen and (min-width: ${props => props.theme.breakpoints.md}px) {
    margin-right: 24px;
  }
`;

const DetailWrap = styled.div`
  opacity: 0;
  visibility: hidden;
  @media screen and (min-width: ${props => props.theme.breakpoints.md}px) {
    opacity: 1;
    visibility: visible;
    transition: opacity 1s ease-in;
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 1;
  }
`;

const IndexPage: NextPage = (props: any) => {
  const { responseQuizLists } = props;
  const quizList = useQuizList(responseQuizLists);

  return (
    <LayoutPage>
      <HeaderWrap>
        <Header inputText={quizList.inputText} handleChange={quizList.onChange} />
      </HeaderWrap>
      <MainContents>
        <MainWrap>
          <WrapFadeInUp>
            <FadeInUp>
              <Main quizList={quizList.lists} listCount={quizList.listCount} handleClick={quizList.onClick} isLoading={false} />
            </FadeInUp>
          </WrapFadeInUp>
        </MainWrap>
        <DetailWrap>
          <WrapLeftTransition>
            {Object.keys(quizList.selectedQuiz).length ? <Detail quiz={quizList.selectedQuiz} isLoading={false} /> : null}
          </WrapLeftTransition>
        </DetailWrap>
      </MainContents>
    </LayoutPage>
  );
};

export const getStaticProps = async (context): Promise<staticProps> => {
  const { data } = await getQuizzes();
  return { props: { responseQuizLists: data } };
};

export default IndexPage;
