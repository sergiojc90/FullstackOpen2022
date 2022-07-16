import { useState } from 'react'
import { useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import contacts from './services/contacts'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(()=>{
    contacts
      .getAll()
      .then(initialPersons =>{
        setPersons(initialPersons)
      })
  },[])

  const addName = (event) =>{
    event.preventDefault()

    if (newName === '' || newNumber === '')
    return alert("Name or number can't be empty")

    if (persons.some(person => person.name.toUpperCase!==newName.toUpperCase))
    return alert(`${newName} is already added to phonebook`)

    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }

    contacts
      .create(personObject)
      .then(returnedContacts =>{
        setPersons(persons.concat(returnedContacts))
        setNewName('')
        setNewNumber('')
      })
  }
     
  const deleteName = (event) =>{
    const personId = event.target.value
    const toDelete = persons.filter(person => Number(person.id) === Number(personId))

    if (window.confirm(`Delete ${toDelete[0].name}?`) === false) return

    contacts
    .erase(personId)
    .then(setPersons(persons.filter(person => Number(person.id) !== Number(personId))))

  }

  const handleNameChange = (event) =>{
    setNewName(event.target.value)
  }

  const handleNumberChange = event =>{
    setNewNumber(event.target.value)
  }

  const handleFilterChange = event =>{
    setFilter(event.target.value)
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter = {filter} handleFilterChange = {handleFilterChange}/>

      <h2>Add a new</h2>

      <PersonForm addName={addName} newName = {newName} handleNameChange = {handleNameChange} newNumber = {newNumber} handleNumberChange = {handleNumberChange}/>

      <h2>Numbers</h2>

      <Persons persons={persons} filter = {filter} deleteName ={deleteName}/>
    </div>
  )
}

export default App