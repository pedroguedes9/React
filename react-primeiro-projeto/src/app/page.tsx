"use client"

type TodoItem = {
    label: string,
    checked: boolean
    id: number
}
import { useState } from "react"

function Page() {
  const [itemImput, setItemInput] = useState("")
  const [list, setList] = useState<TodoItem[]>([
    {label: "Fazer o dever de casa", checked: false, id: 1},
    {label: "Estudar", checked: false, id: 2}
  ])
  const handleAddButton = () => {
    {itemImput ?? 
      setList([
            ...list, 
            {label: itemImput, checked: false, id: list.length + 1 }
          ])
      setItemInput("") 
    }
    
  }
  return (
    <div className= "w-screen h-screen flex flex-col items-center text-2xl">
      <h1 className="text-4xl mt-5">Lista de tarefas</h1>
      <div className=" flex  w-full max-w-lg my-3 p-4 rounded-md bg-gray-700 border-2 border-gray-800 gap-3" >
        <input 
        type="text"
        placeholder="O que deseja fazer?"
        className="flex-1 border border-black p-3 text-2xl text-black  bg-white rounded-md  "
        value={itemImput}
        onChange={e =>  (setItemInput(e.target.value))}
        />
        <button onClick={handleAddButton} >Adicionar</button>
      </div>
      <p className="my-4">{list.length} itens na lista</p>
      <ul className="w-full max-w-lg list-disc pl-5'">
        {list.map(item => (
          <li key={item.id}>{item.label} - <button className="hover:underline">[ deletar ]</button></li>
        ))}
        </ul>
    </div>
  )
}
export default Page
