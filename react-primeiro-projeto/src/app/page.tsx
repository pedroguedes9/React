import { Greeting } from "@/components/greeting"
function Page() {
  return (
    <div className="w-screen h-screen flex flex-row items-center justify-center bg-gradient-to-r from-sky-500 to-indigo-500">
      <Greeting/>
    </div>
  )
}
export default Page
