import { Question } from "@/types/Question"

type Props = {
    questions: Question[]
    answers: number[]
}

export const Results = ({questions, answers}: Props) => {
    return (
        <div className="flex flex-col gap-3">
            {questions.map((item, key) => (
                <div key={key} >
                    <h1 className="font-bold">{key+1}. {item.question}</h1>
                    <p>
                        <span>{item.correctAnswer === answers[key] ? "(Acertou!)" : "(Errou!)"} - </span>
                        {item.options[item.correctAnswer]}
                    </p>
                </div>
            ))}
        </div>
    )
}