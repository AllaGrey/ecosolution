import styled from "styled-components";
import { theme } from "../../constants/theme";
export const FooterStyled = styled.footer`

    border-top: 1px solid ${theme.colors.activeColor};
    padding: 24px 0;
    letter-spacing: -0.64px;

    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
    row-gap: 24px;
    
    @media ${theme.media.tablet} {
        grid-template-columns: 1fr 1fr 1fr;
    }
`

export const BtnWrapper = styled.div`
    @media ${theme.media.tablet} {
        justify-self: self-end;
    }
`

export const SocialNetworkWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 8px;
    stroke: ${theme.colors.darkTextColor};
    grid-column-start: 1;
    grid-column-end: 3;

    @media ${theme.media.tablet} {
        grid-column-start: 2;
        grid-column-end: 2;
        grid-row-start: 1;
        grid-row-end: 1;
    }
`

export const ContactInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    grid-column-start: 1;
    grid-column-end: 3;

    @media ${theme.media.tablet} {
        flex-direction: row;
        justify-content: space-between;
        grid-column-start: 1;
        grid-column-end: 4;
    }
`