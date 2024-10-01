import React from "react";
import { Search, MoreHorizontal, ChevronsLeft, ChevronLeft, ChevronRight, ChevronsRight } from 'lucide-react'
import { IconButton } from "./icon-button";

export function AttendeeList() {
   return (
      <div className="flex flex-col gap-4">
         <div className="flex gap-3 items-center">
            <h1 className="text-2xl font-bold">Attendees</h1>
            <div className="px-3 w-72 py-1.5 border border-white/10 rounded-lg text-sm flex items-center gap-3">
               <Search className="size-4 text-emerald-300" />
               <input
                  className="bg-transparent flex-1 outline-none h-auto border-0 p-0 text-sm ring-0"
                  placeholder="Search for Attendee..."
               />
            </div>
         </div>

         <div className="border border-white/10 rounded-lg">
            <table className="w-full">
               <thead>
                  <tr className="border-b border-white/10">
                     <th style={{ width: 48 }} className="py-3 px-4 text-sm font-semibold text-left">
                        <div className="peer">
                           <input type="checkbox" id="main-checkbox" className="peer hidden" />
                           <label
                              htmlFor="main-checkbox"
                              className="inline-block w-4 h-4 bg-black/20 rounded border border-white/10 peer-checked:bg-orange-400"
                           ></label>
                        </div>
                     </th>
                     <th className="py-3 px-4 text-sm font-semibold text-left">Code</th>
                     <th className="py-3 px-4 text-sm font-semibold text-left">Attendee</th>
                     <th className="py-3 px-4 text-sm font-semibold text-left">Subscription Date</th>
                     <th style={{ width: 64 }} className="py-3 px-4 text-sm font-semibold text-left">
                        Check-in Date
                     </th>
                  </tr>
               </thead>
               <tbody>
                  {Array.from({ length: 10 }).map((_, i) => {
                     return (
                        <tr key={i} className="border-b border-white/10 hover:bg-white/5">
                           <td className="py-3 px-4 text-sm text-zinc-300">
                              <div className="peer">
                                 <input type="checkbox" id={`checkbox-${i}`} className="peer hidden" />
                                 <label
                                    htmlFor={`checkbox-${i}`}
                                    className="inline-block w-4 h-4 bg-black/20 rounded border border-white/10 peer-checked:bg-orange-400"
                                 ></label>
                              </div>
                           </td>
                           <td className="py-3 px-4 text-sm text-zinc-300">1283</td>
                           <td className="py-3 px-4 text-sm text-zinc-300">
                              <div className="flex flex-col gap-1">
                                 <span className="font-semibold text-white">John Wats</span>
                                 <span>JohnWats@email.com</span>
                              </div>
                           </td>
                           <td className="py-3 px-4 text-sm text-zinc-300"
                           >7 days ago</td>
                           <td className="py-3 px-4 text-sm text-zinc-300"
                           >3 days ago</td>
                           <td className="py-3 px-4 text-sm text-zinc-300">
                              <IconButton transparent>
                                 <MoreHorizontal className="size-4" />
                              </IconButton>
                           </td>
                        </tr>
                     );
                  })}
               </tbody>
               <tfoot>
                  <tr>
                     <td className="py-3 px-4 text-sm text-zinc-300" colSpan={3}>
                        Showing 10 of 228 items
                     </td>
                     <td className="py-3 px-4 text-sm text-zinc-300 text-right" colSpan={3}>
                        <div className="inline-flex items-center gap-8">
                           <span>Page 1 of 23</span>
                           <div className="flex gap-1.5">
                              <IconButton>
                                 <ChevronsLeft className="size-4" />
                              </IconButton>
                              <IconButton>            
                               <ChevronLeft className="size-4" />
                              </IconButton>
                              <IconButton>
                                 <ChevronRight className="size-4" />
                              </IconButton>
                              <IconButton>
                                 <ChevronsRight className="size-4" />
                              </IconButton>
                           </div>
                        </div>
                     </td>
                  </tr>
               </tfoot>
            </table>
         </div>
      </div>
   );
}
