import styled from "styled-components"
import { theme } from "../../constants/theme"

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
    cursor: pointer;
`

export const LogoText = styled.p`
    color: ${({ $isScrolling }) =>
        $isScrolling ?
        theme.colors.activeColor :
            theme.colors.darkTextColor};
    font-family: 'Fontspring-DEMO-allroundgothic-thick';
    font-size: 33px;
    font-weight: 500;
    letter-spacing: -1.32px;
    
    ${LogoContainer}:hover &,
    ${LogoContainer}:focus & {
        color: ${theme.colors.activeColor};
    }
`

export const LogoSloganWrapper = styled.div`
    font-family: 'CASaygonText-Regular';
    font-size: 10px;
    line-height: 0.9;
`

export const LogoSlogan = styled.p`
    font-family: 'CASaygonText-Regular';
    font-size: 10px;
    line-height: 0.9;
    letter-spacing: -0.4px;
`

export const SpecialLogoSpan = styled.span`
    color: ${theme.colors.activeColor};
`