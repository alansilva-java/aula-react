import { Item } from "@/app/types/Item";

type AddAction = {
    type: 'add'
    payload: string;
}

type EditTextAction = {
    type: 'editText'
    payload: {
        id:number;
        newText:string;
    }
}

type ToggleDoneAction = {
    type: 'toggleDone'
    payload: {id: number}
}




type ListActions = ;

export const listReducer = (list: Item[], action:ListActions ) => {
    

    return list ;
}