import styled from 'styled-components';
import { theme } from '../../constants/theme';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 36px 20px 5px 20px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  transition: ${theme.transition.cubic};
  background-color: ${({ $isScrolling }) =>
    $isScrolling ? 'transparent' : theme.colors.lightBgdColor};

  @media ${theme.media.tablet} {
    padding: 36px 30px 5px 30px;
  }

  @media ${theme.media.desktop} {
    padding: 36px 100px 5px 100px;
    max-width: 1280px;
  }
`;

export const MenuWrapper = styled.div`
  display: flex;
  gap: 12px;
`;

export const MenuButton = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${theme.colors.lightActiveColor};
  stroke: ${theme.colors.deepDarkColor};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: ${theme.transition.cubic};

  &:hover,
  &:focus {
    background-color: ${theme.colors.activeColor};
  }
`;
