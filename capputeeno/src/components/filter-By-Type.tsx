"use client"
import styled from 'styled-components';
import FilterBar from './filter_Bar';
import { PageProps } from '../../.next/types/app/layout';
import { useFilter } from '@/hooks/useFilter';
import { FilterType } from '@/types/filter-types';

interface FilterItemProps{
    selected: boolean;


}


//Criamos as listas nao ordenada
const FilterList = styled.ul`
    display:flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    list-style: none;


`
const FilterItem = styled.li<FilterItemProps>`
    font-family: inherit;
    font-size: 12px;
    line-height: 18px;
    text-align: center;
    text-transform: uppercase;
    cursor: pointer;
    font-weight: ${props => props.selected ? '600' : '400'};
    cursor: pointer;

    color: var(--text-dark);
    border-bottom: ${props => props.selected ? '4px solid var(--orange-low);' : ''}


`
export default function FilterByType(){
    const {type, setType} = useFilter();
    const handleChangeType = (value: FilterType)=>{
        setType(value)

    }
    return(
        <FilterList>
            <FilterItem 
                selected={type === FilterType.ALL} 
                onClick={()=> handleChangeType(FilterType.ALL)}>Todos os produtos</FilterItem>

            <FilterItem 
                selected={type === FilterType.SHIRT} 
                onClick={()=> handleChangeType(FilterType.SHIRT)}>Camiseta</FilterItem>

            <FilterItem 
                selected={type === FilterType.MUG} 
                onClick={()=> handleChangeType(FilterType.MUG)}>Canetas</FilterItem>

        </FilterList>
    )
}