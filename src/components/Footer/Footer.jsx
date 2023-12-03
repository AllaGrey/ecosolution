import { ArrowUp } from "../ArrowUp/ArrowUp"
import { ContactInfo } from "../ContactInfo/ContactInfo"
import { Logo } from "../Logo/Logo"
import { SocialNetwork } from "../SocialNetwork/SocialNetwork"
import { FooterStyled, FooterTopBlock, SocialNetworkWrapper, ContactInfoWrapper } from "./Footer.styled"


export const Footer = () => {
    
    return (
        <FooterStyled>
            <FooterTopBlock>
                <Logo />
                <ArrowUp/>
            </FooterTopBlock>
            <SocialNetworkWrapper>
                <SocialNetwork/>
            </SocialNetworkWrapper>
            <ContactInfoWrapper>
                <ContactInfo/>
            </ContactInfoWrapper>
        </FooterStyled>
    )
}