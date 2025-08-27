"use client"

import { useState } from "react"

function Page() {
  const [count, setcount] = useState(0)

  const handleClickButton = () => {
    setcount(count + 1)
  } 
  return (
    <div className="container mx-auto w-screen h-screen flex flex-col justify-center items-center">
      <p>{count}</p>
      <button onClick={handleClickButton} className="bg-blue-500 p-3">+1</button>
    </div>
  )
}
export default Page
