"use client"

import { questions } from "@/data/questions"
import { useState } from "react"




function Page() {
  const title = "Quiz de culinária"
  const [currentQuestion, setCurrentQuestion] = useState(0)
  return (
    <div className="bg-blue-600 h-screen w-full flex justify-center items-center ">
      <div className="w-full max-w-xl rounded-md bg-white text-black shadow shadow-black">
        <h1 className=" p-5 text-2xl font-bold border-b border-gray-300">{title}</h1>
        <div className="p-5" >
          ...
          </div>
        <div className="p-5 shadow text-center border-t border-gray-300" >
          {currentQuestion + 1} de {questions.length} pergunta{questions.length >= 2 && "s"}
        </div>
      </div>
    </div>
  )
}
export default Page
