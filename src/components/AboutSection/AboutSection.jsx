
import mainMobile1x from '../../assets/images/mainMobile1x.jpg'
import mainMobile2x from '../../assets/images/mainMobile2x.jpg'
import mainTablet1x from '../../assets/images/mainTablet1x.jpg'
import mainTablet2x from '../../assets/images/mainTablet2x.jpg'
import mainDesktop1x from '../../assets/images/mainDesktop1x.jpg'
import mainDesktop2x from '../../assets/images/mainDesktop2x.jpg'
import featuresTablet1x1 from '../../assets/images/features-tablet1x-1.jpg'
import featuresTablet1x2 from '../../assets/images/features-tablet1x-2.jpg'
import featuresTablet2x1 from '../../assets/images/features-tablet2x-1.jpg'
import featuresTablet2x2 from '../../assets/images/features-tablet2x-2.jpg'
import featuresDesktop1x1 from '../../assets/images/features-desktop-1x-1.jpg'
import featuresDesktop1x2 from '../../assets/images/features-desktop-1x-2.jpg'
import featuresDesktop2x1 from '../../assets/images/features-desktop-2x-1.jpg'
import featuresDesktop2x2 from '../../assets/images/features-desktop-2x-2.jpg'

import { Title } from "../Title/Title"
import { FeatureCard } from "../FeatureCard/FeatureCard"
import { FEATURES } from '../../constants/FEATURES'
import { AboutSectionStyled, TextWrapper, Text, ContactBlock, MainBlock, FeaturesList, ImageWrapper, InfoWrapper, ArticleText, FeatureImageWrapper } from "./AboutSection.styled"

export const AboutSection = () => {

    return (
        <AboutSectionStyled id="section-about">
            <MainBlock>
                <ContactBlock>
                    <Text
                        href="https://www.google.com/maps?q=79005, Ukraine, Lvivstreet. Shota Rustaveli, 7"
                        target="_blank"
                        rel="noopener noreferrer">
                        79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
                    </Text>
                    <TextWrapper>
                        <Text href='mailto:office@ecosolution.com'>office@ecosolution.com</Text>
                        <Text>ecosolution © 2023</Text>
                    </TextWrapper>
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
                <InfoWrapper>
                    <Title>Main values of our company</Title>
                    <ArticleText>EcoSolution envisions a world where sustainable energy solutions power a brighter and cleaner future for all. We aspire to be at the forefront of the global shift towards renewable energy, leading the way in innovative technologies that harness the power of nature to meet the world&apos;s energy needs.</ArticleText>
                </InfoWrapper>
            </MainBlock>
                <FeaturesList>
                    {FEATURES.map(item => {
                        return (<FeatureCard key={item.name} item={item} />)
                    })}
                    <FeatureImageWrapper>
                        <picture>
                            <source
                                srcSet={(featuresDesktop1x1, featuresDesktop2x1)}
                                media="(min-width: 1280px)"
                            />
                            <source
                                srcSet={(featuresTablet1x1, featuresTablet2x1)}
                                media="(min-width: 768px) and (max-width: 1279px)"
                            />
                            <img src={featuresDesktop1x1} alt="ecosolutions" loading="lazy" />
                        </picture>
                    </FeatureImageWrapper>
                    <FeatureImageWrapper>
                        <picture>
                            <source
                                srcSet={(featuresDesktop1x2, featuresDesktop2x2)}
                                media="(min-width: 1280px)"
                            />
                            <source
                                srcSet={(featuresTablet1x2, featuresTablet2x2)}
                                media="(min-width: 768px) and (max-width: 1279px)"
                            />
                            <img src={featuresDesktop1x2} alt="ecosolutions" loading="lazy" />
                        </picture>
                    </FeatureImageWrapper>
                </FeaturesList>
        </AboutSectionStyled>
    )
}