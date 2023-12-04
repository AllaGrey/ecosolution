import styled from "styled-components";
import { theme } from "../../constants/theme";

export const ContactList = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;
`

export const ContactItem = styled.li`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export const ContactType = styled.p`
    letter-spacing: -0.64px
`

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`

export const ContentItem = styled.a`
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    stroke: ${theme.colors.darkTextColor};
    transition: ${theme.transition.cubic};

    &:hover, &:focus{
        stroke: ${theme.colors.activeColor};
    }
`

export const ContentText = styled.span`
    font-size: 20px;
    letter-spacing: -0.8px;

    @media ${theme.media.desktop} {
        font-size: 24px;
        letter-spacing: -0.96px;
    }
`

export const SocialNetworkWrapper = styled.div`
    display: flex;
    gap: 32px;
    stroke: ${theme.colors.darkTextColor};
    transition: ${theme.transition.cubic};

    > * {
        cursor: pointer;
    }

    > *:hover, > *:focus {
        stroke: ${theme.colors.activeColor};
    }

    @media ${theme.media.desktop} {
        gap: 8px;
    }
`