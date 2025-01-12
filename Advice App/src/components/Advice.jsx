import React from 'react'
import { useState, useEffect} from 'react'

export const Advice = () => {
    const [advices, setAdvices] = useState("")
    const [count, setCount] = useState(-0)
    async function AdviceHandler(){
        const apiLink = await fetch("https://api.adviceslip.com/advice")
        const data = await apiLink.json()
        setAdvices(data.slip.advice)
        setCount((c)=>c+=1)
    }
    useEffect(function (){
        AdviceHandler()
    },[])
  return (
    <div>
    <p>{advices}</p>
    <button onClick={AdviceHandler}>Get Advice</button>
    <Counter count={count}/>

    </div>
  )
}

function Counter(props){
    return (
        <p>Today, You have read <b>{props.count}</b> advices</p>
     )
}