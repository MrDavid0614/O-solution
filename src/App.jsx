import { useEffect, useState } from 'react'

import Navbar from './components/Navbar'
import ClientsList from './components/ClientsList'
import AddModal from './components/AddModal';
import EditModal from './components/EditModal';

function App() {
  const [ clients, setClients ] = useState([]);
  const [ client, setClient ] = useState({});
  const [ showAddModal, setShowAddModal ] = useState(false);
  const [ showEditModal, setShowEditModal ] = useState(false);

  const handleOnClick = () => {
    setShowAddModal(true);
  };

  const handleOnAddClient = client => {
    setClients([...clients, client])
  }

  const handleOnEditClick = client => {
    setShowEditModal(true)
    setClient(client)
    console.log(client)
  }

  const handleOnDeleteClick = client => {
    if (confirm(`¿Estás seguro que deseas eliminar el cliente: ${ client.name }?`)) {
      const newClients = [ ...clients ].splice( clients.indexOf(client), 1 )
      setClients( newClients )
      return;
    }
  }

  useEffect(()=> {
    localStorage.getItem('clients') && setClients( JSON.parse( localStorage.getItem('clients') ) )
  }, [])
  
  useEffect(() => {
    if(clients.length) {
      localStorage.setItem('clients', JSON.stringify(clients))
      return;
    }
  }, [clients])

  return (
    <>
    <Navbar onClick={ handleOnClick } />
    <main className="text-white h-full pt-8 px-[40px]">
        <ClientsList clients={ clients } onEditClick={ handleOnEditClick } onDeleteClick={ handleOnDeleteClick } />
        { showAddModal && <AddModal isVisible={ showAddModal } setIsVisible={ setShowAddModal } onAddClient={ handleOnAddClient } /> }
        { showEditModal && <EditModal client={ client } isVisible={ showEditModal } setIsVisible={ setShowEditModal } /> }
    </main>
    </>
  )
}

export default App
