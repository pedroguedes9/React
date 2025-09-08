"use client"

import { listReducer } from "@/reducers/listReducers"
import { useReducer, useState } from "react"
function Page() {
  const [list, dispatch] = useReducer(listReducer, [])
  const [inputValue, setInputValue] = useState("")
  const handleAddButton = () => {
    if(inputValue.trim() !== "") {
      dispatch({
        type: "add",
        payload: {
          text: inputValue.trim()
        }
      })
    } else {
      alert("Precisa ter algo escrito né burrão")
    }
    setInputValue("")
  }
  const handleChecked = (id:number) => {
    dispatch({
      type: "toggleDone",
      payload: { id }
    })
  }
  const handleEditButton = (id:number) => {
    const item = list.find(it => it.id === id)
    if(!item) return false
    const newText = window.prompt("Editar Tarefa", item.text)
    if(!newText || newText?.trim() === "") return false
    dispatch({
      type: "editText",
      payload: {
        id,
        newText: newText 
      }
    })
  }
  const handleDeleteButton = (id:number) => {
    if(!window.confirm("Tem certeza que quer excluir?")) return false
    dispatch({
      type: "removeItem",
      payload: {
        id
      }
    })
  }
  return (
    <div className="container mx-auto " >
      <h1 className="text-center text-4xl my-4 ">Lista de Tarefas</h1>
      <form onSubmit={e => e.preventDefault()} className="border border-gray-400 p-4 flex flex-row gap-4 rounded-md m max-w-2xl mx-auto bg-gray-800">
        <input
          type="text" 
          className="bg-gray-600 text-black border border-gray-300 p-3 flex-1 rounded-md outline-none" 
          placeholder="Novo item da lista"
          value={inputValue}
          onChange={(e) => {setInputValue(e.target.value)}} 
        />
        <button 
          type="submit"
          className="p-4 cursor-pointer"
          onClick={handleAddButton}
        >Adicionar item</button>
      </form>
      <ul className="max-w-2xl mx-auto flex flex-col gap-3">
        {list.map((item, index) => {
          return (
            <li 
              key={index}
              className="flex items-center p-3 border-b border-gray-700"
            >
              <input 
                type="checkbox" 
                onChange={() => {handleChecked(item.id)}} 
                checked={item.done}  
                className="w-5 h-5 mr-2"
              />
              <p className="flex-1 text-lg">{item.text}</p>
              <button onClick={() => { handleEditButton(item.id) }} className="mx-4 cursor-pointer hover:text-gray-500" >Editar</button>
              <button className="mx-4 cursor-pointer hover:text-gray-500 " onClick={() => handleDeleteButton(item.id)}>Excluir</button>
            </li>
          )})}
      </ul>
    </div>
  )
}
export default Page
