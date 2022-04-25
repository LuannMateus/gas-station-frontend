import styled, { css } from 'styled-components';

export const Wrapper = styled.header`
  ${({ theme }) => css`
    width: 100%;
    height: 10vh;

    background-color: ${theme.colors.primaryColor};
    color: ${theme.colors.white};

    display: flex;
    justify-content: flex-start;
    align-items: center;

    padding-left: ${theme.spacings.medium};
  `}
`;

export const Title = styled.h1``;
