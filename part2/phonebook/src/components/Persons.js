const Persons = ({persons, filter}) =>{

    const personsToShow = filter===''
    ? persons
    : persons.filter(person => person.name.toUpperCase().includes(filter.toUpperCase()))

    return(
        <ul>
            {personsToShow.map(person =>
            <p key={person.id}>{person.name}{" "}{person.number}</p>)
            }
        </ul>
    )
}

export default Persons