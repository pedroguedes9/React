"use client"

import { QuestionItem } from "@/components/QuestionItem"
import { Results } from "@/components/Results"
import { questions } from "@/data/questions"
import { useState } from "react"




function Page() {
  const title = "Quiz de culinária"
  const [answers, setAnswers] = useState<number[]>([])
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const loadNextQuestion = () => {
    if(questions[currentQuestion + 1] ) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResult(true)
    }
  }
  const handleAnswered = (answer: number) => {
    setAnswers([...answers, answer ])
    loadNextQuestion()
  }
  const handleRestartButton = () => {
    setAnswers([])
    setCurrentQuestion(0)
    setShowResult(false)
  }
  return (
    <div className="bg-blue-600 h-screen w-full flex justify-center items-center ">
      <div className="w-full max-w-xl rounded-md bg-white text-black shadow shadow-black">
        <h1 className=" p-5 text-2xl font-bold border-b border-gray-300">{title}</h1>
        <div className="p-5" >
          {!showResult && 
            <QuestionItem 
              question={questions[currentQuestion]} 
              count={currentQuestion + 1} 
              onAnswer={handleAnswered} 
            />
          }
          {showResult && <Results questions={questions} answers={answers}/>}
        </div>
        <div className="p-5 shadow text-center border-t border-gray-300" >
          {!showResult &&
            `${currentQuestion + 1} de ${questions.length} pergunta${questions.length >= 2 && "s"}`
          }
          {showResult &&
            <button  onClick={handleRestartButton} className="px-3 py-2 rounded-md bg-blue-800 text-white cursor-pointer">Reiniciar</button>
          }
        </div>
      </div>
    </div>
  )
}
export default Page
