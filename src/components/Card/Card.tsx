"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Product } from './cardType';
import dots from '@/utils/img/dots.svg';
import Checkbox from './ui/CheckboxInput';
import icon from '@/utils/img/Rectangl.jpg';
import cros from '@/utils/img/cros.svg';
import {
  ButtonCros,
  Dots,
  Name,
  Parameter,
  Row,
  RowLeft,
  RowRight,
  SectionName
} from './styled';

export default function TableRow({ product, handleDelete }: { product: Product, handleDelete: (id: number) => void }) {
  const [isChecked, setIsChecked] = useState(product.visibility);

  useEffect(() => {
    setIsChecked(product.visibility);
  }, [product.visibility]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked)
  }

  return (
    <Row>
      <RowLeft>
        <Dots>
          <Image width={11} height={18} src={dots.src} alt="точки" />
        </Dots>
        <SectionName>
          <Image width={48} height={48} src={icon.src} alt='иконка товара' />
          <Name>{product.name}</Name>
        </SectionName>
        <Parameter>{product.parameters}</Parameter>
      </RowLeft>
      <RowRight>
        <Checkbox checked={isChecked} handleCheckboxChange={handleCheckboxChange} />
        <ButtonCros onClick={() => handleDelete(product.id)}>
          <Image width={12} height={12} src={cros.src} alt="крестик" />
        </ButtonCros>
      </RowRight>
    </Row>
  )
}