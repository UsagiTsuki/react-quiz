import { FC } from 'react';
import styled, { css } from 'styled-components';

type Props = {
  text: string;
  color: string;
  width?: number;
  height?: number;
  fullwidth?: boolean;
  handleClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
};

const Root = styled.div`
  ${({ fullwidth }) =>
    fullwidth
      ? css`
          width: 100%;
        `
      : css`
          width: ${({ width }) => width}px;
        `};
  height: ${({ height }) => height}px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: bold;
  color: ${props => props.theme.textColors.white};
  background: ${props => props.theme.colors[props.color]};
  border-radius: 4px;
  letter-spacing: 2px;
  cursor: pointer;
  transition: all 0.1s ease-in;
  :hover {
    background: ${props => props.theme.hover[props.color]};
    transition: all 0.1s ease-out;
  }
`;

const NomalButton: FC<Props> = props => {
  return (
    <Root fullwidth={props.fullwidth} width={props.width} height={props.height} color={props.color} onClick={props.handleClick}>
      {props.text}
    </Root>
  );
};

NomalButton.defaultProps = {
  width: 142,
  height: 32,
  fullwidth: false
};

export default NomalButton;
