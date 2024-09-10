import styled from 'styled-components';

const SectionMenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 33px;
  background-color: #F9F9F9;
  border-radius: 12px;
  padding: 0 44px;
`;

const SectionLeft = styled.div`
  display: flex;
  gap: 150px;
`;

const SectionRight = styled.div`
  margin-right: 183px;
`;

const Text = styled.h3`
  margin: 0;
  font-size: 12px;
  line-height: 14.52px;
  color: #6E7B97;
`;

export default function SectionMenu() {
  return (
    <SectionMenuContainer>
      <SectionLeft>
        <Text>Товары</Text>
        <Text>Параметры</Text>
      </SectionLeft>
      <SectionRight>
        <Text>Видимость</Text>
      </SectionRight>
    </SectionMenuContainer>
  )
}