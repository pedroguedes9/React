"use client"

import { FormEvent } from "react"

function Page() {
  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    alert("eae")
  }

  return (
    <div className="container mx-auto w-screen h-screen flex justify-center gap-3 items-center flex-col  ">
      <h1 className="text-5xl ">Form de login</h1>
      <form onSubmit={handleFormSubmit}>
        <input type="text" className="bg-white" />
        <input type="submit" value="enviar" />
      </form>
    </div>
  )
}
export default Page
