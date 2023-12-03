import styled from "styled-components";
import { theme } from "../../constants/theme";

export const Item = styled.li`
    background-color: ${theme.colors.greyBgdColor};
    padding: 13px;
    height: 200px;
    max-width: calc(50% - 12px);
`

export const ItemTopBlock = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 4px;
    padding-bottom: 33px;
    border-bottom: 1px solid ${theme.colors.activeColor};
`

export const BottomBlock = styled.div`
    padding-top: 12px;
    font-size: 14px;
`

export const ItemTitle = styled.h5`
    font-family: 'Oswald-Regular';
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    text-transform: uppercase;
`

export const ItemText = styled.p`
    text-align: justify;
`