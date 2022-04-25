import * as Styled from './styles';
import { ActionButton } from '../Button';

export const ReportTable = () => {
  return (
    <Styled.Wrapper>
      <Styled.Table>
        <Styled.TableHead>
          <Styled.TableRow>
            <Styled.TableColumn>Data</Styled.TableColumn>
            <Styled.TableColumn>Total</Styled.TableColumn>
            <Styled.TableColumn>Imposto pago</Styled.TableColumn>
            <Styled.TableColumn>Bomba de combustível</Styled.TableColumn>
            <Styled.TableColumn>Quantidade de litros</Styled.TableColumn>
            <Styled.TableColumn>Ações</Styled.TableColumn>
          </Styled.TableRow>
        </Styled.TableHead>
        <Styled.TableBody>
          <Styled.TableRow>
            <Styled.TableColumn>21/02/2021</Styled.TableColumn>
            <Styled.TableColumn>R$ 100</Styled.TableColumn>
            <Styled.TableColumn>R$ 43</Styled.TableColumn>
            <Styled.TableColumn>Bomba de Gasolina A</Styled.TableColumn>
            <Styled.TableColumn>124L</Styled.TableColumn>
            <Styled.TableColumn>
              <Styled.ActionButtonContainer>
                <ActionButton type="edit" />
                <ActionButton type="trash" />
              </Styled.ActionButtonContainer>
            </Styled.TableColumn>
          </Styled.TableRow>
        </Styled.TableBody>
      </Styled.Table>
    </Styled.Wrapper>
  );
};
