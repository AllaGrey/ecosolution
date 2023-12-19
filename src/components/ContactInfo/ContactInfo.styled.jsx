import styled from 'styled-components';
import { theme } from '../../constants/theme';

export const ContactDetail = styled.a`
  transition: ${theme.transition.cubic};
  &:not(:last-child) {
    cursor: pointer;

    &:hover,
    &:focus {
      color: ${theme.colors.activeColor};
    }
  }
`;
