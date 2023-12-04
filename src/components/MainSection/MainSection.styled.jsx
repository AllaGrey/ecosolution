import styled from "styled-components";
import { theme } from "../../constants/theme";

export const MainSectionStyled = styled.section`
    padding: 140px 0 24px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    border-bottom: 1px solid ${theme.colors.activeColor};

    @media ${theme.media.tablet} {
        padding: 164px 0 24px 0;
        flex-direction: row;
        align-items: flex-start;
        gap: 65px;
    }

    @media ${theme.media.desktop} {
        padding: 200px 0 24px 0;
    }
`

export const Title = styled.h1`
    font-family: 'Oswald-Regular';
    font-size: 36px;
    line-height: 1;
    margin-right: auto;
    text-transform: uppercase;

    @media ${theme.media.tablet} {
        min-width: 300px;
        font-size: 48px;
        >*{
            width: calc(100% / 2);
        }
    }

    @media ${theme.media.desktop} {
        font-size: 64px;
    }
`

export const ArticleBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 43px;

    @media ${theme.media.tablet} {
        width: 342px;
        gap: 43px;
    }

    @media ${theme.media.desktop} {
        width: 463px;
        padding-right: 100px;
        gap: 20px;
    }
`

export const Text = styled.p`
    text-align: justify;
    letter-spacing: -0.64px;

`