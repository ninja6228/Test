"use client"
import { createGlobalStyle } from "styled-components";
import { Inter } from 'next/font/google';
import { listProcut } from "@/utils/moc/listProducts";
import List from "@/components/List/List";

const inter = Inter({ subsets: ['latin'] })

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${inter.style.fontFamily};
    margin: 0;
    padding: 0;
  }
`;

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <List listProcut={listProcut} />
    </>
  )
}
