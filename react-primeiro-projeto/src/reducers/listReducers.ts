import { Item } from "@/types/Item";
type AddAction = {
    type: "add",
    payload: {
        text: string
    }
}

type EditTextAction = {
    type: "editText"
    payload: {
        id: number, newText: string
    }
}
type ToggleDoneAction = {
    type: "toggleDone",
    payload: {
        id: number
    }
}
type RemoveItemAction = {
    type: "removeItem"
    payload: {
        id: number
    }
}
type ListActions = AddAction | EditTextAction | ToggleDoneAction | RemoveItemAction ;
export const listReducer = (list: Item[], action:ListActions) => {

}