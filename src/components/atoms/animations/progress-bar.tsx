import { FC, useState, useEffect } from 'react';
import styled from 'styled-components';

type Props = {
  percent: number;
};
const Root = styled.div`
  background: #f1f1f1;
  border-radius: 4px;
`;

const Bar = styled.div`
  width: ${({ percent }) => percent}%;
  background: ${props => props.theme.colors.secondary};
  padding: 10px 0;
  transition: width 1s ease-in-out;
  border-radius: 4px;
`;

const ProgressBar: FC<Props> = props => {
  const [percent, setPercent] = useState(0);

  const timeoutID = setTimeout(() => {
    setPercent(props.percent);
  }, 400);

  useEffect(() => {
    return clearTimeout(timeoutID);
  }, [percent]);

  return (
    <Root>
      <Bar percent={percent} />
    </Root>
  );
};

ProgressBar.defaultProps = {
  percent: 0
};

export default ProgressBar;
