"use client"
import { headers } from "next/headers";
import styled from "styled-components";
import { Saira_Stencil_One } from "next/font/google";
import { PrimaryInputWSearchIcon } from "./primary-input";


const sairaStencil = Saira_Stencil_One({ 
  weight: ['400'],
  subsets: ["latin"]
});

/*
    Aqui fizemos as configuracoes do nosso Header
*/
interface HeaderProps{

}
const TagHeader = styled.header`
        display: flex;
        align: center;
        justify-content: space-between;
        padding: 20px 160px;
`
const Logo = styled.a`
        color: var(--logo-color);
        font-weight: 400px;
        font-size: 40px;
        line-height: 150%;
`
export default function Header(props : HeaderProps){
    return(
        <TagHeader>
            <Logo className={sairaStencil.className}> Caputeeno </Logo>
           <div>
            <PrimaryInputWSearchIcon placeholder="Procurando por algo especifíco?"/>
            </div>
        </TagHeader>
    )
}