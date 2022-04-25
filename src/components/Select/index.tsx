import { HTMLAttributes } from 'react';
import { FuelPump } from '../../models/FuelPump';
import * as Styled from './styles';

export type InputProps = HTMLAttributes<HTMLSelectElement> & {
  label: string;
  preValue?: string;
  options?: FuelPump[];
};

export const Select = ({
  label,
  preValue,
  options,
  defaultValue,
  ...args
}: InputProps) => {
  const renderOptions = () => {
    return options?.map((pump) => {
      const isSelect = preValue === '' ? false : true;

      return (
        <option
          key={pump.id}
          value={pump.id}
          selected={isSelect ? preValue === pump.id : false}
        >
          {pump.type}
        </option>
      );
    });
  };

  return (
    <Styled.Wrapper>
      <Styled.Label>{label}</Styled.Label>
      <Styled.Select {...args}>{renderOptions()}</Styled.Select>
    </Styled.Wrapper>
  );
};
