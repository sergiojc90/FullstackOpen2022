const Persons = ({persons, filter,deleteName}) =>{

    const personsToShow = filter===''
    ? persons
    : persons.filter(person => person.name.toUpperCase().includes(filter.toUpperCase()))

    return(
        <>
            {personsToShow.map(person =>{
                return(
                    <p key={person.id}>
                        {person.name}{" "}{person.number}
                        <button value ={person.id} onClick={deleteName}>Delete</button>
                    </p>
                )
            }
            )}
        </>
    )
}

export default Persons