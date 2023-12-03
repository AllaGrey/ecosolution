import { useState } from "react"
import { SLIDER_DATA } from "../../constants/SLIDER_DATA"
import { Icon } from "../Icon/Icon"
import { SliderItem } from "../SliderItem/SliderItem"

import { CasesSliderStyled, StatusBar, ControlButtons, SliderControlButton, SlideCounter, SlideContainer } from "./CasesSlider.styled"

export const CasesSlider = () => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
    
    const totalSlides = String(SLIDER_DATA.length).padStart(2, '0')
    const currentSlide = String(currentSlideIndex + 1).padStart(2, '0')
    
    const goToPrevSlide = () => {
        const isFirstSlide = currentSlideIndex === 0
        const newIndex = isFirstSlide ? SLIDER_DATA.length - 1 : currentSlideIndex - 1
        setCurrentSlideIndex(newIndex)
    }

    const goToNextSlide = () => {
        const isLastSlide = currentSlideIndex === SLIDER_DATA.length - 1
        const newIndex = isLastSlide ? 0 : currentSlideIndex + 1
        setCurrentSlideIndex(newIndex)
    }

    return (
                <CasesSliderStyled>
                    <StatusBar>
                        <SlideCounter>
                            {`${currentSlide}/${totalSlides}`}
                        </SlideCounter>
                        <ControlButtons>
                            <SliderControlButton onClick={goToPrevSlide}>
                                <Icon iconName="arrow-right" width={'36'} height={'36'} />
                            </SliderControlButton>
                            <SliderControlButton onClick={goToNextSlide}>
                                <Icon iconName="arrow-right" width={'36'} height={'36'} />
                            </SliderControlButton>
                        </ControlButtons>
                    </StatusBar>
                    <SlideContainer>
                        {SLIDER_DATA.map((item, index )=> {
                            return (
                                <SliderItem key={item.id} item={item} goToNextSlide={goToNextSlide} current={currentSlideIndex === index} />
                            )
                        })}
                    <SliderItem item={SLIDER_DATA[currentSlideIndex]} goToNextSlide={goToNextSlide} />
                    </SlideContainer>
                </CasesSliderStyled>         
    )
}