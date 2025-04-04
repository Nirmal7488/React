import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

function MyApp(){
  return(
    <div>
      <h1>Custom App!</h1>
    </div>
  )
}

// const ReactElement={
//   type:"a",
//   props:{
//       href:"https://google.com",
//       target:"_blank"
//   },
//   children:"Click to visit google!"
// }

const AnotherElement=(
  <a href="https://google.com" target='_blank'>Visit to google</a>
)

const reactElement = React.createElement(
  'a',{
    href:"https://google.com",
    target:"_blank"
  },
  "click me to visit google"
)


createRoot(document.getElementById('root')).
render(
    <App/>
)
