"use client"

import { useState } from "react"

function Page() {
  const [count, setCount] = useState(0)
  const handleButtonClick = () => {
    setCount(prev => prev + 1)
    setCount(prev => prev + 1)
    setCount(prev => prev + 1)
    console.log(count)
  }
  return (
    <div className="container mx-auto w-screen h-screen flex flex-col justify-center items-center">
      <p>{count}</p>
      <button onClick={handleButtonClick} className="bg-blue-500 p-3 rounded-md">+2</button>
    </div>
  )
}
export default Page
