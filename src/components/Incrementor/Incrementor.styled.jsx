import styled from "styled-components";
import { theme } from "../../constants/theme";

export const Counter = styled.div`
    font-family: 'Oswald-Regular';
    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: center;
`

export const Quantity = styled.span`
    font-size: 48px;
    font-weight: 700;
    line-height: 1;
    color: ${theme.colors.activeColor}
`

export const Units = styled.span`
    font-size: 24px;
    font-weight: 400;
    line-height: 1;
`