import { CheckboxProps } from './CheckboxInputType';
import { CheckboxConteiner, CheckboxInput, CheckboxSwitch } from './styled';

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