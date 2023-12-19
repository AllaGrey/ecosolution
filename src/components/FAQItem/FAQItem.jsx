import PropTypes from 'prop-types';
import {
  FAQCard,
  OpenSigns,
  ContentBlock,
  Question,
  Answer,
} from './FAQItem.styled';

export const FAQItem = ({ item, active, handleSetActiveItem }) => {
  return (
    <FAQCard onClick={() => handleSetActiveItem(item.question)}>
      <OpenSigns>{active ? '-' : '+'}</OpenSigns>
      <ContentBlock>
        <Question>{item.question}</Question>
        <Answer>{active && item.answer}</Answer>
      </ContentBlock>
    </FAQCard>
  );
};

FAQItem.propTypes = {
  item: PropTypes.shape({
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
  }).isRequired,
  active: PropTypes.bool.isRequired,
  handleSetActiveItem: PropTypes.func.isRequired,
};
