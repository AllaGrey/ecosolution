import styled from "styled-components";
import { theme } from "../../constants/theme";

export const ArrowUpBtn = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    rotate: -45deg;
    background-color: ${theme.colors.activeColor};
    stroke: ${theme.colors.darkTextColor};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: ${theme.transition.cubic};

    &:hover, :focus{
        background-color: ${theme.colors.darkTextColor};
        stroke: ${theme.colors.activeColor};
    }
`