import React from "react"
import { ComponentProps } from "react"

interface NavLinkProps extends ComponentProps<'a'> {
   children: string
   href: string 
}


export function NavLink(props: NavLinkProps) {
   return (
      <a href={props.href} className="font-medium-sm">
     {props.children}
     </a>

   )
}