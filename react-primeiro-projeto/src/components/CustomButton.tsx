

type Props = {
    label: string
    action: () => void
}

export const CustomButton = ({label, action}: Props) => {
    const handleButtonClick = () => {
        // código personalizado antes
        action()
        // código personalizado depois
    }
    return (
        <button className="p-3 text-white bg-blue-700 " onClick={handleButtonClick}  >{label}</button>
    )
}