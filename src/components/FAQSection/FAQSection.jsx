import { ContactButton } from "../ContactButton/ContactButton"
import { FAQList } from "../FAQList/FAQList"
import { Title } from "../Title/Title"
import { FAQSectionStyled, Text } from "./FAQSection.styled"

export const FAQSection = () => {

    return (
        <FAQSectionStyled id="questions">
            <Title>Frequently Asked Questions</Title>
            <FAQList />
            <Text>Didn&apos;t find the answer to your question?</Text>
            <ContactButton/>
        </FAQSectionStyled>
    )
}