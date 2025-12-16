import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import {FileText,User,Bell,LayoutDashboard,SquareCheck,ChartColumnDecreasing} from 'lucide-react'
function Navbar() {
    const [active, setActive]=useState(0)
  return (
    <div >
      <nav>
        <div className='flex justify-between pl-5 pr-5 pb-2 pt-2 bg-white fixed top-0 z-50 w-full shadow-md'>
            <div className='flex gap-4 pl-7 pr-8'>
              <span className='bg-blue-800 text-white items-center rounded-xl p-2 pt-2'><FileText className='h-8 w-8'/></span>
                <div className='flex flex-col'>
                    <h1 className='text-xl font-bold'>MoM System</h1>
                    <div className='text-xs text-gray-600'>Minutes of Meeting</div>
                </div>
                <div className='hidden md:flex  md:gap-4 pt3 pl-4 md:text-xs pt-2'>
                    <NavLink to='/'onClick={()=>setActive(0)} className={`flex gap-1 rounded p-2 pl-3 pr-4 font-semibold ${active==0?'bg-gray-100':'hover:text-white hover:bg-blue-800'}`}><LayoutDashboard className='stroke-1'/>Dashboard</NavLink>
                    <NavLink to='/prepare' onClick={()=>setActive(1)} className={`flex gap-1 rounded p-2 pl-1 pr-2 font-semibold  ${active==1?'bg-gray-100':'hover:text-white hover:bg-blue-800'}`}><FileText className='stroke-1'/> Prepare MoM</NavLink>
                    <NavLink to='/action' onClick={()=>setActive(2)} className={`flex gap-1 rounded p-2 pl-1 pr-2 font-semibold ${active==2?'bg-gray-100':'hover:text-white hover:bg-blue-800'}`}><SquareCheck className='stroke-1'/>Action Items</NavLink>
                    <NavLink to='/reports'onClick={()=>setActive(3)} className={`flex gap-1 rounded p-2 pl-1 pr-2 font-semibold ${active==3?'bg-gray-100':'hover:text-white hover:bg-blue-800'}`}><ChartColumnDecreasing className='stroke-1'/>Reports</NavLink>
                </div>
            </div>
            <div className='flex gap-4 pt-3'>
                <button type='button'><Bell/></button>
                <button type='button'><User/></button>
            </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
