import { useState } from 'react'

import './App.css'

function App() {
  
 const [counter , setCounter] = useState(1)

  const addValue = ()=>{
    if (counter < 20)
    {
      setCounter(counter+1)
    }
  }
  const decreaseValue = ()=>{
      if ( 0 < counter)
      {
        setCounter(counter -1)
      }
  }


  return (
      <>
        <h1>Chai aur React</h1>
        <h2>Counter value : {counter}</h2>

        <button  
        onClick = {addValue}>Add Value</button>
        <br />
        <button onClick={decreaseValue}>Decrease Value</button>
      </>
  )
}

export default App
