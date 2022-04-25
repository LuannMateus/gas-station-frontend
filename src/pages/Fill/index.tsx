import { CancelButton, SaveButton } from '../../components/Button';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { useNavigate, useParams } from 'react-router-dom';
import GasLogo from '../../assets/gasStationIcon.svg';
import * as Styled from './styles';
import { createFill } from '../../api/createFill';
import { ChangeEvent, useEffect, useState } from 'react';
import { getOneFill } from '../../api/getOneFill';
import { formatDate } from '../../utils/formatDate';
import { FuelPump } from '../../models/FuelPump';
import { Select } from '../../components/Select';
import { getAllFuelPumps } from '../../api/getAllFuelPumps';
import { updateOneFill } from '../../api/updateOneFill';
import { Notify } from '../../utils/notify';

export default function Fill() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [valueInputState, setValueInputState] = useState(0);
  const [pumpInputState, setPumpInputState] = useState('');
  const [dateInputState, setDateInputState] = useState('');

  const [selectPumpsState, setSelectPumpsInputState] = useState<FuelPump[]>(
    [] as FuelPump[],
  );

  const handleSave = () => {
    if (valueInputState === 0) {
      Notify.error('Por favor, preencha o campo valor com um valor válido.');
      return;
    }

    if (id) {
      updateOneFill(id, {
        amount: valueInputState,
        pump: pumpInputState,
        fill_at: dateInputState,
      });

      Notify.success('Atualizado com sucesso!');

      navigate('/');
      return;
    } else {
      if (pumpInputState === '') {
        createFill({
          amount: valueInputState,
          pump: selectPumpsState[0].id,
          fill_at: formatDate(new Date().toISOString()),
        });

        Notify.success();

        navigate('/');
        return;
      } else if (dateInputState === '') {
        createFill({
          amount: valueInputState,
          pump: pumpInputState,
          fill_at: formatDate(new Date().toISOString()),
        });

        Notify.success();

        navigate('/');
        return;
      }

      Notify.success();

      createFill({
        amount: valueInputState,
        pump: pumpInputState,
        fill_at: dateInputState,
      });

      navigate('/');
      return;
    }
  };

  const handleOneFill = async (id: string) => {
    const fill = await getOneFill(id);

    setValueInputState(fill.amount);
    setPumpInputState(fill.pump);
    setDateInputState(fill.fill_at || '');
  };

  const handleAllFuelPumps = async () => {
    const fuelPumps = await getAllFuelPumps();

    setSelectPumpsInputState(fuelPumps);
  };

  useEffect(() => {
    handleAllFuelPumps();

    if (id) {
      handleOneFill(id);
    }
  }, [id]);

  return (
    <Styled.Wrapper>
      <Header />
      <Styled.MainContainer>
        {id ? (
          <Styled.Title>Editar Abastecimento</Styled.Title>
        ) : (
          <Styled.Title>Cadastro de Novo Abastecimento</Styled.Title>
        )}

        <Styled.InputsContainer>
          <Input
            label="Valor"
            type="number"
            value={valueInputState || ''}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              const value = parseFloat(event.target.value);

              setValueInputState(value);
            }}
          />
          <Select
            label="Bomba de combustível"
            options={selectPumpsState}
            preValue={pumpInputState || ''}
            defaultValue={selectPumpsState[0]?.id || ''}
            onChange={(event: ChangeEvent<HTMLSelectElement>) => {
              setPumpInputState(event.target.value);
            }}
          />
          <Input
            label="Data de abastecimento"
            type="date"
            value={formatDate(dateInputState) || ''}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              const value = event.target.value;

              setDateInputState(value);
            }}
          />
        </Styled.InputsContainer>
        <Styled.ActionButtonsContainer>
          <CancelButton onClick={() => navigate('/')} />
          <SaveButton onClick={handleSave} />
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
