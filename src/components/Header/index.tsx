import { Link } from 'react-router-dom';
import * as Styled from './styles';

export const Header = () => {
  return (
    <Styled.Wrapper>
      <Link to="/">
        <Styled.Title>POSTO DE GASOLINA</Styled.Title>
      </Link>
    </Styled.Wrapper>
  );
};
