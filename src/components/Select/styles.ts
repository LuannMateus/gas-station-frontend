import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
`;

export const Select = styled.select`
  ${({ theme }) => css`
    width: 100%;

    border-radius: 4px;
    border: 1px solid ${theme.colors.grey};

    padding: 14px 0;
    padding-left: 4px;

    font-size: ${theme.font.sizes.small};

    &:focus {
      outline-color: ${theme.colors.primaryColor};
    }
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: bold;

    color: ${theme.colors.grey};

    margin-bottom: 0.5rem;
  `}
`;
