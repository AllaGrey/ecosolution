import PropTypes from 'prop-types'
import { Icon } from "../Icon/Icon"
import { MenuItem } from "../MenuItem/MenuItem"
import { MENU_ITEMS } from '../../constants/MENU_ITEMS'
import { MenuContainer, MenuTopBar, CloseButton, Text, ListContainer, MenuList, SocialNetworksWrapper, MenuBackdrop } from "./BurgerMenu.styled"
import { SocialNetwork } from '../SocialNetwork/SocialNetwork'

export const BurgerMenu = ({isOpen, handleMenuOpen, activeSection}) => {
    
    return (
        <MenuBackdrop $isOpen={isOpen}>
            <MenuContainer>
                <MenuTopBar>
                    <CloseButton onClick={handleMenuOpen}>
                        <Icon iconName="iconamoon_close-light" width={'20'} height={'20'} />
                        <Text>close</Text>
                    </CloseButton>
                </MenuTopBar>    
                <ListContainer>
                    <MenuList>
                        {MENU_ITEMS.map(item => {
                            return (<MenuItem key={item.section} item={item} handleMenuOpen={handleMenuOpen} isActiveSection={activeSection === item.id} />)})}
                    </MenuList>
                    <SocialNetworksWrapper>
                        <SocialNetwork handleMenuOpen={handleMenuOpen} />
                    </SocialNetworksWrapper>
                </ListContainer>
            </MenuContainer>                
        </MenuBackdrop>
    )
}

BurgerMenu.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    handleMenuOpen: PropTypes.func.isRequired,
    activeSection: PropTypes.string.isRequired
}