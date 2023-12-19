import PropTypes from 'prop-types';
import { Icon } from '../Icon/Icon';
import {
  LogoContainer,
  LogoText,
  LogoSloganWrapper,
  LogoSlogan,
  SpecialLogoSpan,
} from './Logo.styled';

export const Logo = ({ isScrolling = false }) => {
  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <LogoContainer onClick={handleLogoClick}>
      <Icon iconName="logo" width={31} height={18} />
      <LogoText $isScrolling={isScrolling}>ecosolution</LogoText>
      <LogoSloganWrapper>
        <LogoSlogan>
          <SpecialLogoSpan>GREEN</SpecialLogoSpan>ERGY
        </LogoSlogan>
        <LogoSlogan>FOR LIFE</LogoSlogan>
      </LogoSloganWrapper>
    </LogoContainer>
  );
};

Logo.propTypes = {
  isScrolling: PropTypes.bool,
};
