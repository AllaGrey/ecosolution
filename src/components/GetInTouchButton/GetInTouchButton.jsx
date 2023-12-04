import { Icon } from "../Icon/Icon"
import { Button, ButtonText, Ellipse } from "./GetInTouchButton.styled"

export const GetInTouchButton = () => {

    const handleScrollToSection = (e) => {
        e.preventDefault()
        const section = document.getElementById('section-contacts')
        
        if (section) {
            const headerHeight = document.getElementById('header').offsetHeight
            const topPosition = section.offsetTop - headerHeight
            window.scrollTo({
                top: topPosition,
                behavior: 'smooth'
            })
        }
    }

    return (
        <Button onClick={(e)=>handleScrollToSection(e)} >
            <ButtonText>Get in touch</ButtonText>
            <Ellipse><Icon iconName="arrow-right" width={'12'} height={'12'} /></Ellipse>
        </Button>
    )
}
