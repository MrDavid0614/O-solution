import { useState } from 'react'

import Company from './types/Company'
import companies from './data/companies'
import CompanySelector from './components/CompanySelector/CompanySelector'
import ClientCard from './components/ClientCard'

import './App.css'

function App() {
  const [ currentCompany, setCurrentCompany ] = useState<Company>(companies[0])
  
  const onChange = (company: Company) => {
    setCurrentCompany(company);
  };

  return (
    <>
      <CompanySelector companies={ companies } onChange={ company => onChange(company) } />

      <main>
        <h1>
          Empresa: <span className='company-name'>{ currentCompany.name }</span>
        </h1>

        <section>
          <h3>Clientes:</h3>
          
          { currentCompany.clients.length ? (
              <ul>
                { currentCompany.clients.map(client => <ClientCard client={ client } key={ client.id }/>) }
              </ul>
            )
            :
              <p>Esta empresa no tiene clientes todavía.</p>
          }
        </section>
      </main>
    </>
  )
}

export default App
