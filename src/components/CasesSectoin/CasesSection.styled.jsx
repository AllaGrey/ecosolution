import styled from "styled-components";
import { theme } from "../../constants/theme";

export const CasesSectionStyled = styled.section`
    padding: 18px 0;
`

export const CounterBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 100px;
    padding-bottom: 18px;

    @media ${theme.media.tablet} {
        gap: 135px;
        padding-bottom: 50px;
    }

    @media ${theme.media.desktop} {
        gap: 120px;
        padding-bottom: 60px;
        
    }
`

export const CasesBlock = styled.div`
    padding: 18px 0;
    display: flex;
    flex-direction: column;
    gap: 24px;

    @media ${theme.media.tablet} {
        padding: 50px 0;
        gap: 0;

        >h2{
            max-width: 300px;
        }
    }

    @media ${theme.media.desktop} {
        padding: 60px 0;

        >h2{
            max-width: 400px;
        }
    }
`

