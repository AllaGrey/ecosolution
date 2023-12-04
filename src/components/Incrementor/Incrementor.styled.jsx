import styled from "styled-components";
import { theme } from "../../constants/theme";

export const Counter = styled.div`
    font-family: 'Oswald-Regular';
    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: center;

    @media ${theme.media.tablet} {
        gap: 24px;
    }
`

export const Quantity = styled.span`
    font-size: 48px;
    font-weight: 700;
    line-height: 1;
    color: ${theme.colors.activeColor};

    @media ${theme.media.tablet} {
        font-size: 100px;
    }

    @media ${theme.media.desktop} {
        font-size: 167px;
    }
`

export const Units = styled.span`
    font-size: 24px;
    font-weight: 400;
    line-height: 1;

    @media ${theme.media.tablet} {
        font-size: 28px;
        line-height: 1.7;
    }

    @media ${theme.media.tablet} {
        font-size: 48px;
        line-height: 1;
    }
`