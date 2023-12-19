import styled from 'styled-components';
import { theme } from '../../../constants/theme';

export const SliderBtn = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${theme.colors.activeColor};
  stroke: ${theme.colors.darkTextColor};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: ${theme.transition.cubic};

  &:hover,
  &:focus {
    background-color: ${theme.colors.darkTextColor};
    stroke: ${theme.colors.activeColor};
  }
`;
