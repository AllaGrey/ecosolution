import styled from "styled-components";
import { theme } from "../../constants/theme";

export const Button = styled.a`
    @media screen and (max-width: 768px) {
        display: none;
    }

    height: 40px;
    border-radius: 500px;
    background-color: ${theme.colors.activeColor};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    margin: 0 auto;
    padding: 0 16px;
    cursor: pointer;
    transition: ${theme.transition.cubic};

    &:hover, &:focus {
        background-color: ${theme.colors.darkTextColor};
        color: ${theme.colors.activeColor};
    }
`

export const ButtonText = styled.span`
    
`

export const Ellipse = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 14px;
    height: 14px;
    background-color: ${theme.colors.darkTextColor};
    border-radius: 50%;
    rotate: 135deg;

    ${Button}:hover &, ${Button}:focus & {
        background-color: ${theme.colors.activeColor};
        stroke: ${theme.colors.darkTextColor};
    }
`