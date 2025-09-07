"use client"

import { Square } from "@/components/Square"
import { use, useEffect, useState } from "react"




function Page() {
const [show, setShow] = useState(false)
  return (
    <div className="">
      <button className="cursor-pointer" onClick={() => setShow(!show)} >Mostrar/ Ocultar</button>
      {show && <Square/>}
    </div>
  )
}
export default Page
