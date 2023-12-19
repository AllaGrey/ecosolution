import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import { Icon } from '../Icon/Icon';
import { MenuItem } from '../MenuItem/MenuItem';
import { MENU_ITEMS } from '../../constants/MENU_ITEMS';
import {
  MenuContainer,
  MenuTopBar,
  CloseButton,
  Text,
  ListContainer,
  MenuList,
  SocialNetworksWrapper,
  MenuBackdrop,
} from './BurgerMenu.styled';
import { SocialNetwork } from '../SocialNetwork/SocialNetwork';

export const BurgerMenu = ({ isOpen, handleMenuOpen, activeSection }) => {
  const menuContainerRef = useRef(null);

  useEffect(() => {
    const handleCloseByEsc = e => {
      if (e.key === 'Escape') {
        handleMenuOpen();
      }
    };

    const handleCloseByClickOutside = e => {
      if (
        isOpen &&
        menuContainerRef.current &&
        !menuContainerRef.current.contains(e.target)
      ) {
        handleMenuOpen();
      }
    };

    document.addEventListener('keydown', handleCloseByEsc);
    document.addEventListener('mousedown', handleCloseByClickOutside);

    return () => {
      document.removeEventListener('keydown', handleCloseByEsc);
      document.removeEventListener('mousedown', handleCloseByClickOutside);
    };
  }, [handleMenuOpen, isOpen]);

  return (
    <MenuBackdrop $isOpen={isOpen}>
      <MenuContainer ref={menuContainerRef}>
        <MenuTopBar>
          <CloseButton onClick={handleMenuOpen}>
            <Icon iconName="iconamoon_close-light" width={'20'} height={'20'} />
            <Text>close</Text>
          </CloseButton>
        </MenuTopBar>
        <ListContainer>
          <MenuList>
            {MENU_ITEMS.map(item => {
              return (
                <MenuItem
                  key={item.section}
                  item={item}
                  handleMenuOpen={handleMenuOpen}
                  isActiveSection={activeSection === item.id}
                />
              );
            })}
          </MenuList>
          <SocialNetworksWrapper>
            <SocialNetwork handleMenuOpen={handleMenuOpen} />
          </SocialNetworksWrapper>
        </ListContainer>
      </MenuContainer>
    </MenuBackdrop>
  );
};

BurgerMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleMenuOpen: PropTypes.func.isRequired,
  activeSection: PropTypes.string.isRequired,
};
