import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

export const Card = ({children}: Props) => {
    return (
        <div className="border-2 border-red-600 p-5 m-auto w-96" >
            {children}
        </div>
    )
}