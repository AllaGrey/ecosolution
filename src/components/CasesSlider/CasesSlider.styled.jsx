import styled from "styled-components"
import { theme } from "../../constants/theme"

export const CasesSliderStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const StatusBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`

export const ControlButtons = styled.div`
    display: flex;
    gap: 12px;
`

export const SliderControlButton = styled.button`
    width: 66px;
    height: 66px; 
    border-radius: 50%;
    border: 1px solid ${theme.colors.darkTextColor};
    display: flex;
    justify-content: center;
    align-items: center;
    stroke: ${theme.colors.darkTextColor};
    
    &:hover, &:focus {
        border: 1px solid ${theme.colors.activeColor};
        stroke: ${theme.colors.activeColor};
    }

    &:first-child {
        rotate: -135deg;
    }

    &:last-child {
        rotate: 45deg;
    }
`

export const SlideCounter = styled.div`

`

export const SlideContainer = styled.div`
    display: flex;
    overflow: hidden;
`


