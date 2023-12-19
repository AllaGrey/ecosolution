import styled from 'styled-components';
import { theme } from '../../constants/theme';

export const ContactSectionStyled = styled.section`
  padding: 18px 0 36px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  @media ${theme.media.tablet} {
    gap: 40px;
    padding: 50px 0 25px 0;
  }

  @media ${theme.media.tablet} {
    gap: 120px;
    padding: 60px 0 120px 0;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media ${theme.media.tablet} {
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
  }
`;
