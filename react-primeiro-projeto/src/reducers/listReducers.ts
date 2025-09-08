import { Item } from "@/types/Item"

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
            return list.map((item) => {
                if(item.id === action.payload.id) {
                    item.text = action.payload.newText
                } 
                return item
            })
        case "toggleDone":
            return list.map((item) => {
                if(item.id === action.payload.id) {
                    item.done = !item.done
                } 
                return item
            })
        case "removeItem":
            return list.filter(item => item.id !== action.payload.id)
        default: 
            return list
    }
}