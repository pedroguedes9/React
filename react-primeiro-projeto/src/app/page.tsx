"use client"

import { useEffect, useState } from "react"




function Page() {
  const [name, setName] = useState("Pedro")
  const [age, setAge] = useState(17)
  useEffect(() => {
    console.log("roudou")
  }, [name])
  return (
    <div className="">
      <p>Meu nome é {name} e tenho {age} anos</p>
      <hr />
      <button onClick={() => {setName("Dudu")}}><p> - Mudar para dudu - </p></button>
      <button onClick={() => {setName("Pedro")}}> - Mudar para pedro - </button>
      <button onClick={() => {setAge(10)}}><p> - Mudar para 10 anos - </p></button>
    <button onClick={() => {setAge(17)}}> - Mudar para 17 anos- </button>
    </div>
  )
}
export default Page
