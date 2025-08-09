type Props = {
    name:string
    avatar: string
    roles: string[]
    adress?: string
}
export const Person = ({name, avatar, roles}: Props) => {
    return (
        <>
            <h1 style={{color: "red", fontSize: "30px"}} >
                Nome: {name}</h1>
            <img 
                src={avatar} 
                alt={name} />
            <ul>
                <li>{roles[0]}</li>
                <li>{roles[1]}</li>
            </ul>
        </>
    )
}