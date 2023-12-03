import styled from "styled-components";
import  {theme}  from "../../constants/theme";

export const ItemStyled = styled.li`
    display: flex;
    align-items: center;
    gap: 6px;
    cursor: pointer;
    font-size: 24px;

    &:hover {
        color: ${theme.colors.activeColor};
        stroke: ${theme.colors.activeColor};
    }
`

export const MenuLink = styled.a`
    color: inherit;

    &:hover {
        color: inherit;
    }
`

export const IconWrapper = styled.div`

`