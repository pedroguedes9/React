"use client"

import { useState } from "react"
type Person = {
  name: string,
  lastName: string
}
function Page() {
const [fullName, setFullName] = useState<Person>({name: "", lastName: ""})
const handleClearButton = () => {
  setFullName({...fullName, name: ""})
  }
  return (
    <div className= "container mx-auto w-screen h-screen flex flex-col justify-center items-center">
      <input 
      type="text"
      placeholder="Nome"
      className="border border-black p-3 text-2xl text-white rounded-md mb-3"
      value={fullName.name}
      onChange={e => setFullName({...fullName, name: e.target.value})}
      />
      <input 
      type="text"
      placeholder="Sobrenome"
      className="border border-black p-3 text-2xl text-white rounded-md mb-3"
      value={fullName.lastName}
      onChange={e => setFullName({...fullName ,lastName: e.target.value})}
      />
      <p>Meu nome completo é:</p>
      <p>{fullName.name} {fullName.lastName}</p>
      <button onClick={handleClearButton}>Limpar Nome</button>
    </div>
  )
}
export default Page
