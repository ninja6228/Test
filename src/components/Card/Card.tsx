"use client"
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { Product } from './cardType';
import dots from '@/utils/img/dots.svg';
import Checkbox from './ui/CheckboxInput';
import icon from '@/utils/img/Rectangl.jpg';
import cros from '@/utils/img/cros.svg';

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  height: 76px;
  border-bottom: 1px solid #ccc;
  background-color: #FFF;
`;

const RowLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const RowRight = styled.div`
  display: flex;
  align-items: center;
  gap: 185px;
`;

const Dots = styled.div`
  padding: 3px 6.5px;
`;

const SectionName = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

const Name = styled.h3`
  margin: 0;
  color: #2D3134;
  font-size: 14px;
  line-height: 15px;
  font-weight: 500;
`;

const Parameter = styled.h3`
  margin: 0;
  color: #2D3134;
  font-size: 14px;
  line-height: 16px;
  font-weight: 500;
  margin-left: calc(118px -  20px);
  white-space: nowrap;
  max-width: 94px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ButtonCros = styled.button`
  border: none;
  cursor: pointer;
  background-color: #F9F9F9;
  border-radius: 8px;
  padding: 14px;
  transition: box-shadow .5s ease;

  &:hover {
    box-shadow: 0px 0px 15px 0px #b6bcc3;
  }

  &:focus {
    outline: none;
    box-shadow: 0px 0px 15px 0px #b6bcc3;
  }
`;

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