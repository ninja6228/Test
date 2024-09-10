import styled from 'styled-components';

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  height: 76px;
  border-bottom: 1px solid #ccc;
  background-color: #FFF;
`;

export const RowLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const RowRight = styled.div`
  display: flex;
  align-items: center;
  gap: 185px;
`;

export const Dots = styled.div`
  padding: 3px 6.5px;
`;

export const SectionName = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const Name = styled.h3`
  margin: 0;
  color: #2D3134;
  font-size: 14px;
  line-height: 15px;
  font-weight: 500;
`;

export const Parameter = styled.h3`
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

export const ButtonCros = styled.button`
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