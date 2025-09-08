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
    switch(action.type) {
        case "add":
            return [...list, {
                id: list.length,
                text: action.payload.text,
                done: false
            }]
        case "editText":
            list.map((item) => {
                if(item.id === action.payload.id) {
                    return item.text === action.payload.newText
                } else {
                    return item
                }
            })
        case "toggleDone":
            list.map((item) => {
                if(item.id === action.payload.id) {
                    item.done = !item.done
                } else {
                    return item
                }
            })
        case "removeItem":
            return list.filter(item => item.id !== action.payload.id)
        default: 
            return list
    }
}