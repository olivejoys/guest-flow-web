import React, { ChangeEvent, useEffect, useState } from "react";
import { Search, MoreHorizontal, ChevronsLeft, 
   ChevronLeft, ChevronRight, ChevronsRight } from 'lucide-react'
   import { IconButton } from "./icon-button";
import { Table } from "../table/table";
import { TableHeader } from "../table/table-header";
import { TableCell } from "../table/table-cell";
import { TableRow } from "../table/table-row";
//import { attendees } from "../data/attendees";
import dayjs from 'dayjs';
import relativeTime from "dayjs/plugin/relativeTime";
dayjs().format()
dayjs.extend(relativeTime);

interface Attendee {
   id: string
   name: string
   email: string
   createdAt: string
   checkedInAt: string | null 
}

export function AttendeeList() {
   const [search, setSearch] = useState('')
   const [page, setPage] = useState(1);
   const {attendees, setAttendees} = useState<Attendee[]>([]);

   //const totalPages = Math.ceil(attendees.length / 10);
   const totalPages = 5;

   useEffect(()=>{
       //http://localhost:5000/events/
      // "6ced9c8e-4243-4377-af1f-9307dd1a1842/attendees
     
      const url = 'http://localhost:5000/events/6ced9c8e-4243-4377-af1f-9307dd1a1842/attendees';
      const  fetchData = async ()=>{
         try {
            const response = await fetch(url);
            if (!response.ok) {
              throw new Error(`Response status: ${response.status}`);
            }
        
            const data = await response.json();
            console.log(data);
            setAttendees(data.attendees)
          } catch (error) {
            console.error(error);
          }
      }

      fetchData();
      
   },[]);

   

   function onSearchInputChanged(event: ChangeEvent<HTMLInputElement>) {
      setSearch(event.target.value) 
      
   }

   function goToNextPage() {
      setPage(page + 1)
   }

   function goToPreviousPage() {
      setPage(page - 1)

   }

   function goToFirstPage() {
      setPage(1)
   }
   
   function goToLastPage() {
      setPage(totalPages)
   }



   return (
      <div className="flex flex-col gap-4">
         <div className="flex gap-3 items-center">
            <h1 className="text-2xl font-bold">Attendees</h1>
            <div className="px-3 w-72 py-1.5 border border-white/10 rounded-lg text-sm flex items-center gap-3">
               <Search className="size-4 text-emerald-300" />
               <input onChange={onSearchInputChanged}
                  className="bg-transparent flex-1 outline-none h-auto border-0 p-0 text-sm ring-0"
                  placeholder="Search for Attendee..."
               />
            </div>

            {search}
         </div>

         <div className="border border-white/10 rounded-lg">
            <Table>
               <thead>
                  <tr className="border-b border-white/10">
                     <TableHeader style={{ width: 48 }} className="py-3
                      px-4 text-sm font-semibold text-left">
                        <div className="peer">
                           <input type="checkbox" id="main-checkbox" className="peer hidden" />
                           <label
                              htmlFor="main-checkbox"
                              className="inline-block w-4 h-4 bg-black/20 r\ounded border border-white/10 peer-checked:bg-orange-400"
                           ></label>
                        </div>
                     </TableHeader>
                     <TableHeader >Code</TableHeader>
                     <TableHeader >Attendee</TableHeader>
                     <TableHeader>Subscription Date</TableHeader>
                     <TableHeader style={{ width: 64 }}></TableHeader>
                  </tr>
               </thead>
               <tbody>
                  {attendees && attendees.length > 0 && attendees.slice((page - 1) * 10, page * 10).map((attendee) => {
                     return (
                        <TableRow key={attendee.id}>
                           <TableCell>
                                 <input type="checkbox"
                                  className="size-4 bg-black/20 rounded border
                                  border-white/10 accent-orange-400" />   
                           </TableCell>
                           <TableCell>{attendee.id}</TableCell>
                           <TableCell>
                              <div className="flex flex-col gap-1">
                                 <span className="font-semibold
                                  text-white">{attendee.name}</span>
                                 <span>{attendee.email}</span>
                              </div>
                           </TableCell>
                           <TableCell>
                           {dayjs().to(dayjs(attendee.createdAt))},
                        </TableCell>
                       <TableCell>
                       {dayjs().to(dayjs(attendee.createdAt))}

                       </TableCell>
                           <TableCell>
                              <IconButton transparent>
                                 <MoreHorizontal className="size-4" />
                              </IconButton>
                           </TableCell>
                        </TableRow>
                     );
                  })}
               </tbody>
               <tfoot>
                  <tr>
                     <TableCell className="py-3 px-4 text-sm
                      text-zinc-300" colSpan={3}>
                        Showing 10 of 228 items {attendees && attendees.length}
                     </TableCell>
                     <TableCell className="py-3 px-4 text-sm
                      text-zinc-300 text-right" colSpan={3}>
                        <div className="inline-flex items-center gap-8">
                           <span>Page {page} of {totalPages}</span>
                           <div className="flex gap-1.5"> 
                              <IconButton onClick={goToFirstPage} 
                              disabled={page === 1}>
                                 <ChevronsLeft className="size-4" />
                              </IconButton>
                              <IconButton onClick={goToPreviousPage} 
                              disabled={page === 1}>            
                               <ChevronLeft className="size-4" />
                              </IconButton>
                              <IconButton onClick={goToNextPage} 
                              disabled={page === totalPages}>
                                 <ChevronRight className="size-4" />
                              </IconButton>
                              <IconButton onClick={goToLastPage}>
                                 <ChevronsRight className="size-4" />
                              </IconButton>
                           </div>
                        </div>
                     </TableCell>
                  </tr>
               </tfoot>
            </Table>
         </div>
      </div>
   );
}




