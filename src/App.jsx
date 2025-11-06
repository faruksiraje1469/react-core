import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter' 
import Batsman from './batsman' 

const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json());

function App() {

  const handleClick2 = () => {
    alert('Button Clicked2!')
  }

  function handleClick () {
    alert('Login Successful!')
  }
 
  
  return (
    <>
      
      <h1>Vite + React</h1>

      <Suspense fallback={<div>Loading...</div>}>

      </Suspense>


      <button>Click Me</button>
      <button onClick={handleClick}>Login</button>
      <button onClick={handleClick2}>Click2</button>
      <Counter> </Counter>
      <Batsman> </Batsman>
      
      
   
    </>
  )
}

export default App
