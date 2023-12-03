import { ContactForm } from "../ContactForm/ContactForm"
import { ContactsList } from "../ContactsList/ContactsList"
import { Title } from "../Title/Title"
import { ContactSectionStyled } from "./ContactSection.styled"


export const ContactSection = () => {
    return (
        <ContactSectionStyled id="contacts">
            <Title>Contact us</Title>
            <ContactsList/>
            <ContactForm/>
        </ContactSectionStyled>
    )
}