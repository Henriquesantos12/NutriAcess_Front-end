import React from 'react';
import styled from 'styled-components';

const StyledCheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
`;

const StyledCheckboxInput = styled.input`
  appearance: none;
  display:flex;
  width: 36px;
  height: 35px;
  border: 2px solid ${({ theme }) => theme.Colors.vinho};
 
  margin-top: 10px;
  border-radius: 10px;
  margin-right: 8px;
  cursor: pointer;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  &:checked::after {
    content: '\\2713';
    display:flex;
    border-radius: 10px;   
    height: 35px;   
    font-size: 30px;
    margin-right:50px;
    padding-right:10px;
    background-color: ${({ theme }) => theme.Colors.amarelo}
  }
`;

const StyledCheckboxText = styled.span`
  font-size: 20px;
  display: flex;
  margin-top: 2px;
  margin-right: 30px;
  width:138px;
`;

interface CheckboxProps {
  name: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  text: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ name, checked, onChange, text }) => {
  return (
    <StyledCheckboxLabel>
      <StyledCheckboxInput type="checkbox" name={name} checked={checked} onChange={onChange} />
      <StyledCheckboxText>{text}</StyledCheckboxText>
    </StyledCheckboxLabel>
  );
};

export default Checkbox;