import { LearnMoreButton } from "../LearnMoreButton/LearnMoreButton"
import { MainSectionStyled, Title, Text } from "./MainSection.styled"


export const MainSection = () => {

    return (
        <MainSectionStyled id="main">
            <Title>RENEWABLE ENERGY<br />For any task</Title>
            <Text>Development and implementation of renewable non-polluting energy sources, generating power generation using energy wind, sun, water, biomass</Text>
            <LearnMoreButton/>
        </MainSectionStyled>
    )
}