"use client"

import { Header } from "@/components/header";
import { CountContext, CountInicialData } from "@/contexts/CountContext";


function Page() {
  return (
    <div className="container mx-auto " >
      <CountContext.Provider value={CountInicialData}>
        <Header/>
      </CountContext.Provider>
    </div>
  );
}
export default Page
