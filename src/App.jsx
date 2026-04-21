import { useEffect, useState } from 'react'

import './App.css'
import Header from './components/Header'
import Dashboard from './components/Dashboard'

function App() {

  const [displayName, setDisplayName] = useState("")
  const [saved, setSaved] = useState(false)
  
  function handleChange(event) {
    //update state of display name to whatever character that is typed in input
    //to figure out its event.target.value, we use console.log
    console.log(event)    
    setDisplayName(event.target.value)
  }

  function handleSave() {
    localStorage.setItem("displayName",displayName)
    setSaved(true)
    
}

  useEffect(() => {
    if (!saved) {
      return
    }
    const id = setTimeout(() => {
      setSaved(false)   
    }, 2000)
    return ()=>clearTimeout(id)
  }, [saved])

  useEffect(() => {
    if (displayName === "") {
      const name = localStorage.getItem("displayName")
      setDisplayName
    }
  },)
  
  return (
 
    <>
      <Header displayName={displayName} />     
      <label>
        Display name
        <input
          type="text"
          value={displayName}
          className="input" 
          //this result of onChange has a .target.value that is what is actually typed in the input field, this is assigned to useState function setDisplayName.
          // .value is actually from the useState variable passed into value={displayName}
          onChange={handleChange}
        />
      </label>
      <button onClick={handleSave}>Save changes</button>

      {saved && <p>Saved successfully</p>}

      <Dashboard />
    </>
  )
}

export default App
