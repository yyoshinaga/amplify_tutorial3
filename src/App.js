import './App.css';
import React, { useEffect, useState } from 'react'
import { API } from 'aws-amplify'
import {
  Routes,
  Route
} from "react-router-dom"

import Notes from './components/Notes'

function App() {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    console.log("Welcome App")
    
    fetch('https://lizhwuftec.execute-api.us-east-1.amazonaws.com/TestStage')
    .then(response => response.json())
    .then(data => setNotes(data.Items))
    .catch((error) => {
      console.error(error, "some error")
    })
  }, [])


  return (
    <div className="App">
      {notes[0] && 
      <p>These are my notes: {notes[0].name}</p>
      }
        {/* <Routes>
          <Route path="/notes/:id" element={<Notes />} />
        </Routes> */}
    </div>
  )
}

export default App
