import { Item } from "@/app/types/Item";

type AddAction = {
    type: 'add'
    payload:{
        text: string;
    };
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
    payload: {
        id: number}
}

type RemoveAction = {
    type: 'remove'
    payload : number;
}




type ListActions = AddAction | EditTextAction | ToggleDoneAction | RemoveAction;

export const listReducer = (list: Item[], action:ListActions ) => {
    

    return list ;
}