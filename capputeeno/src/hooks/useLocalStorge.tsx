import { useState } from "react"


//Configuracao do nosso carrinho 
export function useLocalStorage<T>(item: string){
    const [value, setValue]= useState(JSON.parse(localStorage.getItem(item) ?? ''))

    const updateLocalStorage = (newValue: T) => {
            setValue(newValue);
            localStorage.setItem(item,JSON.stringify(newValue));
    }
    return{
        value,
        updateLocalStorage
    }
}