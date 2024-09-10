import styled from 'styled-components';
import { CheckboxProps } from './CheckboxInputType';

const CheckboxConteiner = styled.label`
  cursor: pointer;
  display: inline-block;
  height: 28px;
  line-height: 28px;
  margin-right: 10px;
  position: relative;
  vertical-align: middle;
  font-size: 14px;
  user-select: none;
`;

const CheckboxSwitch = styled.span`
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  width: 40px;
  height: 24px;
  border: 1px solid rgba(0, 0, 0, .1);
  border-radius: 35%/50%;
  vertical-align: top;
  background: #eee;
  transition: .2s;

  &:before {
    content: '';
    position: absolute;
    top: 1px;
    left: 1px;
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: white;
    box-shadow: 0 3px 5px rgba(0, 0, 0, .3);
    transition: .15s;
  }
`;

const CheckboxInput = styled.input`
  display: block;
  width: 0;
  height: 0;
  position: absolute;
  z-index: -1;
  opacity: 0;

  &:not(:disabled):active + ${CheckboxSwitch}:before {
    box-shadow: inset 0 0 2px rgba(0, 0, 0, .3);
  }

  &:checked + ${CheckboxSwitch} {
    background: #5F9CF7;
  }

  &:checked + ${CheckboxSwitch}:before {
    transform: translateX(16px);
  }
`;

export default function Checkbox({ checked, handleCheckboxChange }: CheckboxProps) {
  return (
    <CheckboxConteiner>
      <CheckboxInput
        type="checkbox"
        checked={checked}
        onChange={handleCheckboxChange}
      />
      <CheckboxSwitch />
    </CheckboxConteiner>
  )
}