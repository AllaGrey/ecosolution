import PropType from 'prop-types'
import { TitleStyled } from "./Title.styled"

export const Title = ({children}) => {
    
    return (
        <TitleStyled>{children}</TitleStyled>
    )
}

Title.propTypes = {
    children: PropType.string.isRequired
}

