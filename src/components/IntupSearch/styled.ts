import styled from 'styled-components';
import img from '@/utils/img/magnifier.svg'

export const Input = styled.input`
  padding-left: 44px;
  border-radius: 12px;
  border: none;
  width: 216px;
  height: 44px;
  box-sizing: border-box;
  color: #2D3134;
  background: url(${img.src}) no-repeat 12px center;
  background-size: 21px;
  background-color: #F9F9F9;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  transition: background-color .5s ease;

  &:focus {
    outline: none;
    box-shadow: 0 0 10px #b9cde2;
    border-color: #b4cee4;
  }

  &:hover {
    background-color: #f0f5ff;
  }
`