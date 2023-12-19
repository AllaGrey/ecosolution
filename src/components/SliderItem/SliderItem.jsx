import PropTypes from 'prop-types';
import { SliderButton } from '../buttons/SliderButton/SliderButton';
import {
  SliderItemStyled,
  Slide,
  ImageWrapper,
  Img,
  InfoBlockWrapper,
  InfoTopBlock,
  InfoBottomBlock,
  InfoText,
  Region,
} from './SliderItem.styled';

export const SliderItem = ({ item, goToNextSlide }) => {
  return (
    <SliderItemStyled>
      <Slide>
        <ImageWrapper>
          <Img
            srcSet={`${item.url1} 1x, ${item.url2} 2x`}
            src={`${item.url1}`}
            alt="Description"
          />
        </ImageWrapper>
        <InfoBlockWrapper>
          <InfoTopBlock>
            <Region>
              {item.region} {item.company}
            </Region>
            <SliderButton goToNextSlide={goToNextSlide} />
          </InfoTopBlock>
          <InfoBottomBlock>
            <InfoText>{item.technologies}</InfoText>
            <InfoText>{item.period}</InfoText>
          </InfoBottomBlock>
        </InfoBlockWrapper>
      </Slide>
    </SliderItemStyled>
  );
};

SliderItem.propTypes = {
  item: PropTypes.shape({
    url1: PropTypes.string.isRequired,
    url2: PropTypes.string.isRequired,
    region: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    technologies: PropTypes.string.isRequired,
    period: PropTypes.string.isRequired,
  }).isRequired,
  goToNextSlide: PropTypes.func.isRequired,
  current: PropTypes.bool,
};
