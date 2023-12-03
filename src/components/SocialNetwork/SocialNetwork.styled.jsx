import styled from "styled-components";
import { theme } from "../../constants/theme";

export const IconWrapper = styled.a`
    &:hover, :focus {
        stroke: ${theme.colors.activeColor};
    }
`