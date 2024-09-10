import {
  SectionLeft,
  SectionMenuContainer,
  SectionRight,
  Text
} from "./styled";

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