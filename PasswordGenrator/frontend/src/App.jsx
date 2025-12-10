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

  if(req.lowerCase) allChars+=lower
  if(req.num) allChars+=numbers
  if(req.symbol) allChars+=symbols
  if(req.upperCase) allChars+=upper

  const genratePassword=()=>{
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
    <div>
      <h1>Password Genrator</h1>
      <div className='flex gap-3'>
      <input type="text" placeholder='Password is' value={password}/>
      <button onClick={()=>genratePassword()}>Genrate</button>
      <button onClick={()=>copyPassword()}>Copy Password</button>
      </div>
      <br />
      Password Length {req.plen}
      <input type="range" min="1" max="50" value={req.plen} onChange={(e)=>setReq((prev)=>({...prev,plen:e.target.value}))}/>
      <br />
      <div className='flex gap-3'>
      Characters Used:
      <input type="checkbox" checked={req.upperCase} onChange={(e)=>setReq((prev)=>({...prev,upperCase:e.target.checked}))}/> UpperCase
      <input type="checkbox" checked={req.lowerCase} onChange={(e)=>setReq((prev)=>({...prev,lowerCase:e.target.checked}))}/> LowerCsae
      <input type="checkbox" checked={req.num} onChange={(e)=>setReq((prev)=>({...prev,num:e.target.checked}))}/> Number
      <input type="checkbox" checked={req.symbol} onChange={(e)=>setReq((prev)=>({...prev,symbol:e.target.checked}))}/> Symbols
      </div>
    </div>
  )
}

export default App
