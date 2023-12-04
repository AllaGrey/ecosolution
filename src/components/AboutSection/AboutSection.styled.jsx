import styled from "styled-components";
import { theme } from "../../constants/theme";

export const AboutSectionStyled = styled.section`
    padding: 24px 0;

    @media ${theme.media.tablet} {
        padding: 24px 0 100px 0;
    }
`
export const MainBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-bottom: 36px;
`
export const ContactBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;

    @media ${theme.media.tablet} {
        flex-direction: row;
        justify-content: space-between;
    }
`

export const ImageWrapper = styled.div`
    
`

export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 85px 0;
    @media ${theme.media.tablet} {
        flex-direction: row;
        justify-content: space-between;
        
        >*{
            width: calc(100% / 2);
        }
    }
`

export const TextWrapper = styled.div`
    @media ${theme.media.tablet} {
        width: 342px;
        display: flex;
        justify-content: space-between;
    }

    @media ${theme.media.desktop} {
        width: 463px;
    }
`

export const Text = styled.a`
    text-align: justify;
    letter-spacing: -0.64px;
    transition: ${theme.transition.cubic};

    &:not(:last-child) {
        cursor: pointer;

        &:hover, &:focus {
        color: ${theme.colors.activeColor};
    }
    }

    @media screen and (max-width: 767px){
        &:last-child {
            display: none;
        }
    }    
`

export const ArticleText = styled.p`
    letter-spacing: -0.64px;
    @media ${theme.media.tablet} {
        text-align: justify;
        position: relative;
        &::before {
            content: '';
            position: absolute;
            left: -11px;
            top: 0;
            bottom: 0;
            width: 1px;
            background-color: ${theme.colors.activeColor};
        }
        
    }

    @media ${theme.media.desktop} {
        max-width: 390px;
        &::before {
            content: '';
            position: absolute;
            left: -160px;
            top: 0;
            bottom: 0;
            width: 1px;
            background-color: ${theme.colors.activeColor};
        }
        
    }
`

export const FeaturesList = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 24px;

    @media ${theme.media.tablet} {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
`

export const FeatureImageWrapper = styled.div`
    @media screen and (max-width: 767px){
        display: none;
    } 

    @media ${theme.media.tablet} {
        max-width: 100%;
        &:not(:last-child){
            grid-column-start: 3;
            grid-column-end: 5;
            grid-row-start: 1;
            grid-row-end: 1;
        }

        &:last-child{
            grid-column-start: 1;
            grid-column-end: 3;
            grid-row-start: 2;
            grid-row-end: 2;
        }
    }

`