import styled from "styled-components";
import { theme } from "../../constants/theme";

export const MainSectionStyled = styled.section`
    padding: 140px 0 24px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    border-bottom: 1px solid ${theme.colors.activeColor};
`

export const Title = styled.h1`
    font-family: 'Oswald-Regular';
    font-size: 36px;
    line-height: 1;
    margin-right: auto;
`

export const Text = styled.p`
    width: 100%;
    text-align: justify;

`