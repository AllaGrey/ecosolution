import styled from "styled-components";
import { theme } from "../../constants/theme";
export const FooterStyled = styled.footer`
    display: flex;
    flex-direction: column;
    gap: 24px;
    border-top: 1px solid ${theme.colors.activeColor};
    padding: 24px 0;
`

export const FooterTopBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const SocialNetworkWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 8px;
    stroke: ${theme.colors.darkTextColor};
`

export const ContactInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
`