type Props = {
    name:string
    avatar?: string
    roles: string[]
    adress?: string
}
export const Person = ({
    name,
    avatar = "https://media-for2-2.cdn.whatsapp.net/v/t61.24694-24/483647873_1339299243992472_1626682614502700882_n.jpg?ccb=11-4&oh=01_Q5Aa2QHgCvU6HaQwMyTkmbmSh5sbSKsF2DrUJm64tELxLCVpIQ&oe=68A9DA33&_nc_sid=5e03e0&_nc_cat=111",
    roles
}: Props) => {
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