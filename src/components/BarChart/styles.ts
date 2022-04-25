import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 300px;

    display: flex;
    justify-content: stretch;
    align-items: center;

    font-size: ${theme.font.sizes.small};

    margin-top: ${theme.spacings.medium};
  `}
`;
