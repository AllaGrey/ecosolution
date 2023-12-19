import PropTypes from 'prop-types';
import {
  Item,
  ItemTitle,
  ItemText,
  ItemTopBlock,
  BottomBlock,
} from './FeatureCard.styled';
import { Icon } from '../Icon/Icon';

export const FeatureCard = ({ item }) => {
  return (
    <Item>
      <ItemTopBlock>
        <Icon iconName={item.icon} width={'16'} height={'16'} />
        <ItemTitle>{item.name}</ItemTitle>
      </ItemTopBlock>
      <BottomBlock>
        <ItemText>{item.feature}</ItemText>
      </BottomBlock>
    </Item>
  );
};

FeatureCard.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    feature: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  }).isRequired,
};
