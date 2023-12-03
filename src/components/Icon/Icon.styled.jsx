import styled from "styled-components";

export const IconStyled = styled.use`
    fill: ${({fill}) => fill ? fill : 'transparent'};
    /* fill: transparent; */
    stroke: ${({stroke}) => stroke ? stroke : 'inherit'};

    &:hover, &:focus {
        fill: ${({fill}) => fill ? fill : 'inherit'};
        stroke: ${({stroke}) => stroke ? stroke : 'inherit'};
    }
`