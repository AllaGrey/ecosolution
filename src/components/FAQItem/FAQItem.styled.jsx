import styled from "styled-components";
import { theme } from "../../constants/theme";

export const FAQCard = styled.li`
    display: flex;
    cursor: pointer;
    gap: 8px;
    border-top: 1px solid ${theme.colors.activeColor};
    padding: 16px;
`

export const ContentBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    text-align: justify;
`

export const Question = styled.p`
    font-size: 18px;
`

export const Answer = styled.p`
    font-size: 14px;
`

export const OpenSigns = styled.span`
    color: ${theme.colors.activeColor};
`