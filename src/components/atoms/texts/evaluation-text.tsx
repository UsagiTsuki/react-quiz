import { FC, useState, useCallback } from 'react';
import styled from 'styled-components';
import Evaluations from '@/consts/evaluation-text';

// 評価テキスト
const Root = styled.div`
  font-size: 5rem;
  font-weight: bold;
  color: ${props => props.color};
  background-color: ${props => props.theme.linkHover.primary};
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`;

const EvaluationText = props => {
  const item = Evaluations.filter(item => item.id == props.id)[0];
  return <Root color={item.color}>{item.text}</Root>;
};

export default EvaluationText;
