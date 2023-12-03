import sprite from '../../assets/icons/sprite.svg'
import PropTypes from 'prop-types'
import { IconStyled } from './Icon.styled'

export const Icon = ({iconName, width, height, stroke, fill }) => {
    
    return (
        <svg width={width} height={height} >
            <IconStyled href={`${sprite}#${iconName}`} fill={fill} stroke={stroke}/>
        </svg>
    )
}

Icon.propTypes = {
    iconName: PropTypes.string.isRequired,
    width: PropTypes.any,
    height: PropTypes.any,
    stroke: PropTypes.string,
    fill: PropTypes.string
}


