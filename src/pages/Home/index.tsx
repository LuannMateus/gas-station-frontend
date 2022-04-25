import { BarChart } from '../../components/BarChart';
import { CreateButton, PrintButton } from '../../components/Button';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { ReportTable } from '../../components/ReportTable';
import * as Styled from './styles';

export default function Home() {
  return (
    <Styled.Wrapper>
      <Header />
      <Styled.MainContainer>
        <Styled.Title>Níveis de combustível em cada tanque</Styled.Title>
        <BarChart />
        <Styled.TitleAndButton>
          <Styled.Title>Abastecimentos</Styled.Title>
          <Styled.ButtonsContainer>
            <PrintButton />
            <CreateButton />
          </Styled.ButtonsContainer>
        </Styled.TitleAndButton>
        <ReportTable />
      </Styled.MainContainer>
      <Footer />
    </Styled.Wrapper>
  );
}
