import './App.css';
import React, { useEffect, useState } from 'react'
import { API } from 'aws-amplify'
import {
  Routes,
  Route
} from "react-router-dom"
import { Container } from '@mui/material'

import Notes from './components/Notes'
import Home from './components/Home'

function App() {

  return (
    <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notes/:id" element={<Notes />} />
        </Routes>
    </Container>
  )
}

export default App
