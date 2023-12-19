import { ArrowUp } from '../buttons/ArrowUp/ArrowUp';
import { ContactInfo } from '../ContactInfo/ContactInfo';
import { Logo } from '../Logo/Logo';
import { SocialNetwork } from '../SocialNetwork/SocialNetwork';
import {
  FooterStyled,
  BtnWrapper,
  SocialNetworkWrapper,
  ContactInfoWrapper,
} from './Footer.styled';

export const Footer = () => {
  return (
    <FooterStyled>
      <Logo />
      <BtnWrapper>
        <ArrowUp />
      </BtnWrapper>
      <SocialNetworkWrapper>
        <SocialNetwork />
      </SocialNetworkWrapper>
      <ContactInfoWrapper>
        <ContactInfo />
      </ContactInfoWrapper>
    </FooterStyled>
  );
};
