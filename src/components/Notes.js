import { useEffect, useState } from 'react'
import {
  Button,
  Container 
} from '@mui/material'
import { 
  useLocation,
  Link
} from 'react-router-dom'


const Notes = () => {
  let location = useLocation()

  const [allNotes, setAllNotes] = useState([])
  const [thisNote, setThisNote] = useState([])

  useEffect(() => {
    console.log("Welcome Notes")

    if(location.state){
      setThisNote(location.state)
    } else {
      console.log("content will be searched")
      const pageName = location.pathname.replace('/notes/', '')
      
      fetch('https://lizhwuftec.execute-api.us-east-1.amazonaws.com/TestStage')
      .then(response => response.json())
      .then(data => {
        setAllNotes(data.Items)
        const foundNote = data.Items.filter(
          item => item.name == pageName
        )

        setThisNote(foundNote[0])
        if(foundNote.length != 1) {
          console.error("found multiple entries in Notes.js")
        }
      })
      .catch((error) => {
        console.error(error, "some error")
      })
    }
  }, [])


  return (
    <Container>
      <h1>This is the notes page</h1>
      {thisNote && 
        <p>These are my notes: {thisNote.name}</p>
      }
      <Link to="/">
        <Button>Home</Button>
      </Link>
    </Container>
  )
}
export default Notes