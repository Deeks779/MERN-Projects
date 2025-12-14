import React, { useEffect, useState } from 'react'
import { Toaster,toast } from 'react-hot-toast';

function App() {
  const [password,setPassword]=useState("")
  const [req,setReq] =useState({
    plen : 8,
    upperCase :false,
    lowerCase :false,
    num: true,
    symbol :false
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
      if(req.plen<8){
      toast.error("Password length should be more than 8")
      setPassword("")
      }else if(req.plen>18){
      toast.error("Password length should be less than 18")
      setPassword("")
      }else{
        let password=""
      for (let i = 0; i < req.plen; i++) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
      }
      setPassword(password)
      }
    }else{
      toast.error("Please select at least one option!")
      setPassword("")
    }
  }
  useEffect(()=>{
    genratePassword()
  },[req])
  const copyPassword= async()=>{
    await navigator.clipboard.writeText(password);
    // alert("Password Copied!")
    toast.success('Password Copied!', {
      style: {
        border: '1px solid #FFA2A2',
        padding: '16px',
        color: '#9D174D',
      },
      iconTheme: {
        primary: '#FFA2A2',
        secondary: '#FFF',
      },
    });
  }

  return (
    <>
   <div class="bg-white p-8 max-w-lg mx-auto shadow-2xl rounded-xl border border-red-200 mt-10">
    <h1 class="text-3xl font-bold mb-6 text-center text-red-600">Random Password Generator</h1>
    
    <div class="flex gap-2 mb-6">
        <input type="text" placeholder='Password is' value={password} class="grow p-3 border border-red-300 rounded-lg bg-red-50 text-red-800 placeholder-red-400 font-mono text-lg" />
        <button onClick={()=>genratePassword()} class="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-200 ease-in-out whitespace-nowrap">
            Generate
        </button>
        <button onClick={()=>copyPassword()} class="bg-red-400 hover:bg-red-500 text-white font-semibold py-3 px-4 rounded-lg transition duration-200 ease-in-out whitespace-nowrap">
            Copy
        </button>
    </div>
    
    <div class="space-y-4">
        <div class="flex items-center space-x-4">
            <label class="text-red-800 font-medium whitespace-nowrap">Password Length </label>
            <span class="text-xl font-bold text-red-600 w-8 text-center">{req.plen}</span>
            <input type="range" min="1" max="50" value={req.plen} 
                onChange={(e)=>setReq((prev)=>({...prev,plen:e.target.value}))} 
                class="w-full h-2 bg-red-200 rounded-lg appearance-none cursor-pointer range-lg [&::-webkit-slider-thumb]:bg-red-600 [&::-moz-range-thumb]:bg-red-600"
            />
        </div>
        <span class="text-red-800 font-medium mr-2">Include</span>
        <div class="flex flex-wrap items-center gap-4 p-4 pt-4">            
            <label class="flex items-center space-x-1 cursor-pointer">
                <input type="checkbox" checked={req.upperCase} onChange={(e)=>setReq((prev)=>({...prev,upperCase:e.target.checked}))} class="form-checkbox text-red-600 bg-red-100 border-red-300 rounded-sm focus:ring-red-500" /> 
                <span class="text-red-700">UpperCase</span>
            </label>
            
            <label class="flex items-center space-x-1 cursor-pointer">
                <input type="checkbox" checked={req.lowerCase} onChange={(e)=>setReq((prev)=>({...prev,lowerCase:e.target.checked}))} class="form-checkbox text-red-600 bg-red-100 border-red-300 rounded-sm focus:ring-red-500" /> 
                <span class="text-red-700">LowerCase</span>
            </label>
            
            <label class="flex items-center space-x-1 cursor-pointer">
                <input type="checkbox" checked={req.num} onChange={(e)=>setReq((prev)=>({...prev,num:e.target.checked}))} class="form-checkbox text-red-600 bg-red-100 border-red-300 rounded-sm focus:ring-red-500" /> 
                <span class="text-red-700">Number</span>
            </label>
            
            <label class="flex items-center space-x-1 cursor-pointer">
                <input type="checkbox" checked={req.symbol} onChange={(e)=>setReq((prev)=>({...prev,symbol:e.target.checked}))} class="form-checkbox text-red-600 bg-red-100 border-red-300 rounded-sm focus:ring-red-500" /> 
                <span class="text-red-700">Symbols</span>
            </label>
        </div>
    </div>
</div>
<Toaster
  position="bottom-right"
  reverseOrder={false}
/>
</>
  )
}

export default App
