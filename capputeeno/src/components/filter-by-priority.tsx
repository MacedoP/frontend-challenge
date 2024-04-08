import styled from "styled-components"
import { ArrowIcon } from "./Arrow-icon"
import { PrimaryInput } from './primary-input';
import { useState } from "react";
import { useFilter } from "@/hooks/useFilter";
import { PriorityTypes } from "@/types/priority-types";



//Aqui fizemos as configuracoes das lista dentro do organizar por

interface ComponentNameProps{

}
const FiltertContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;

    button{
        background: transparent;
        cursor:pointer;
        border:none;
        font-family: inherit;
        font-weight: 400;
        line-height: 22px;
        color: var(--text-dark)
        display: flex;
        align-items: center;
        justify-content: center;
        
    }
`
const PrimaryFilter = styled.ul`
    position: absolute;
    width: 200px;
    background: #FFFFFF;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding: 12px 16px;
    z-index: 999;

    list-style: none;

    top: 100%;
    right: 8px;

    li {
        color: var(--text-dark);
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        cursor: pointer;
    }

    li + li {
        margin-top: 4px;
    }

`
export function FilterByPriority(props: ComponentNameProps){
    const [isOpen, setIsOpen] = useState(false)
    const {setPriority} = useFilter()
    const handleOpen = () => setIsOpen (prev => !prev)

    const handleUpadatePriority = (value: PriorityTypes) =>{
        setPriority(value)
        setIsOpen(false)
    }
    return(
        <FiltertContainer>
            <button onClick={handleOpen} className="btnArrow">
                Organizar por 
                <ArrowIcon/>

            </button>
            {isOpen && <PrimaryFilter>
                <li onClick={() => handleUpadatePriority(PriorityTypes.NEWS)}>Novidades</li>
                <li onClick={() => handleUpadatePriority(PriorityTypes.BIGGEST_PRICE)}>Preço: Maior - menor</li>
                <li onClick={() => handleUpadatePriority(PriorityTypes.MINOR_PRICE)}>Preço: Menor - maior</li>
                <li onClick={() => handleUpadatePriority(PriorityTypes.POPULARITY)}>Mais vendidos</li>


            </PrimaryFilter>}

        </FiltertContainer>
    )

}