"use client"

import { listReducer } from "@/reducers/listReducers"
import { useReducer, useState } from "react"
function Page() {
  const [list, dispatch] = useReducer(listReducer, [])
  const handleAddClick = () => {
    dispatch({
      type: "add",
      payload: {
        text: "Novo item"
      }
    })
  }
  return (
    <div className="">
      <button onClick={handleAddClick}>adicionar</button>
    </div>
  )
}
export default Page
