import React from "react"
import { AttendeeList } from "./components/attendee-list"
import { Header } from "./components/header"


export function App() {

  return (
    <div className="max-w-[1215px] mx-auto">
      <Header />
      <AttendeeList />

    </div>
  )
  
}

