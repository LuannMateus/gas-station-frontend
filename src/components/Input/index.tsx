import { InputHTMLAttributes } from 'react';
import * as Styled from './styles';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  placeholder?: string;
};

export const Input = ({ label, placeholder = '', ...args }: InputProps) => {
  return (
    <Styled.Wrapper>
      <Styled.Label>{label}</Styled.Label>
      <Styled.Input placeholder={placeholder} {...args} />
    </Styled.Wrapper>
  );
};
