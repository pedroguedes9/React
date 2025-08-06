function getWeekDay() {
    return new Intl.DateTimeFormat(`pt-br`,{weekday: "long"}).format(new Date())
}

export const Person = () => {
    const data: {name:string, lastName:string, avatar:string, roles: string[]} =  {
        name: "Elon",
        lastName: "Musk",
        avatar: "#",
        roles: [
            "CEO da Tesla", "CEO da SpaceX"
        ]
    }
    
    return (
        <>
            <h1 style={{color: "red", fontSize: "30px"}} >
                Nome: {`
                        ${data.name} ${data.lastName}
                    `}</h1>
            <img 
                src={data.avatar} 
                alt={`
                    ${data.name} ${data.lastName}
                `} />
            <ul>
                <li>{data.roles[0]}</li>
                <li>{data.roles[1]}</li>
            </ul>
            <h1>Hoje é: {getWeekDay()}</h1>
        </>
    )
}