import { useEffect } from "react"

export const Square = () => {
    useEffect(() => {
        window.addEventListener("scroll", () => {})
        return () => {
            window.removeEventListener("scroll", () => {})
        }
    })

    return (
        <div className="h-50 w-50 bg-blue-400">
            
        </div>
    )
}