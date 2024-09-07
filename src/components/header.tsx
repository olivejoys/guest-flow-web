import React from 'react'
import GuestFlowIcon from '../assets/GuestFlowIcon.svg'

export function Header() {
  return(
    <div>
   <img src={GuestFlowIcon}  alt="Guest Flow Icon"/>
   <nav>
      <a href='events'  />
      <a href='attendees' />
   </nav>
   </div>
  )
}