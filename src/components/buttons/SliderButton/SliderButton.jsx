import PropTypes from 'prop-types';
import { Icon } from '../../Icon/Icon';
import { SliderBtn } from './SliderButton.styled';

export const SliderButton = ({ goToNextSlide }) => {
  return (
    <SliderBtn onClick={goToNextSlide} type="button">
      <Icon iconName="arrow-right" width={'28'} height={'28'} />
    </SliderBtn>
  );
};

SliderButton.propTypes = {
  goToNextSlide: PropTypes.func.isRequired,
};
