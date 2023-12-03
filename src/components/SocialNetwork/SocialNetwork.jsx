import propTypes from 'prop-types'
import { Icon } from "../Icon/Icon"
import { IconWrapper } from "./SocialNetwork.styled"

export const SocialNetwork = ({handleMenuOpen}) => {
    return (
        <>
            <IconWrapper href="https://www.facebook.com" target="_blank" onClick={handleMenuOpen}>
                <Icon iconName="facebook" width={'24'} height={'24'} />
            </IconWrapper>
            <IconWrapper href="https://www.instagram.com" target="_blank" onClick={handleMenuOpen}>
                <Icon iconName="instagram" width={'24'} height={'24'} />
            </IconWrapper>
            
        </>
    )
}

SocialNetwork.propTypes = {
    handleMenuOpen: propTypes.func
}