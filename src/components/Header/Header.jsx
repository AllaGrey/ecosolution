import { useEffect, useState, useRef } from "react"
import { BurgerMenu } from "../BurgerMenu/BurgerMenu"
import { Icon } from "../Icon/Icon"
import { MenuButton, HeaderContainer } from "./Header.styled"
import { Logo } from "../Logo/Logo"


export const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolling, setIsScrolling] = useState(false)
    const timerId = useRef(null)

    useEffect(() => {

        const handleScroll = () => {
            setIsScrolling(true);
            clearTimeout(timerId.current);

        timerId.current = setTimeout(() => {
            setIsScrolling(false);
        }, 200);
        }
        
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
            clearTimeout(timerId.current);
        }

    }, [])

    const handleMenuOpen = () => {
        setIsOpen(prev => !prev)
    }

    return (
        <HeaderContainer $isScrolling={isScrolling} id="header" >
            <Logo isScrolling={isScrolling} />
            <MenuButton onClick={()=> handleMenuOpen()}>
                <Icon iconName="menu" width={'16'} height={'16'} />
            </MenuButton>
            <BurgerMenu isOpen={isOpen} handleMenuOpen={handleMenuOpen} />
        </HeaderContainer>
    )
}