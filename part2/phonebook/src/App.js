import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const addName = (event) =>{
    event.preventDefault()

    if (newName === '' || newNumber === '')
    return alert("Name or number can't be empty")

    if (persons.some(person => person.name.toUpperCase===newName.toUpperCase))
    return alert(`${newName} is already added to phonebook`)

    const personObject = {
      name: newName,
      number: newNumber
    }

    setPersons(persons.concat(personObject))
    setNewName('')
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

  const personsToShow = filter===''
    ? persons
    : persons.filter(person => person.name.toUpperCase().includes(filter.toUpperCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
      Filter shown with <input value = {filter} onChange={handleFilterChange}/>
      </div>

      <h2>Add a new</h2>

      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange}/>
        </div>   
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {personsToShow.map(person => <p key ={person.id}>{person.name}{" "}{person.number}</p>)}
      </ul>
    </div>
  )
}

export default App