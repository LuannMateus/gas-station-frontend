import { BarChart } from '../../components/BarChart';
import { CreateButton, PrintButton } from '../../components/Button';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { ReportTable } from '../../components/ReportTable';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as Styled from './styles';
import { FillWithFuelPumpAndTank } from '../../models/Fill';
import { Tank } from '../../models/Tank';
import { getAllTanks } from '../../api/getAllTanks';
import { fillsReportPDF } from '../../reports/fillsReport';
import { getAllFillsWithFuelPumpAndTank } from '../../api/getAllFillsWithFuelPumpAndTank';

export default function Home() {
  const navigate = useNavigate();

  const [tanksState, setTanksState] = useState<Tank[]>([] as Tank[]);
  const [fillsState, setFillsState] = useState<FillWithFuelPumpAndTank[]>(
    [] as FillWithFuelPumpAndTank[],
  );
  const handleGetAllFillsWithFuelPumpAndTank = async () => {
    const fills = await getAllFillsWithFuelPumpAndTank();

    setFillsState(() => fills);
  };

  const handleGetAllTanks = async () => {
    const tanks = await getAllTanks();

    setTanksState(tanks);
  };

  useEffect(() => {
    handleGetAllFillsWithFuelPumpAndTank();
    handleGetAllTanks();
  }, []);

  return (
    <Styled.Wrapper>
      <Header />
      <Styled.MainContainer>
        <Styled.Title>Níveis de combustível em cada tanque</Styled.Title>
        <BarChart data={tanksState || []} />
        <Styled.TitleAndButton>
          <Styled.Title>Abastecimentos</Styled.Title>
          <Styled.ButtonsContainer>
            <PrintButton onClick={() => fillsReportPDF(fillsState)} />
            <CreateButton onClick={() => navigate('/abastecimentos')} />
          </Styled.ButtonsContainer>
        </Styled.TitleAndButton>
        <ReportTable fills={fillsState || []} />
      </Styled.MainContainer>
      <Footer />
    </Styled.Wrapper>
  );
}
