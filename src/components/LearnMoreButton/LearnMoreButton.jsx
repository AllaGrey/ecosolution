import { Icon } from '../Icon/Icon';
import { Button, ButtonText, IconWrapper } from './LearnMoreButton.styled';

export const LearnMoreButton = () => {
  const handleScrollToCases = e => {
    e.preventDefault();
    const casesSection = document.getElementById('section-cases');

    if (casesSection) {
      const headerHeight = document.getElementById('header').offsetHeight;
      const topPosition = casesSection.offsetTop - headerHeight;
      window.scrollTo({
        top: topPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Button href="#section-cases" onClick={e => handleScrollToCases(e)}>
      <ButtonText>Learn more</ButtonText>
      <IconWrapper>
        <Icon iconName="arrow-right" width={'16'} height={'16'} />
      </IconWrapper>
    </Button>
  );
};
