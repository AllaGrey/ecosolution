import styled from 'styled-components';
import { theme } from '../../constants/theme';

export const TitleStyled = styled.h2`
  font-family: 'Oswald-Regular';
  font-size: 28px;
  font-weight: 400;
  line-height: 1;
  text-transform: uppercase;

  @media ${theme.media.tablet} {
    font-size: 36px;
  }

  @media ${theme.media.desktop} {
    font-size: 48px;
  }
`;
