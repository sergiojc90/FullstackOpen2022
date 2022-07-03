import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: '1234567891'
    }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addName = (event) =>{
    event.preventDefault()

    if (newName === '' || newNumber === '')
    return alert("Name or number can't be empty")

    if(newNumber.length < 10)
    return alert("Phone number must have 10 digits")


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

  return (
    <div>
      <h2>Phonebook</h2>
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
        {persons.map(person => <p key ={person.name}>{person.name}{" "}{person.number}</p>)}
      </ul>
    </div>
  )
}

export default App