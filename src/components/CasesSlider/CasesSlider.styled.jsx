import styled from 'styled-components';
import { theme } from '../../constants/theme';

export const CasesSliderStyled = styled.div`
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
`;

export const StatusBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  position: absolute;
  left: 0;
  right: 0;
  top: -36px;

  @media ${theme.media.tablet} {
    left: calc((100%) / 2);
    border-left: 1px solid ${theme.colors.activeColor};
    padding-left: 9px;
    top: -60px;
  }

  @media ${theme.media.desktop} {
    top: -100px;
    left: calc((100%) / 2);
    border-left: 1px solid ${theme.colors.activeColor};
    padding-left: 161px;
  }
`;

export const ControlButtons = styled.div`
  display: flex;
  gap: 12px;
`;

export const SliderControlButton = styled.button`
  width: 66px;
  height: 66px;
  border-radius: 50%;
  border: 1px solid ${theme.colors.darkTextColor};
  display: flex;
  justify-content: center;
  align-items: center;
  stroke: ${theme.colors.darkTextColor};
  transition: ${theme.transition.cubic};

  &:hover,
  &:focus {
    border: 1px solid ${theme.colors.activeColor};
    stroke: ${theme.colors.activeColor};
  }

  &:first-child {
    rotate: -135deg;
  }

  &:last-child {
    rotate: 45deg;
  }
`;

export const SlideCounter = styled.div`
  font-size: 28px;
  font-weight: 300;
  letter-spacing: -1.12px;
  color: ${theme.colors.lightGrey};
`;

export const CurrentCount = styled.span`
  color: ${theme.colors.darkTextColor};
`;

export const SlideContainer = styled.div`
  display: flex;
  overflow: hidden;
  justify-content: center;
  align-items: center;

  @media ${theme.media.tablet} {
    gap: 24px;
  }

  @media ${theme.media.desktop} {
    gap: 48px;
  }
`;
