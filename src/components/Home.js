import { useEffect, useState } from 'react'
import {
  Button,
  Container,
  TextField
} from '@mui/material'
import {
  useNavigate,
} from "react-router-dom"


const Home = () => {
  const navigate = useNavigate()
  const [searchedNote, setSearchedNote] = useState('')
  const [allNotes, setAllNotes] = useState([])
  const [textFieldMsg, setTextFieldMsg] = useState('')

  const buttonStyle = {
    color: "blue",
    padding: "10px",
    fontFamily: "Arial"
  }

  useEffect(() => {
    console.log("Welcome Home")

    fetch('https://lizhwuftec.execute-api.us-east-1.amazonaws.com/TestStage')
    .then(response => response.json())
    .then(data => setAllNotes(data.Items))
    .catch((error) => {
      console.error(error, "some error")
    })
  }, [])

  const searchNote = (event) => {
    event.preventDefault()

    // Match searched title to list of titles
    const foundNotes = allNotes
    const filtered = foundNotes.filter(note => String(note.name).toLowerCase().includes(
      String(searchedNote).toLowerCase()))

    if(filtered.length === 0){
      console.log("note could not be found")
      setTextFieldMsg("Note could not be found")
    } else if(filtered.length > 1){
      console.error("multiple notes found")
      setTextFieldMsg("Multiple notes found")
    } else {
      setTextFieldMsg('')
      const foundNote = filtered[0]
      setSearchedNote('')
      navigate(`/notes/${foundNote.name}`, {state: foundNote})
    }
  }

  const handleNoteChange = (event) => {
    setSearchedNote(event.target.value)
  }

  return (
    <Container>
      <h2 style={{display: 'inline-block'}}>Tutorial Website</h2>

      <form onSubmit={searchNote} >
        <TextField 
          label="Enter note name"
          value={searchedNote}
          onChange={handleNoteChange}
        />
      </form>
      {textFieldMsg != '' &&
      <p>{textFieldMsg}</p>}

    </Container>
  )
}

export default Home