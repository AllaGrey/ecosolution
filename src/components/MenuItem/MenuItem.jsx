import PropTypes from 'prop-types';
import { Icon } from '../Icon/Icon';
import { IconWrapper, ItemStyled, MenuLink } from './MenuItem.styled';

export const MenuItem = ({ item, handleMenuOpen, isActiveSection }) => {
  const handleClick = e => {
    handleMenuOpen();

    const section = document.getElementById(item.id);
    e.preventDefault();

    if (section) {
      const headerHeight = document.getElementById('header').offsetHeight;
      const topPosition = section.offsetTop - headerHeight;
      window.scrollTo({
        top: topPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <ItemStyled>
      <MenuLink
        href={`#${item.id}`}
        aria-label={item.id}
        onClick={e => handleClick(e)}
        $isActiveSection={isActiveSection}
      >
        {item.section}
      </MenuLink>
      <IconWrapper>
        <Icon iconName="arrow-right" width="16" height="16" />
      </IconWrapper>
    </ItemStyled>
  );
};

MenuItem.propTypes = {
  item: PropTypes.any,
  handleMenuOpen: PropTypes.func,
  isActiveSection: PropTypes.bool.isRequired,
};
