import { Icon } from "../Icon/Icon"
import { SocialNetwork } from "../SocialNetwork/SocialNetwork"
import {ContactList, ContactItem, ContactType, ContentWrapper, ContentItem, ContentText, SocialNetworkWrapper} from './ContactsList.styled'

export const ContactsList = () => {
    return (
            <ContactList>
                <ContactItem>
                    <ContactType>Phone:</ContactType>
                    <ContentWrapper>
                        <ContentItem href="tel:380981234567">
                            <Icon iconName="call" width={'24'} height={'24'} />
                            <ContentText>38 (098) 12 34 567</ContentText>
                        </ContentItem>
                        <ContentItem href="tel:380931234567">
                            <Icon iconName="call" width={'24'} height={'24'} />
                            <ContentText>38 (093) 12 34 567</ContentText>
                        </ContentItem>
                    </ContentWrapper>
                </ContactItem>
                <ContactItem>
                    <ContactType>E-mail:</ContactType>
                    <ContentWrapper>
                        <ContentItem href="mailto: office@ecosolution.com">
                            <Icon iconName="sms" width={'24'} height={'24'} />
                            <ContentText>office@ecosolution.com</ContentText>
                        </ContentItem>
                    </ContentWrapper>
                </ContactItem>
                <ContactItem>
                    <ContactType>Address:</ContactType>
                    <ContentWrapper>
                        <ContentItem
                            href="https://www.google.com/maps?q=79005, Ukraine, Lvivstreet. Shota Rustaveli, 7"
                            target="_blank"
                            rel="noopener noreferrer">
                            <Icon iconName="map" width={'24'} height={'24'} />
                            <ContentText>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</ContentText>
                        </ContentItem>
                    </ContentWrapper>
                </ContactItem>
                <ContactItem>
                    <ContactType>Social Networks:</ContactType>
                    <SocialNetworkWrapper>
                        <SocialNetwork/>
                    </SocialNetworkWrapper>
                </ContactItem>
            </ContactList>
    )
}