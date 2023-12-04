import { useEffect, useState, useRef } from "react"
import { BurgerMenu } from "../BurgerMenu/BurgerMenu"
import { Icon } from "../Icon/Icon"
import { MenuButton, HeaderContainer, MenuWrapper } from "./Header.styled"
import { Logo } from "../Logo/Logo"
import { GetInTouchButton } from "../GetInTouchButton/GetInTouchButton"


export const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolling, setIsScrolling] = useState(false)
    const timerId = useRef(null)

    const [activeSection, setActiveSection] = useState('main');

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

    useEffect(() => {
        const handleScroll = () => {
        const scrollPosition = window.scrollY

        const sections = document.querySelectorAll('[id^="section-"]')

        sections.forEach((section) => {
            const sectionTop = section.offsetTop
            const sectionBottom = sectionTop + section.offsetHeight

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {

            setActiveSection(section.id)
            }
        })
        }

        window.addEventListener('scroll', handleScroll)

        handleScroll()

        return () => {
        window.removeEventListener('scroll', handleScroll)
        }
    }, [activeSection])

    const handleMenuOpen = () => {
        setIsOpen(prev => !prev)
    }

    return (
        <HeaderContainer $isScrolling={isScrolling} id="header" >
            <Logo isScrolling={isScrolling} />
            <MenuWrapper>
                <MenuButton onClick={()=> handleMenuOpen()}>
                <Icon iconName="menu" width={'16'} height={'16'} />
            </MenuButton>
            <GetInTouchButton/>
            </MenuWrapper>
            <BurgerMenu isOpen={isOpen} handleMenuOpen={handleMenuOpen} activeSection={activeSection} />
        </HeaderContainer>
    )
}