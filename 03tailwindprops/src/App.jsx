import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Card from './components/Card'
import './App.css'

let myobj={
  name:"Nirmal",
  age:23
}

let myArr=[1,2,3]

function App() {
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl">Tailwind Test</h1> 
      <Card username="chaiaurcode" btnTxt="click me"/>
      <Card username="Nirmal" btnTxt="visit me"/>
    </>
  )
}

export default App
