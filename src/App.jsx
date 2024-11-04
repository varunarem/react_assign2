import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='heading'>Counter App</h1>
    <h1 className='count'>{count}</h1>

    <button className='btn1' onClick={()=>setCount(count+1)}>Increment</button> 

    <button className='btn2' onClick={()=>setCount(count-1)} disabled={count===0}>Decrement</button>

    <button className='btn3' onClick={()=>setCount(0)}>Reset</button>
  </>
)
}

export default App
