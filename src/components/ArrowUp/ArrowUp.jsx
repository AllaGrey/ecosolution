import { Icon } from "../Icon/Icon"
import { ArrowUpBtn } from "./ArrowUp.styled"

export const ArrowUp = () => {
    
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <ArrowUpBtn onClick={()=>handleScrollToTop()}>
            <Icon iconName="arrow-right" width={'16'} height={'16'} />
        </ArrowUpBtn>
    )
}