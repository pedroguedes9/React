"use client"

function Page() {
  function handleClick() {
      alert("funcionou")
    }
  return (
    
    <div className="container mx-auto w-screen h-screen flex justify-center items-center  ">
      <button onClick={() => {
        
      }} className="p-3 bg-blue-700 text-white rounded-3xl"> clique aqui</button>
    </div>
  )
}
export default Page
