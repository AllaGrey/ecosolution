import { useState } from 'react';
import { FAQItem } from '../FAQItem/FAQItem';
import { QUESTIONS_DATA } from '../../constants/QUESTIONS_DATA';
import { FAQListStyled } from './FAQList.styled';

export const FAQList = () => {
  const [activeItem, setActiveItem] = useState(QUESTIONS_DATA[0].question);

  const handleSetActiveItem = question => {
    setActiveItem(active => {
      return active !== question ? question : null;
    });
  };

  return (
    <FAQListStyled>
      {QUESTIONS_DATA.map(item => {
        return (
          <FAQItem
            key={item.question}
            item={item}
            active={activeItem === item.question}
            handleSetActiveItem={handleSetActiveItem}
          />
        );
      })}
    </FAQListStyled>
  );
};
