import { Question } from "@/types/Question"
import { useState } from "react"

type Props = {
    question: Question
    count: number
    onAnswer: (answer: number) => void
}

export const QuestionItem = ({question, count, onAnswer}: Props) => {
    const [selectedAnswer, setSelecedAnswer] = useState<number | null>(null)
    const checkQuestion = (key:number) => {
        if(selectedAnswer === null) {
            setSelecedAnswer(key)
            onAnswer(key)
        }

    }

    return (
        <div className="flex flex-col gap-5" >
            <h1 className="text-3xl font-bold ">{count}. {question.question}</h1>
            <div className="flex flex-col items-start gap-4">
                {question.options.map((item, key) => {
                    return (
                        <button 
                        key={key} 
                        onClick={() => checkQuestion(key)}
                        className={`border border-blue-300 w-full px-3 py-2 rounded-md text-lg  bg-blue-100  text-left
                            
                            ${selectedAnswer !== null ?"cursor-auto " : " cursor-pointer hover:bg-blue-200"}
                            ${selectedAnswer !== null && selectedAnswer === question.correctAnswer  && selectedAnswer === key && "bg-green-100 border-green-300"}
                            ${selectedAnswer !== null && selectedAnswer !== question.correctAnswer  && selectedAnswer === key && "bg-red-100 border-red-300"}
                            `}
                        >
                            {item}
                        </button>
                    )
                })}
            </div>
        </div>
    )
} 