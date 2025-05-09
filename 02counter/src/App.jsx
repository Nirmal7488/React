import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  const [counter,setCounter] = useState(5);
  //let counter = 5

  const addValue = ()=>{
    if(counter<20){
      setCounter((prevCounter)=>prevCounter+1)//we have to use a callback function to do similar kind of task
      setCounter((prevCounter)=>prevCounter+1)
      setCounter((prevCounter)=>prevCounter+1)
      setCounter((prevCounter)=>prevCounter+1)
    }
  }

  const removeValue = ()=>{
    if(counter>0)
    setCounter(counter-1)
  }
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>counter value : {counter}</h2>

      <button onClick={addValue}>Add value {counter}</button>
      <br /><br />
      <button onClick={removeValue}>Remove value {counter}</button>
      <p>footer : {counter}</p>
    </>
  )
}

export default App
