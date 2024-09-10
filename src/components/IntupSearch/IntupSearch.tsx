"use client"
import { useState } from 'react';
import { IntupSearchProps } from './IntupSearchType'
import { Input } from './styled';

export default function IntupSearch({ setSearchTerm }: IntupSearchProps) {
  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    setSearchTerm(event.target.value);
  };

  return (
    <Input
      type="text"
      placeholder='Поиск'
      value={value}
      onChange={handleChange}
    />
  )
}