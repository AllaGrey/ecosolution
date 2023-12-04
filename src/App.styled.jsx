import styled from "styled-components";
import { theme } from "./constants/theme";


export const Container = styled.div`
    padding: 0 20px;
    width: 100%;
    margin: 0 auto;

    @media ${theme.media.tablet} {
        padding: 0 30px;
    }

    @media ${theme.media.desktop} {
        padding: 0 100px;
        width: 1280px;
    }
`
