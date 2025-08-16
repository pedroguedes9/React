export const Greeting = () => {
    let fullTime = new Intl.DateTimeFormat("pt-br", {
        timeStyle:"short",
        hour12:false,
    }).format()
    const hour = new Date().getHours()
    let greetingPhrase = "Bom dia"
    if (hour >= 0 && hour < 12) {
        greetingPhrase = "Bom Dia"
    } else if (hour >= 12 && hour < 18) {
        greetingPhrase = "Boa Tarde"
    } else if (hour >= 18 &&  hour <= 23) {
        greetingPhrase = "Boa Noite"
    }
    return (
        <div className="flex flex-col items-center">
            <h1 className="font-bold text-9xl text-white ">{fullTime}</h1>
            <p className="font-bold text-5xl text-white">{greetingPhrase}</p>
        </div>
    )
}