"use client";
import styled from "styled-components";
import FilterByType from "./filter-By-Type";
import { FilterByPriority } from "./filter-by-priority";

interface FilterBarProps{

}

const FilterContanier = styled.div`
    display: flex;
    width: 100%;
    align-items: start;
    justify-content: space-between;

`

//Aqui vamos fazer as configuracoes ada escolha do produto
export default function FilterBar(props: FilterBarProps){
    return(
        <FilterContanier>
            < FilterByType/>
            <FilterByPriority/>

        </FilterContanier>
    )
}