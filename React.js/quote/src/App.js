import React,{ useEffect,useState } from "react";
import './App.css'

const API = `https://api.adviceslip.com/advice`;

export default function App() {
  const[state,setState] = useState('')
  const advice = async()=>{
    const response = await fetch(API)
    const data = await response.json()
    setState(data.slip.advice)
  }
  useEffect(()=>{
    advice()
  },[])
    // console.log(response); 
  return(
    <>
      <div className="app">
        <div className="card">
            <h1 className="heading">{state}</h1>
            <button className="button" onClick={advice}>
              <span>Give me Advice!</span>
            </button>
        </div>
      </div>
    </>
  )
}