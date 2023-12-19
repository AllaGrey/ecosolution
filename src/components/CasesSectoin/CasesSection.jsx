import { CasesSlider } from '../CasesSlider/CasesSlider';
import { Incrementor } from '../Incrementor/Incrementor';
import { Title } from '../Title/Title';
import {
  CasesSectionStyled,
  CounterBlock,
  CasesBlock,
} from './CasesSection.styled';

export const CasesSection = () => {
  return (
    <CasesSectionStyled id="section-cases">
      <CounterBlock>
        <Title>Electricity we produced for all time</Title>
        <Incrementor />
      </CounterBlock>
      <CasesBlock>
        <Title>Successful cases of our company</Title>
        <CasesSlider />
      </CasesBlock>
    </CasesSectionStyled>
  );
};
