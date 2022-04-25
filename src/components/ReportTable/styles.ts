import styled, { css } from 'styled-components';

export const Wrapper = styled.header`
  ${() => css`
    width: 100%;
    height: 100%;

    overflow-x: scroll;

    margin-top: 20px;
  `}
`;

export const Table = styled.table`
  ${() => css`
    width: 100%;

    border-collapse: collapse;
  `}
`;

export const TableHead = styled.thead`
  ${({ theme }) => css`
    background-color: ${theme.colors.primaryColor};

    th {
      color: ${theme.colors.grey};
    }
  `}
`;

export const TableBody = styled.tbody`
  ${({ theme }) => css`
    background-color ${theme.colors.secondaryColor};
  `}
`;

export const TableRow = styled.tr`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    border-bottom: 1px solid ${theme.colors.white};
  `}
`;

export const TableColumn = styled.th`
  ${({ theme }) => css`
    width: 180px;

    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.white};

    padding: 16px;
    margin: 0;

    text-align: center;
  `}
`;

export const ActionButtonContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;

  gap: 4px;
`;
