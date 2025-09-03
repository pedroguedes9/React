"use client"

type TodoItem = {
    label: string,
    checked: boolean
}
import { useState } from "react"

function Page() {
  const [list, setlist] = useState<TodoItem[]>([
    {label: "Fazer o dever de casa", checked: false},
    {label: "Estudar", checked: false}
  ])
  return (
    <div className= "w-screen h-screen flex flex-col items-center text-2xl">
      <h1 className="text-4xl mt-5">Lista de tarefas</h1>
      <form className=" flex  w-full max-w-lg my-3 p-4 rounded-md bg-gray-700 border-2 border-gray-800 gap-3" >
        <input 
        type="text"
        placeholder="O que deseja fazer?"
        className="flex-1 border border-black p-3 text-2xl text-black  bg-white rounded-md  "
        />
        <button>Adicionar</button>
      </form>
      <ul className="w-full max-w-lg list-disc pl-5'">
        {list.map(item => (
          <li>{item.label} - <button className="hover:underline">[ deletar ]</button></li>
        ))}
        </ul>
    </div>
  )
}
export default Page
