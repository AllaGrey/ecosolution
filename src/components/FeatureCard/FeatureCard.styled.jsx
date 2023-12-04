import styled from "styled-components";
import { theme } from "../../constants/theme";

export const Item = styled.li`
    background-color: ${theme.colors.greyBgdColor};
    padding: 13px;
    min-height: 200px;

    @media ${theme.media.tablet} {
        min-width: 135px;
    }

    @media ${theme.media.desktop} {
        padding: 24px;
    }
`

export const ItemTopBlock = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 4px;
    padding-bottom: 33px;
    border-bottom: 1px solid ${theme.colors.activeColor};

    @media ${theme.media.tablet} {
        padding-bottom: 51px;
        gap: 8px;
    }
    @media ${theme.media.desktop} {
        padding-bottom: 94px;
        justify-content: center;
        gap: 11px;

        &>svg{
            width: 24px;
            height: 24px;
        }
    }
`

export const BottomBlock = styled.div`
    padding-top: 12px;
    font-size: 14px;
    letter-spacing: -0.56px;

    @media ${theme.media.desktop} {
        font-size: 16px;
        letter-spacing: -0.64px;
        padding-top: 24px;
    }
`

export const ItemTitle = styled.h5`
    font-family: 'Oswald-Regular';
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    text-transform: uppercase;

    @media ${theme.media.tablet} {
        font-size: 18px;
        line-height: 1.3;
    }

    @media ${theme.media.desktop} {
        font-size: 32px;
        line-height: 1.5;
    }
`

export const ItemText = styled.p`
    text-align: justify;
`