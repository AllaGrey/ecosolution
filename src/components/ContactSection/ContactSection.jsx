import { ContactForm } from "../ContactForm/ContactForm"
import { ContactsList } from "../ContactsList/ContactsList"
import { Title } from "../Title/Title"
import { ContactSectionStyled, ContentWrapper } from "./ContactSection.styled"


export const ContactSection = () => {
    return (
        <ContactSectionStyled id="section-contacts">
            <Title>Contact us</Title>
            <ContentWrapper>
                <ContactsList/>
                <ContactForm/>
            </ContentWrapper>
        </ContactSectionStyled>
    )
}