import { Icon } from "../Icon/Icon"
import { Button, ButtonText, IconWrapper } from "./ButtonSend.styled"

export const ButtonSend = () => {

    return (
        <Button type="submit">
            <ButtonText>Send</ButtonText>
            <IconWrapper>
                <Icon iconName="arrow-right" width={'16'} height={'16'} />
            </IconWrapper>
        </Button>
    )
}