import React from 'react'
import GuestFlowIcon from '../assets/GuestFlowIcon.svg'
import { NavLink } from './nav-link'

export function Header() {
  return(
    <div className= "flex items-center gap-5">
   <img src={GuestFlowIcon}  />
   <nav className="flex items-center gap-5">
      <a href="" className="font-medium text-sm text-zinc-300 ">Events</a> 
      <a href="" className="font-medium text-sm text-zinc-50">Attendees</a> 
      <NavLink  href='Events' children={''}></NavLink>
      <NavLink  href='Attendees' children={''}></NavLink>
   </nav>
   </div>
  )
}