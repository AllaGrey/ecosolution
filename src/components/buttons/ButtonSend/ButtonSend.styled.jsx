import styled from 'styled-components';
import { theme } from '../../../constants/theme';

export const Button = styled.button`
  height: 40px;
  padding: 10px 2px 10px 16px;
  border: 1px solid ${theme.colors.activeColor};
  border-radius: 500px;
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: ${theme.transition.cubic};

  &:hover,
  &:focus {
    color: ${theme.colors.activeColor};
    background-color: ${theme.colors.darkTextColor};
  }
`;
export const ButtonText = styled.span`
  line-height: 1.12;
  letter-spacing: -0.64px;
`;

export const IconWrapper = styled.div`
  width: 32px;
  height: 32px;
  background-color: ${theme.colors.activeColor};
  border-radius: 50%;
  stroke: ${theme.colors.darkTextColor};
  rotate: 45deg;
  display: flex;
  justify-content: center;
  align-items: center;
`;
