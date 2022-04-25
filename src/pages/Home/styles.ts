import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    width: 100%;

    font-size: ${theme.font.sizes.medium};

    margin-top: ${theme.spacings.medium};
    margin-bottom: ${theme.spacings.small};
  `}
`;

export const MainContainer = styled.main`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 0 10px;
`;

export const TitleAndButton = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  align-content: flex-start;
`;

export const ButtonsContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;

    display: flex;
    justify-content: flex-start;

    gap: 4px;

    @media ${theme.media.gtSmall} {
      justify-content: flex-end;
    }
  `}
`;
