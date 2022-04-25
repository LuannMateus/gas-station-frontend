import styled, { css } from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  border: none;

  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 0.9;
    transform: scale(1.05);
  }
`;

export const EditButton = styled(Button)`
  ${({ theme }) => css`
    width: 4rem;
    height: 4rem;

    border-radius: 4px;

    display: flex;
    justify-content: center;
    align-items: center;

    background: ${theme.colors.primaryColor};
  `}
`;

export const TrashButton = styled(Button)`
  ${({ theme }) => css`
    width: 4rem;
    height: 4rem;

    border-radius: 4px;

    display: flex;
    justify-content: center;
    align-items: center;

    background: ${theme.colors.red};
  `}
`;

export const CreateButton = styled(Button)`
  ${({ theme }) => css`
    width: 5rem;
    height: 4rem;

    border-radius: 4px;

    display: flex;
    justify-content: center;
    align-items: center;

    background: ${theme.colors.primaryColor};
    color: ${theme.colors.white};

    font-size: ${theme.font.sizes.small};

    @media ${theme.media.gtSmall} {
      width: 6rem;
    }
  `}
`;

export const PrintButton = styled(Button)`
  ${({ theme }) => css`
    width: 5rem;
    height: 4rem;

    border-radius: 4px;

    display: flex;
    justify-content: center;
    align-items: center;

    background: ${theme.colors.primaryColor};
    color: ${theme.colors.white};

    font-size: ${theme.font.sizes.small};

    @media ${theme.media.gtSmall} {
      width: 6rem;
    }
  `}
`;

export const SaveButton = styled(Button)`
  ${({ theme }) => css`
    width: 100%;
    height: 4rem;

    border-radius: 4px;

    display: flex;
    justify-content: center;
    align-items: center;

    background: ${theme.colors.primaryColor};
    color: ${theme.colors.white};

    font-size: ${theme.font.sizes.small};
  `}
`;

export const CancelButton = styled(Button)`
  ${({ theme }) => css`
    width: 100%;
    height: 4rem;

    border-radius: 4px;

    display: flex;
    justify-content: center;
    align-items: center;

    background: ${theme.colors.red};
    color: ${theme.colors.white};

    font-size: ${theme.font.sizes.small};
  `}
`;
