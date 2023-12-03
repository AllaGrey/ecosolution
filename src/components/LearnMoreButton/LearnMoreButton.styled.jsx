import styled from "styled-components";
import { theme } from "../../constants/theme";


export const Button = styled.a`
    width: fit-content;
    height: 40px;
    border: 1px solid ${theme.colors.activeColor};
    border-radius: 500px;
    padding: 5px 3px 5px 16px;
    display: flex; 
    justify-content: space-between;
    align-items: center;
    gap: 12px;

    &:hover, &:focus {
        border: 1px solid ${theme.colors.darkTextColor};
        background-color: ${theme.colors.darkTextColor};
        color: ${theme.colors.activeColor};
    }
`

export const ButtonText = styled.span`
    line-height: 1.12;
    letter-spacing: -0.64px;
`

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
`