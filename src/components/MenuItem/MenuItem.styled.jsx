import styled from 'styled-components';
import { theme } from '../../constants/theme';

export const ItemStyled = styled.li`
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  font-size: 24px;
  color: ${theme.colors.greyTextColor};
  stroke: ${theme.colors.lightGrey};
  transition: ${theme.transition.cubic};

  &:hover {
    color: ${theme.colors.lightColor};
    stroke: ${theme.colors.lightColor};
  }
`;

export const MenuLink = styled.a`
  color: ${({ $isActiveSection }) =>
    $isActiveSection ? theme.colors.activeColor : 'inherit'};
  transition: ${theme.transition.cubic};

  &:hover {
    color: inherit;
  }
`;

export const IconWrapper = styled.div``;
