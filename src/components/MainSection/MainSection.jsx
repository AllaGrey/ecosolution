import { LearnMoreButton } from "../LearnMoreButton/LearnMoreButton"
import { MainSectionStyled, Title, ArticleBlock, Text } from "./MainSection.styled"


export const MainSection = () => {

    return (
        <MainSectionStyled id="section-main">
            <Title>RENEWABLE ENERGY<br />For any task</Title>
            <ArticleBlock>
                <Text>Development and implementation of renewable non-polluting energy sources, generating power generation using energy wind, sun, water, biomass</Text>
                <LearnMoreButton/>
            </ArticleBlock>
        </MainSectionStyled>
    )
}