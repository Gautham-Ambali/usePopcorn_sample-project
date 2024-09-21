// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useEffect, useState } from "react";

export default function NewProject() {
    const [input,setInput]=useState("100")
    const [from,setFrom]=useState("USD")
    const [to,setTo]=useState("INR")
    const [output,setOutput]=useState("")
    const [isLoading,setIsLoading]=useState(false)

    useEffect(function(){
        const el=document.querySelector(".input")
        
        async function convert(){
            setIsLoading(true)
            const res=await fetch(`https://api.frankfurter.app/latest?amount=${input}&from=${from}&to=${to}`)
            const data=await res.json();
            setOutput(data.rates[to]);
            setIsLoading(false)
        }
        if(to===from) return setOutput(input)
        convert()
    el.focus()
    },[from,input,to])
    return (
      <div>
        <input className="input" type="text" value={input} onChange={e=>setInput(e.target.value)} disabled={isLoading}/>
        <select value={from} onChange={e=>setFrom(e.target.value)} disabled={isLoading}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="CAD">CAD</option>
          <option value="INR">INR</option>
        </select>
        <select value={to} onChange={e=>setTo(e.target.value)} disabled={isLoading}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="CAD">CAD</option>
          <option value="INR">INR</option>
        </select>
        <p style={{fontSize:"30px"}}>{output} {to}</p>
      </div>
    );
  }
  