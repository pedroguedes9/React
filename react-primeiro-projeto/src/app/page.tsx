"use client"

import { Item } from "@/types/Item"
import { useState } from "react"
function Page() {
  const [list, setList] = useState<Item[]>([])
  const addNewItem = (text:string) => {
    setList([...list, {
      id: list.length,
      text,
      done: false
    } ])
  }
  const editItemText = (id: number, newText: string) => {
    setList(
      list.map((item) => {
        if(item.id === id) {
          item.text = newText
        }
        return item
      })
    )
  }
  const toggleItem = (id:number) => {
    setList(list.map((item) => {
      if(item.id === id) {
        item.done = !item.done
      }
      return item
    }))
  }
  const removeItem = (id: number) => {
    setList(list.filter(item => item.id !== id ))
  }
  return (
    <div className="">
    </div>
  )
}
export default Page
