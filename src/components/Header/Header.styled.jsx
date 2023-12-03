import styled from "styled-components";
import { theme } from "../../constants/theme";


export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-around;
    padding-top: 36px;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    background-color: ${({ $isScrolling }) =>
        $isScrolling ? 'transparent' :
            theme.colors.lightBgdColor};
            
`
export const MenuButton = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${theme.colors.lightActiveColor};
    stroke: ${theme.colors.deepDarkColor};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover, :focus {
        background-color: ${theme.colors.activeColor};
    }
`