import { Person } from "@/components/person"
import { Card } from "@/components/card"
function Page() {
  return (<div>
    <h1 className="bg-amber-600 text-4xl">Olá</h1>
    <h2>mundo</h2>
    <Card>
      <>
        <h3 className="text-3xl font-bold italic">Frase de efeito</h3>
        <p className="text-right text-sm">Autor Desconhecido</p>
      </>
    </Card>
  </div>)

}
export default Page
