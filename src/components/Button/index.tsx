import { MdEdit, MdOutlineAdd } from 'react-icons/md';
import { FaTrash } from 'react-icons/fa';
import { AiFillPrinter } from 'react-icons/ai';
import * as Styled from './styles';
import { HTMLAttributes } from 'react';

export type ActionButtonProps = HTMLAttributes<HTMLButtonElement> & {
  type: 'edit' | 'trash';
};

export const ActionButton = ({ type, ...args }: ActionButtonProps) => {
  return type === 'edit' ? (
    <Styled.EditButton
      title="Editar abastecimento"
      aria-label="Editar abastecimento"
      {...args}
    >
      <MdEdit fill="#fff" />
    </Styled.EditButton>
  ) : (
    <Styled.TrashButton
      title="Excluir abasteciemento"
      aria-label="Excluir abastecimento"
      {...args}
    >
      <FaTrash fill="#fff" />
    </Styled.TrashButton>
  );
};

export type GeneralButtonProps = HTMLAttributes<HTMLButtonElement>;

export const PrintButton = ({ ...args }: GeneralButtonProps) => {
  return (
    <Styled.PrintButton
      title="Imprimir relatório"
      aria-label="Imprimir relatório"
      {...args}
    >
      <AiFillPrinter />
    </Styled.PrintButton>
  );
};

export const CreateButton = ({ ...args }: GeneralButtonProps) => {
  return (
    <Styled.CreateButton
      title="Criar novo abastecimento"
      aria-label="Criar novo abastecimento"
      {...args}
    >
      <MdOutlineAdd />
    </Styled.CreateButton>
  );
};

export const SaveButton = ({ ...args }: GeneralButtonProps) => {
  return <Styled.SaveButton {...args}>Salvar</Styled.SaveButton>;
};

export const CancelButton = ({ ...args }: GeneralButtonProps) => {
  return <Styled.CancelButton {...args}>Cancelar</Styled.CancelButton>;
};
