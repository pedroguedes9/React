import { peopleList } from "@/data/peapleList"
function Page() {
  const programadores = peopleList.filter(person => person.profession === "programador")
  return (
    <div>
      <h1 className=" text-4xl">Olá Mundo</h1>
      <h2>Frase qualquer</h2>
      {programadores.length > 0 && 
        <div>
          <h3>lista de químicos:</h3>
          <ul>
            {programadores.map(person => 
              <li>{person.name}</li>
            )}
          </ul>
        </div>
      }
    </div>
  )
}
export default Page
