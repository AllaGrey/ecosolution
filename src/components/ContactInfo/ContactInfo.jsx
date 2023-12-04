import { ContactDetail } from "./ContactInfo.styled"

export const ContactInfo = () => {
    return (
        <>
            <ContactDetail
                href="https://www.google.com/maps?q=79005, Ukraine, Lvivstreet. Shota Rustaveli, 7"
                target="_blank"
                rel="noopener noreferrer">79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
            </ContactDetail>
            <ContactDetail href="mailto: office@ecosolution.com">office@ecosolution.com</ContactDetail>
            <ContactDetail>ecosolution © 2023</ContactDetail>
        </>
    )
}