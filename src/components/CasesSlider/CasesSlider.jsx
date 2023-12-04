import { useEffect, useState } from "react";
import { SLIDER_DATA } from "../../constants/SLIDER_DATA";
import { Icon } from "../Icon/Icon";
import { SliderItem } from "../SliderItem/SliderItem";

import {
    CasesSliderStyled,
    StatusBar,
    ControlButtons,
    SliderControlButton,
    SlideCounter,
    SlideContainer,
    CurrentCount
} from "./CasesSlider.styled";

const generateInitialIndices = (itemsPerPage) => {
    const initialIndices = [];
    for (let i = 0; i < itemsPerPage; i++) {
        initialIndices.push(i);
    }
    return initialIndices;
    };

    export const CasesSlider = () => {
    let itemsPerPage = 1;

    const [currentSlideIndices, setCurrentSlideIndices] = useState(() => generateInitialIndices(itemsPerPage));
    
    useEffect(() => {
        const handleResize = () => {
        const windowWidth = window.innerWidth;
        const newItemsPerPage = windowWidth < 768 ? 1 : 2;
        setCurrentSlideIndices(generateInitialIndices(newItemsPerPage));
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        () => window.removeEventListener("resize", handleResize);

    },[])

    const lastSlideId = SLIDER_DATA[currentSlideIndices[currentSlideIndices.length - 1]].id

    const goToPrevSlide = () => {
        const newIndices = currentSlideIndices.map((index) => (index - itemsPerPage >= 0 ? index - itemsPerPage : SLIDER_DATA.length - itemsPerPage + index));
        setCurrentSlideIndices(newIndices);
    };

    const goToNextSlide = () => {
        const newIndices = currentSlideIndices.map((index) => (index + 1 < SLIDER_DATA.length ? index + 1 : 0));
        setCurrentSlideIndices(newIndices);
    };

    return (
        <CasesSliderStyled>
            <StatusBar>
                    <SlideCounter>
                        <CurrentCount>{lastSlideId}</CurrentCount>/{SLIDER_DATA.length}
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
                {currentSlideIndices.map((index) => (
                    <SliderItem
                        key={SLIDER_DATA[index % SLIDER_DATA.length].id}
                        item={SLIDER_DATA[index % SLIDER_DATA.length]}
                        goToNextSlide={goToNextSlide} />
                ))}
            </SlideContainer>
        </CasesSliderStyled>
    );
};



