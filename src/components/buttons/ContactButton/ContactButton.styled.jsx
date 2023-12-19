import styled from 'styled-components';
import { theme } from '../../../constants/theme';

export const ContactBtn = styled.a`
  width: 130px;
  height: 40px;
  border-radius: 500px;
  background-color: ${theme.colors.activeColor};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin: 0 auto;
  transition: ${theme.transition.cubic};

  &:hover,
  &:focus {
    background-color: ${theme.colors.darkTextColor};
    color: ${theme.colors.activeColor};
  }
`;

export const Text = styled.span``;

export const Ellipse = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 14px;
  height: 14px;
  background-color: ${theme.colors.darkTextColor};
  border-radius: 50%;
  rotate: 135deg;
  transition: ${theme.transition.cubic};

  ${ContactBtn}:hover &, ${ContactBtn}:focus & {
    background-color: ${theme.colors.activeColor};
  }
`;
