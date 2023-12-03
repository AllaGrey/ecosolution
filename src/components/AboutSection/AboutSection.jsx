
import mainMobile1x from '../../assets/images/mainMobile1x.jpg'
import mainMobile2x from '../../assets/images/mainMobile2x.jpg'
import mainTablet1x from '../../assets/images/mainTablet1x.jpg'
import mainTablet2x from '../../assets/images/mainTablet2x.jpg'
import mainDesktop1x from '../../assets/images/mainDesktop1x.jpg'
import mainDesktop2x from '../../assets/images/mainDesktop2x.jpg'
import { Title } from "../Title/Title"
import { FeatureCard } from "../FeatureCard/FeatureCard"
import { FEATURES } from '../../constants/FEATURES'
import { AboutSectionStyled, Text, ContactBlock, MainBlock, FeaturesList, ImageWrapper } from "./AboutSection.styled"

export const AboutSection = () => {

    return (
        <AboutSectionStyled id="about">
            <MainBlock>
                <ContactBlock>
                    <Text>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</Text>
                    <Text>office@ecosolution.com</Text>
                </ContactBlock>
                <ImageWrapper>
                    <picture>
                        <source
                            srcSet={(mainDesktop1x, mainDesktop2x)}
                            media="(min-width: 1280px)"
                        />
                        <source
                            srcSet={(mainTablet1x, mainTablet2x)}
                            media="(min-width: 768px) and (max-width: 1279px)"
                        />
                        <source
                            srcSet={(mainMobile1x, mainMobile2x)}
                            media="(max-width: 767px)"
                        />
                        <img src={mainDesktop1x} alt="HeroImg" loading="lazy" />
                    </picture>
                </ImageWrapper>
                <Title>Main values of our company</Title>
                <Text>EcoSolution envisions a world where sustainable energy solutions power a brighter and cleaner future for all. We aspire to be at the forefront of the global shift towards renewable energy, leading the way in innovative technologies that harness the power of nature to meet the world&apos;s energy needs.</Text>
            </MainBlock>
                <FeaturesList>
                    {FEATURES.map(item => {
                        return (<FeatureCard key={item.name} item={item} />)
                    })}
                </FeaturesList>
        </AboutSectionStyled>
    )
}