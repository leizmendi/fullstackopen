import { useState } from 'react'

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas' }
    ]) 
    const [newName, setNewName] = useState('nombre y apellido...')

    const handleNewChange = (event) => {
        console.log(event.target.value)
        setNewName(event.target.value)
    }
    const addPerson = (event) => {
        event.preventDefault()
        if (persons.some(person => person.name === newName)) {
            alert(`${newName} is already added to phonebook`)
            setNewName('')
            return
        }
        const personObject = {
            key: newName,
            name: newName
        }
        setPersons(persons.concat(personObject))
        setNewName('')
    }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input 
            value={newName}
            onChange={handleNewChange}          
            />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        <ul>
            {persons.map(person => 
            <li key={person.name}>{person.name}</li>
            )}
        </ul>
    </div>
  )
}

export default App