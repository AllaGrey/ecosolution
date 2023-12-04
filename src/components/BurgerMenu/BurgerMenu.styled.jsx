import styled from "styled-components";
import { theme } from "../../constants/theme";

export const MenuBackdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: ${({ $isOpen }) => !$isOpen ? "none" : null};
    background-color: transparent;
    backdrop-filter: blur(2px);
    padding: 10px;
    z-index: 3;
`

export const MenuContainer = styled.div`
    position: absolute;
    width: 320px;
    height: 500px;
    top: 20px;
    right: 20px;
    background-color: ${theme.colors.darkBgdColor};
    padding: 24px;
    border-radius: 25px;
    color: ${theme.colors.lightColor};
    stroke: ${theme.colors.lightColor};
    z-index: 1;

    @media ${theme.media.tablet} {
        top: 35px;
        right: 30px;
    }

    @media ${theme.media.desktop} {
        width: 365px;
        height: 550px;
        right: 100px;
    }
`

export const MenuTopBar = styled.div`
    padding-bottom: 5px;
    border-bottom: 1px solid ${theme.colors.lightColor};
`

export const CloseButton = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: ${theme.transition.cubic};

    &:hover {
        color: ${theme.colors.activeColor};
        stroke: ${theme.colors.activeColor};
    }
`

export const Text = styled.span`
    font-size: 20px;
`
export const ListContainer = styled.nav`
    padding-top: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
    height: 100%;
    padding-bottom: 24px;

`

export const MenuList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export const SocialNetworksWrapper = styled.div`
    display: flex;
    gap: 8px;
    fill: ${theme.colors.lightColor};
    > * {
        cursor: pointer;
    }

    > *:hover, > *:focus {
        stroke: ${theme.colors.activeColor};
        fill: ${theme.colors.activeColor};
        stroke: ${theme.colors.activeColor};
    }

`