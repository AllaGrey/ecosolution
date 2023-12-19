import { ContactButton } from '../buttons/ContactButton/ContactButton';
import { FAQList } from '../FAQList/FAQList';
import { Title } from '../Title/Title';
import { FAQSectionStyled, ContactBlock, Text } from './FAQSection.styled';

export const FAQSection = () => {
  return (
    <FAQSectionStyled id="section-questions">
      <Title>Frequently Asked Questions</Title>
      <FAQList />
      <ContactBlock>
        <Text>Didn&apos;t find the answer to your question?</Text>
        <ContactButton />
      </ContactBlock>
    </FAQSectionStyled>
  );
};
