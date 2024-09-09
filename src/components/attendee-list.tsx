import React from "react";
import { Search } from 'lucide-react'

export function AttendeeList() {
   return(
      <div>

      <div className="flex items-center">
       <h1 className="text-2xl font-bold">Attendees</h1> 
       <div className="px-3  w-72 py-1.5 border border-white/10 
       bg-transparent rounded-lg text-sm flex item-center gap-3" >
       <Search  className="size-4 text-emerald-300"/>
       <input className="bg-transparent flex-1 outline-none"
        placeholder= "Search for Attendee..."/>

   </div>
      </div>

      <table>
         <thead>
            <tr>
               <th>
            <input type="checkbox"/>
            </th>
            <th>Code</th>
            <th>Attendee</th>
            <th>Subscription Date</th>
            <th>Check-in Date</th>

            </tr>
         </thead>
         <tbody>
            <tr>
               <td>
            <input type="checkbox"/>
            </td>
            <td>1283

           
            <div>
               <span>John Wats</span>
               <span>JohnWats@email.com</span>
            </div>
            </td>
            <td>7 days ago</td>
            <td>3 days ago</td>
            <td></td>
            </tr>
         </tbody>
         <tfoot>
            <td colSpan={3}>
            Showing 10 of 228 items 
            </td>
            <td colSpan={3}>
               Page 1 of 23
            </td>

         </tfoot>
      </table>
      </div>


      


   );
}