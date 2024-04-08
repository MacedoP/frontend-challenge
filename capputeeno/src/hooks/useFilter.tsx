import { FilterContext } from "@/contexts/filter-Context";
import { useContext } from "react";

export function useFilter(){
    return useContext(FilterContext)
}