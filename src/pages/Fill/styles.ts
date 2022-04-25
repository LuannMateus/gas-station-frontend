import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    margin: ${theme.spacings.large} 0;
    text-align: center;

    color: ${theme.colors.primaryColor};
  `}
`;

export const MainContainer = styled.main`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;

    padding: 0 20px;

    @media ${theme.media.gtSmall} {
      width: 70%;
    }
  `}
`;

export const InputsContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  gap: 8px;
`;

export const Anchor = styled.a`
  width: 100%;
`;

export const ActionButtonsContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;

    display: flex;

    margin-top: ${theme.spacings.medium};

    gap: 8px;
  `}
`;

export const InfoContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    margin: ${theme.spacings.xlarge} 0;
  `}
`;

export const Icon = styled.img`
  ${({ theme }) => css`
    width: 100%;
    height: 6rem;

    @media ${theme.media.gtSmall} {
      height: 8rem;
    }
  `}
`;

export const Paragraph = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};

    @media ${theme.media.gtSmall} {
      font-size: calc(${theme.font.sizes.small} * 1.4);
    }
  `}
`;
