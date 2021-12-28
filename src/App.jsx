import { useState } from 'react'

import { ClientsContext } from './context/ClientsContext'

import Navbar from './components/Navbar'
import './App.css'

function App() {
  const [ clients, setClients ] = useState([]);

  return (
    <>
    <Navbar />
    <ClientsContext.Provider value={ clients, setClients }>

    </ClientsContext.Provider>
    </>
  )
}

export default App
