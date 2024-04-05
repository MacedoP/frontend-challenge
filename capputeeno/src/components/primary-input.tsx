import styled from "styled-components";
import { SearchiIcon } from './search-icon';
import { InputHTMLAttributes } from "react";


//Configuracoes para o nosso input, ou da nossa barra de pesquisa

export const PrimaryInput = styled.input`
        width: 352px;
        border-radius: 8px;
        border:none;
        padding: 10px 16px;
        font-family: inherit;
        font-weight: 400px;
        font-size: 14px;
        line-height; 22px;
        background-color: var(--bg-secondary);
        color: var(--text-dark)
    

`
//Estilizacao da nossa div de pesquisa
const InputContainer = styled.div`
    position: relative;
    width: 352px;

    svg{
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
    }


`
interface InputProps extends InputHTMLAttributes<HTMLInputElement>{}
export function PrimaryInputWSearchIcon(props: InputProps){
    return(
        <InputContainer>
            <PrimaryInput {...props}/>
            <SearchiIcon/>
        </InputContainer>
    )
}