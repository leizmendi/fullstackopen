import { useState } from 'react'
import React, { useRef } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
    const [newName, setNewName] = useState('nombre y apellido...')
    const [newNumber, setNewNumber] = useState('nº de teléfono...')
    const [filter, setFilter] = useState(''); // Estado para el valor del input

    const handleNewNameChange = (event) => {
        console.log(event.target.value)
        setNewName(event.target.value)
    }
    const handleNewNumberChange = (event) => {
        console.log(event.target.value)
        setNewNumber(event.target.value)
    }
    const handleFilterChange = (event) => {
      setFilter(event.target.value);
    };    
    const addPerson = (event) => {
        event.preventDefault()
        if (persons.some(person => person.name === newName)) {
            alert(`${newName} is already added to phonebook`)
            setNewName('')
            return
        }        
        if (persons.some(person => person.number === newNumber)) {
            alert(`${newNumber} is already added to phonebook`)
            setNewNumber('')
            return
        }
        const personObject = {
            key: newName,
            name: newName,
            number: newNumber
        }
        setPersons(persons.concat(personObject))
        setNewName('')
        setNewNumber('')
        focusInput(); // Llamar a la función para enfocar
    }

    const inputRef = useRef(null); // Crear una referencia

    const focusInput = () => {
      if (inputRef.current) {
        inputRef.current.focus(); // Enfocar el input usando la referencia
      }
    };
      
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <h3>Add a new</h3>
      <PersonForm 
          newName={newName} 
          newNumber={newNumber} 
          handleNewNameChange={handleNewNameChange} 
          handleNewNumberChange={handleNewNumberChange} 
          addPerson={addPerson} 
          inputRef={inputRef} 
      />
      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter} />
    </div>
  )
}

export default App