"use client"

type TodoItem = {
    label: string,
    checked: boolean,
    id: number
}

import { useState } from "react"

function Page() {
  const [itemImput, setItemInput] = useState("")
  const [list, setList] = useState<TodoItem[]>([
    {id: 1, label: "Fazer o dever de casa", checked: false},
    {id: 2,label: "Estudar", checked: false}
  ])
  
  const handleAddButton = () => {
    if(itemImput.trim() === "") return
    else {
      setList([
        ...list,
        {id: list.length + 1 ,label: itemImput, checked: false}
      ])
      setItemInput("")
    }
  }
  const deleteItem = (id: number) => {
    setList(list.filter((item) => item.id !== id))
  }
  const toggleItem = (id: number) => {
    let newList = [...list]
    for(let i in newList){
      if(newList[i].id === id){
        newList[i].checked = !newList[i].checked
      }
    }
    setList(newList)
  }
  
  return (
    <div className="w-screen h-screen flex flex-col items-center text-2xl">
      <h1 className="text-4xl mt-5">Lista de tarefas</h1>
      <form onSubmit={e => e.preventDefault()} className="flex w-full max-w-lg my-3 p-4 rounded-md bg-gray-700 border-2 border-gray-800 gap-3">
        <input 
          type="text"
          placeholder="O que deseja fazer?"
          className="flex-1 border border-black p-3 text-2xl text-black bg-white rounded-md"
          value={itemImput}
          onChange={e => setItemInput(e.target.value)}
        />
        <button onClick={handleAddButton}>Adicionar</button>
      </form>
      <p className="my-4">{list.length} itens na lista</p>
      <ul className="w-full max-w-lg list-none pl-5">
        {list.map((item) => (
          <li key={item.id}>
            <input type="checkbox"
            onChange={() => toggleItem(item.id)}
            checked={item.checked}
            className="m-3 w-6 h-6"
            />
            {item.label} - <button onClick={() => deleteItem(item.id)} className="hover:underline">[ deletar ]</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Page
