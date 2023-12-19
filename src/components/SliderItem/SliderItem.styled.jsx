import styled from 'styled-components';
import { theme } from '../../constants/theme';

export const SliderItemStyled = styled.div`
  overflow: hidden;
`;

export const Slide = styled.div``;

export const ImageWrapper = styled.div``;

export const Img = styled.img`
  object-fit: cover;
`;
export const InfoBlockWrapper = styled.div`
  padding: 0px 12px;
  width: inherit;
`;

export const InfoTopBlock = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 21px 0;
  border-bottom: 1px solid ${theme.colors.activeColor};
  width: inherit;
`;

export const Region = styled.p`
  max-width: 175px;
  font-size: 18px;
  letter-spacing: -0.72px;
`;

export const InfoBottomBlock = styled.div`
  padding: 12px 0;
  font-size: 12px;
  letter-spacing: -0.48px;
  display: flex;
  justify-content: space-between;
  width: inherit;
`;

export const InfoText = styled.p``;
