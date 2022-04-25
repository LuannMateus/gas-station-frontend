import * as Styled from './styles';
import { ActionButton } from '../Button';
import { FillWithFuelPumpAndTank } from '../../models/Fill';
import { useNavigate } from 'react-router-dom';
import { deleteOneFill } from '../../api/deleteOneFill';
import { useEffect, useState } from 'react';
import { formatMoney } from '../../utils/formatMoney';
import { formatFloat } from '../../utils/formatFloat';
import { formatDateToPT } from '../../utils/formatDate';

export type ReportTableProps = {
  fills: FillWithFuelPumpAndTank[];
};

export const ReportTable = ({ fills }: ReportTableProps) => {
  const navigate = useNavigate();

  const [fillsState, setFillsState] =
    useState<FillWithFuelPumpAndTank[]>(fills);

  const handleEdit = (id: string) => {
    navigate(`/abastecimentos/${id}`);
  };

  const handleDelete = async (id: string) => {
    await deleteOneFill(id);
    setFillsState(fillsState.filter((fill) => fill.id !== id));
  };

  useEffect(() => {
    setFillsState(fills);
  }, [fills]);

  const renderFills = (fills: FillWithFuelPumpAndTank[]) => {
    return fills.map(
      ({ id, pump, amount, quantityLiters, taxPaid, fill_at }) => (
        <Styled.TableRow key={`${id}_${Math.random()}`}>
          <Styled.TableColumn>
            {formatDateToPT(fill_at || '')}
          </Styled.TableColumn>
          <Styled.TableColumn>{formatMoney(amount)}</Styled.TableColumn>
          <Styled.TableColumn>{formatMoney(taxPaid || 0)}</Styled.TableColumn>
          <Styled.TableColumn>{pump.type}</Styled.TableColumn>
          <Styled.TableColumn>
            {formatFloat(quantityLiters || 0)}L
          </Styled.TableColumn>
          <Styled.TableColumn>
            <Styled.ActionButtonContainer>
              <ActionButton type="edit" onClick={() => handleEdit(id || '')} />
              <ActionButton
                type="trash"
                onClick={() => handleDelete(id || '')}
              />
            </Styled.ActionButtonContainer>
          </Styled.TableColumn>
        </Styled.TableRow>
      ),
    );
  };

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
        <Styled.TableBody>{renderFills(fillsState)}</Styled.TableBody>
      </Styled.Table>
    </Styled.Wrapper>
  );
};
