import { CancelButton, SaveButton } from '../../components/Button';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import GasLogo from '../../assets/gasStationIcon.svg';
import * as Styled from './styles';

export default function Fill() {
  return (
    <Styled.Wrapper>
      <Header />
      <Styled.MainContainer>
        <Styled.Title>Cadastro de Novo Abastecimento</Styled.Title>
        <Styled.InputsContainer>
          <Input label="Valor" type="number" />
          <Input label="Bomba de combustível" type="number" />
          <Input label="Data de abastecimento" type="date" />
        </Styled.InputsContainer>
        <Styled.ActionButtonsContainer>
          <CancelButton />
          <SaveButton />
        </Styled.ActionButtonsContainer>
        <Styled.InfoContainer>
          <Styled.Icon src={GasLogo} />
          <Styled.Paragraph>
            Os campos de taxa e quantidade de litros são auto criados de acordo
            com o valor por litro da bomba de combustível e pela taxa fixa de
            13% de imposto
          </Styled.Paragraph>
        </Styled.InfoContainer>
      </Styled.MainContainer>
      <Footer />
    </Styled.Wrapper>
  );
}
