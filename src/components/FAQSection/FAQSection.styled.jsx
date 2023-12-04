import styled from "styled-components";
import { theme } from "../../constants/theme";

export const FAQSectionStyled = styled.section`
    padding: 18px 0;

    @media ${theme.media.tablet} {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 24px;
        align-items: start;
        padding: 50px 0;

        >ul{
            grid-column-start: 1;
            grid-row-start: 1;
            grid-row-end: 3;
            
        }

        >h2{
            grid-column: 2;
        }
    }

    @media ${theme.media.desktop} {
        padding: 60px 0;
    }
`
export const ContactBlock = styled.div`
    @media ${theme.media.tablet} {
        grid-column: 2;
        align-self: self-end;
        padding-bottom: 30px;
    }
`

export const Text = styled.p`
    text-align: center;
    margin-bottom: 12px;
`
