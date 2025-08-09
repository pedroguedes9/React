import { Person } from "@/components/person"
function Page() {
  return (<div>
    <h1 className="bg-amber-600 text-4xl">Olá</h1>
    <h2>mundo</h2>
    <Person
      name = "Elon Musk"
      avatar = "#"
      roles = {["CEO da Tesla", "CEO da SpaceX"]}
    />
    <Person
      name = "Jeff Bezos"
      avatar = "#"
      roles = {["CEO da Amazon", "CEO da Blue Origin"]}
    />
  </div>)

}
export default Page
