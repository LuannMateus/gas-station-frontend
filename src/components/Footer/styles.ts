import styled, { css } from 'styled-components';

export const Wrapper = styled.footer`
  ${({ theme }) => css`
    position: relative;
    bottom: 0;

    width: 100%;
    height: 10vh;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${theme.colors.primaryColor};

    margin-top: ${theme.spacings.medium};
  `}
`;

export const FooterText = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};

    color: ${theme.colors.grey};
  `}
`;
