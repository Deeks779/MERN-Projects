import React, { useState } from 'react'

function App() {
  const [password,setPassword]=useState("")
  const [req,setReq] =useState({
    plen : 8,
    upperCase :false,
    lowerCase :true,
    num: true,
    symbol :true
  })

  const upper="QWERTYUIOPASDFGHJKLZXCVBNM"; 
  const lower="qwertyuiopasdfghjklzxcvbnm"
  const numbers="1234567890"
  const symbols="`~!@#$%^&*()_+-=[]{}|;:,./<>?"
  let allChars=""

  

  const genratePassword=()=>{
    if(req.lowerCase) allChars+=lower
    if(req.num) allChars+=numbers
    if(req.symbol) allChars+=symbols
    if(req.upperCase) allChars+=upper
    if(req.lowerCase || req.num || req.upperCase || req.symbol){
      let password=""
      for (let i = 0; i < req.plen; i++) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
      }
      setPassword(password)
    }else{
      alert("Please select at least one option!")
    }
  }

  const copyPassword= async()=>{
    await navigator.clipboard.writeText(password);
    alert("Password Copied!")
  }

  return (
    <div className='max-w-xl mx-auto mt-10 p-8 bg-gray-900 text-white rounded-2xl shadow-2xl '>
      <h1 className='text-3xl font-extrabold mb-8 text-center text-green-400'>Password Genrator</h1>
      <div className='flex gap-4 mb-5'>
      <input type="text" placeholder='Password is' value={password} className='grow p-3 bg-gray-800 border border-gray-700 rounded-lg text-lg font-mono focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-150'/>
      <button onClick={()=>genratePassword()} className='px-5 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition duration-150'>Genrate</button>
      <button onClick={()=>copyPassword()} className='px-5 py-3 border border-green-500 text-green-400 font-semibold rounded-lg hover:bg-green-500 hover:text-gray-900 transition duration-150'>Copy Password</button>
      </div>
      <div className='mb-8'>
        <div className='flex justify items-center mb-2'>
          <label className='text-gray-300 font-medium text-xl '>Password Length </label>
          <span className='text-xl font-bold p-3 text-green-200'>{req.plen}</span>
          <input type="range" min="1" max="50" value={req.plen} onChange={(e)=>setReq((prev)=>({...prev,plen:e.target.value}))} className='w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer range-lg accent-green-500 '/>

        </div>
    
      <div className='flex flex-wrap gap-4 text-gray-300'>
      <span className='font-medium w-full mb-2'>Include</span>
      <label className='inline-flex items-center cursor-pointer'>
      <input type="checkbox" checked={req.upperCase} onChange={(e)=>setReq((prev)=>({...prev,upperCase:e.target.checked}))} className='form-checkbox h-5 w-5 rounded-2xl border-gray-500 bg-gray-700 focus:ring-green-500 accent-green-500 '/> 
      <span className='ml-2'>UpperCase</span>
      </label>
      <label className='inline-flex items-center cursor-pointer'>
      <input type="checkbox" checked={req.lowerCase} onChange={(e)=>setReq((prev)=>({...prev,lowerCase:e.target.checked}))} className='form-checkbox h-5 w-5 rounded-2xl border-gray-500 bg-gray-700 focus:ring-green-500 accent-green-500 '/> 
      <span className='ml-2'>LowerCase</span>
      </label>
      <label className='inline-flex items-center cursor-pointer'>
      <input type="checkbox" checked={req.num} onChange={(e)=>setReq((prev)=>({...prev,num:e.target.checked}))} className='form-checkbox h-5 w-5 rounded-2xl border-gray-500 bg-gray-700 focus:ring-green-500 accent-green-500 '/> 
      <span className='ml-2'>Number</span>
      </label>
      <label className='inline-flex items-center cursor-pointer'>
      <input type="checkbox" checked={req.symbol} onChange={(e)=>setReq((prev)=>({...prev,symbol:e.target.checked}))} className='form-checkbox h-5 w-5 rounded-2xl border-gray-500 bg-gray-700 focus:ring-green-500 accent-green-500 '/> 
      <span className='ml-2'>Symbols</span>
      </label>
      </div>
      </div>
    </div>
  )
}

export default App
